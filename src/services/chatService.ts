import { Message, ConversationContext } from '../types';

interface ChatInferenceResponse {
  message: {
    text: string;
    rich_content?: Array<{
      type: string;
      title: string;
      subtitle: string;
      image_url: string;
      buttons: Array<{
        label: string;
        action: string;
        url?: string;
        metadata?: Record<string, any>;
      }>;
    }>;
    suggestions?: Array<{
      label: string;
      action: string;
    }>;
  };
  context: {
    customer_intent: string;
    category?: string;
    refurbishment_interest?: boolean;
  };
}

export const callChatInference = async (
  message: string,
  context: ConversationContext = {} as ConversationContext
): Promise<any> => {
  try {
    // Construct the URL for the Supabase Edge Function
    const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/lyzr-chat`;
    
    // Prepare the request payload
    const payload = {
      message,
      context: {
        userIntents: context.userIntents || [],
        productInterests: context.productInterests || [],
        roomTypes: context.roomTypes || [],
        features: context.features || [],
        issues: context.issues || [],
        conversationStage: context.conversationStage || 'initial',
      }
    };

    console.log('Calling Lyzr chat inference with payload:', JSON.stringify(payload));

    // Make the API call
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response from chat inference:', response.status, errorText);
      throw new Error(`HTTP error! Status: ${response.status}\n${errorText}`);
    }

    const data = await response.json();
    console.log('Chat inference response:', JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Error calling chat inference:', error);
    throw new Error(`Error calling chat inference:\n\n${error instanceof Error ? error.message : String(error)}`);
  }
};

// Helper function to convert the Lyzr response to our internal Message format
export const convertApiResponseToMessage = (lyzrResponse: any): Message => {
  if (!lyzrResponse || !lyzrResponse.message) {
    return {
      sender: 'bot',
      content: "I'm sorry, I couldn't process your request properly. Please try again.",
      timestamp: new Date(),
      type: 'text'
    };
  }

  // Basic text response
  if (!lyzrResponse.message.rich_content || lyzrResponse.message.rich_content.length === 0) {
    return {
      sender: 'bot',
      content: lyzrResponse.message.text || "I'm processing your request.",
      timestamp: new Date(),
      type: 'text'
    };
  }

  // If we have rich content, convert it to product recommendations
  if (lyzrResponse.message.rich_content.some((content: any) => content.type === 'card')) {
    return {
      sender: 'bot',
      content: {
        introText: lyzrResponse.message.text || "Here are some products you might like:",
        products: lyzrResponse.message.rich_content
          .filter((content: any) => content.type === 'card')
          .map((card: any) => ({
            id: card.buttons?.find((btn: any) => btn.metadata?.product_id)?.metadata?.product_id || `product-${Math.random().toString(36).substring(2, 9)}`,
            name: card.title || "Product",
            description: card.subtitle || "Product description",
            price: 0, // Price not provided in the response
            imageUrl: card.image_url || 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            category: lyzrResponse.context?.category || 'unknown',
            features: [], // Features not provided in the response
          }))
      },
      timestamp: new Date(),
      type: 'product-recommendation'
    };
  }

  // Default fallback
  return {
    sender: 'bot',
    content: lyzrResponse.message.text || "I'm processing your request.",
    timestamp: new Date(),
    type: 'text'
  };
};

// For backward compatibility, keep the old function name as an alias
export const convertLyzrResponseToMessage = convertApiResponseToMessage;