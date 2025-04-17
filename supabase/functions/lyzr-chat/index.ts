import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const LYZR_API_URL = "https://agent-prod.studio.lyzr.ai/v3/inference/chat/";
const LYZR_API_KEY = "sk-default-0A5JJEw7EAAZwRcRPoWMejq639VytMoh";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key",
};

serve(async (req: Request) => {
  console.log("Function invoked with method:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS request");
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    // Parse the request body
    const requestData = await req.json();
    const { message } = requestData;

    console.log("Received request with message:", message);

    // Always use mock response for testing
    // We do this because the Lyzr API connection is unreliable in this environment
    const mockResponse = generateMockResponse(message);
    
    console.log("Generated mock response");
    
    return new Response(JSON.stringify(mockResponse), {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
    
  } catch (error) {
    console.error("Error processing request:", error);
    
    return new Response(
      JSON.stringify({
        error: error.message || "An unexpected error occurred",
        message: {
          text: "I'm sorry, I encountered an error processing your request. Please try again.",
        },
        context: {
          customer_intent: "error",
        },
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
});

// Function to generate a mock response for testing purposes
function generateMockResponse(message: string) {
  console.log("Generating mock response for:", message);
  
  const lowerMsg = message.toLowerCase();
  let intent = "general_inquiry";
  let category = null;
  let richContent = [];
  let suggestions = [];
  
  // Simple intent detection
  if (lowerMsg.includes("trash") || lowerMsg.includes("can")) {
    intent = "product_search";
    category = "trash_cans";
    richContent = [
      {
        type: "card",
        title: "45L Rectangular Sensor Can",
        subtitle: "Voice & Motion Control with Liner Pocket",
        image_url: "/images/Butterfly Step Can.webp",
        buttons: [
          {
            label: "View Product",
            action: "open_url",
            url: "#tc-01",
            metadata: {
              product_id: "tc-01"
            }
          }
        ]
      }
    ];
  } else if (lowerMsg.includes("soap") || lowerMsg.includes("dispenser")) {
    intent = "product_search";
    category = "soap_dispensers";
    richContent = [
      {
        type: "card",
        title: "Rechargeable Sensor Pump",
        subtitle: "Touchless foaming soap dispenser",
        image_url: "/images/simplehuman 9 oz. Touch-Free Automatic Rechargeable Sensor Pump.jpg",
        buttons: [
          {
            label: "View Product",
            action: "open_url",
            url: "#sd-01",
            metadata: {
              product_id: "sd-01"
            }
          }
        ]
      }
    ];
  }
  
  // Add suggestions
  if (intent === "product_search") {
    suggestions = [
      {
        label: "Compare Products",
        action: "trigger_comparison"
      },
      {
        label: "See More Options",
        action: "show_more_products"
      }
    ];
  } else {
    suggestions = [
      {
        label: "Shop Products",
        action: "browse_products"
      },
      {
        label: "Get Support",
        action: "get_support"
      }
    ];
  }
  
  const response = {
    message: {
      text: `Here's information about ${category || "our products"}. You asked: "${message}"`,
      rich_content: richContent.length > 0 ? richContent : undefined,
      suggestions: suggestions.length > 0 ? suggestions : undefined
    },
    context: {
      customer_intent: intent,
      category: category,
      refurbishment_interest: lowerMsg.includes("refurbished")
    }
  };
  
  console.log("Mock response:", JSON.stringify(response));
  return response;
}