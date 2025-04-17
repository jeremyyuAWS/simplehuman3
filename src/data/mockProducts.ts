import { Product } from '../types';

export const mockProducts: Product[] = [
  // TRASH CANS - KITCHEN
  {
    id: 'tc-01',
    name: '45L Rectangular Sensor Can',
    description: 'Voice & Motion Control with Liner Pocket',
    price: 199.99,
    imageUrl: '/images/Butterfly Step Can.webp',
    category: 'trash-can',
    features: ['Voice Control', 'Motion Sensor', 'Liner Pocket', 'Fingerprint-Resistant'],
    roomType: ['kitchen'],
    finishType: 'Brushed Stainless Steel',
    capacity: '45L'
  },
  {
    id: 'tc-02',
    name: '58L Dual Compartment Sensor Can',
    description: 'Separate compartments for trash and recycling',
    price: 229.99,
    imageUrl: '/images/58L Rectangular Hands-Free Dual Compartment Recycling Kitchen Step Trash Can.webp',
    category: 'trash-can',
    features: ['Dual Compartment', 'Motion Sensor', 'Liner Pocket'],
    roomType: ['kitchen'],
    finishType: 'Black Stainless Steel',
    capacity: '58L'
  },
  {
    id: 'tc-03',
    name: '10L Round Step Can',
    description: 'Compact design for small spaces',
    price: 69.99,
    imageUrl: '/images/Bullet Can.webp',
    category: 'trash-can',
    features: ['Step Pedal', 'Soft-Close Lid', 'Removable Inner Bucket'],
    roomType: ['bathroom', 'office'],
    finishType: 'Rose Gold',
    capacity: '10L'
  },
  {
    id: 'tc-04',
    name: '6L Round Sensor Can',
    description: 'Touchless design for bathroom or office',
    price: 89.99,
    imageUrl: '/images/Bullet Can.webp',
    category: 'trash-can',
    features: ['Motion Sensor', 'Rechargeable', 'Waterproof Sensor'],
    roomType: ['bathroom', 'office'],
    finishType: 'White',
    capacity: '6L'
  },
  {
    id: 'tc-05',
    name: '20L Slim Open Can',
    description: 'Space-saving design for tight spaces',
    price: 49.99,
    imageUrl: '/images/Slim Step Can.webp',
    category: 'trash-can',
    features: ['Slim Profile', 'Open Top', 'Easy to Clean'],
    roomType: ['kitchen', 'office'],
    finishType: 'Brushed Stainless Steel',
    capacity: '20L'
  },
  {
    id: 'tc-06',
    name: '30L Butterfly Step Can',
    description: 'Split doors open from the center for easy access',
    price: 129.99,
    imageUrl: '/images/30L Butterfly Step Can.webp',
    category: 'trash-can',
    features: ['Butterfly Lid', 'Step Pedal', 'Fingerprint-Resistant'],
    roomType: ['kitchen'],
    finishType: 'White Stainless Steel',
    capacity: '30L'
  },
  
  // SOAP DISPENSERS
  {
    id: 'sd-01',
    name: 'Rechargeable Sensor Pump',
    description: 'Touchless foaming soap dispenser',
    price: 79.99,
    imageUrl: '/images/simplehuman 9 oz. Touch-Free Automatic Rechargeable Sensor Pump.jpg',
    category: 'soap-dispenser',
    features: ['Sensor', 'Rechargeable', 'Foaming', 'Adjustable Volume'],
    roomType: ['bathroom', 'kitchen'],
    finishType: 'Brushed Nickel',
    soapType: 'Foaming'
  },
  {
    id: 'sd-02',
    name: 'Touch-Free Sensor Pump',
    description: 'Battery-powered liquid soap dispenser',
    price: 59.99,
    imageUrl: '/images/Liquid Sensor Pump.webp',
    category: 'soap-dispenser',
    features: ['Sensor', 'Battery-Powered', 'Liquid'],
    roomType: ['bathroom', 'kitchen'],
    finishType: 'White',
    soapType: 'Liquid'
  },
  {
    id: 'sd-03',
    name: 'Compact Sensor Pump',
    description: 'Space-saving design for smaller countertops',
    price: 49.99,
    imageUrl: '/images/Liquid Sensor Pump.webp',
    category: 'soap-dispenser',
    features: ['Compact', 'Sensor', 'Battery-Powered', 'Foaming'],
    roomType: ['bathroom', 'office'],
    finishType: 'Black',
    soapType: 'Foaming'
  },
  {
    id: 'sd-04',
    name: 'Twin Sensor Pump',
    description: 'Dual dispensers for soap and sanitizer or lotion',
    price: 99.99,
    imageUrl: '/images/simplehuman 9 oz. Touch-Free Automatic Rechargeable Sensor Pump.jpg',
    category: 'soap-dispenser',
    features: ['Dual Dispensers', 'Sensor', 'Rechargeable', 'Adjustable Volume'],
    roomType: ['bathroom', 'kitchen'],
    finishType: 'Rose Gold',
    soapType: 'Both'
  },
  {
    id: 'sd-05',
    name: 'Wall Mount Sensor Pump',
    description: 'Space-saving wall-mounted soap dispenser',
    price: 69.99,
    imageUrl: '/images/Liquid Sensor Pump.webp',
    category: 'soap-dispenser',
    features: ['Wall Mount', 'Sensor', 'Battery-Powered', 'Liquid'],
    roomType: ['bathroom', 'kitchen'],
    finishType: 'Brushed Stainless Steel',
    soapType: 'Liquid'
  },
  
  // PAPER TOWEL HOLDERS
  {
    id: 'pt-01',
    name: 'Quick-Grip Paper Towel Holder',
    description: 'One-handed tear design with weighted base',
    price: 29.99,
    imageUrl: '/images/simplehuman Standing Paper Towel Holder with Spray Pump.jpg',
    category: 'paper-towel',
    features: ['Quick-Grip', 'Weighted Base', 'Non-Slip'],
    roomType: ['kitchen'],
    finishType: 'Brushed Stainless Steel'
  },
  {
    id: 'pt-02',
    name: 'Tension Arm Paper Towel Holder',
    description: 'Prevents unraveling with adjustable tension arm',
    price: 24.99,
    imageUrl: '/images/simplehuman Standing Paper Towel Holder with Spray Pump.jpg',
    category: 'paper-towel',
    features: ['Tension Arm', 'Fingerprint-Resistant', 'Stable Base'],
    roomType: ['kitchen'],
    finishType: 'Stainless Steel'
  },
  {
    id: 'pt-03',
    name: 'Wall Mount Paper Towel Holder',
    description: 'Space-saving design mounts to wall',
    price: 19.99,
    imageUrl: '/images/simplehuman Standing Paper Towel Holder with Spray Pump.jpg',
    category: 'paper-towel',
    features: ['Wall Mount', 'Quick Release', 'Easy Installation'],
    roomType: ['kitchen', 'utility'],
    finishType: 'Brushed Stainless Steel'
  },
  {
    id: 'pt-04',
    name: 'Standing Paper Towel Holder with Spray Pump',
    description: 'Integrated spray pump for cleaning solutions',
    price: 49.99,
    imageUrl: '/images/simplehuman Standing Paper Towel Holder with Spray Pump.jpg',
    category: 'paper-towel',
    features: ['Spray Pump', 'Stable Base', 'Easy Tear'],
    roomType: ['kitchen'],
    finishType: 'Brushed Stainless Steel'
  }
];

// Additional Product Categories for the taxonomy
export const productCategories = [
  {
    id: 'trash-can',
    name: 'Trash Cans',
    subcategories: ['Kitchen', 'Bathroom', 'Office'],
    roomTypes: ['kitchen', 'bathroom', 'office', 'bedroom', 'living'],
    featureOptions: ['Motion Sensor', 'Voice Control', 'Dual Compartment', 'Step Pedal', 'Liner Pocket', 'Slim Profile', 'Butterfly Lid']
  },
  {
    id: 'soap-dispenser',
    name: 'Soap Dispensers',
    subcategories: ['Foaming', 'Liquid', 'Rechargeable', 'Battery-Powered'],
    roomTypes: ['kitchen', 'bathroom', 'office'],
    featureOptions: ['Sensor', 'Rechargeable', 'Foaming', 'Liquid', 'Wall Mount', 'Compact', 'Dual Dispensers', 'Adjustable Volume']
  },
  {
    id: 'mirror',
    name: 'Sensor Mirrors',
    subcategories: ['Vanity', 'Wall Mount', 'Travel', 'Smart Mirrors'],
    roomTypes: ['bathroom', 'bedroom', 'travel'],
    featureOptions: ['Lighting', 'Magnification', 'Alexa', 'Tru-Lux', 'Portable', 'Wall Mount', 'Dual Magnification', 'Rechargeable']
  },
  {
    id: 'paper-towel',
    name: 'Paper Towel Holders',
    subcategories: ['Countertop', 'Wall Mount'],
    roomTypes: ['kitchen', 'utility'],
    featureOptions: ['Quick-Grip', 'Tension Arm', 'Wall Mount', 'Weighted Base', 'Fingerprint-Resistant', 'Spray Pump']
  },
  {
    id: 'dish-rack',
    name: 'Dish Racks',
    subcategories: ['Full Size', 'Compact', 'Expandable'],
    roomTypes: ['kitchen'],
    featureOptions: ['Drainage System', 'Wine Glass Holder', 'Utensil Holder', 'Expandable', 'Compact', 'Swivel Spout']
  }
];

// Common questions by product category
export const productQuestions = {
  'trash-can': [
    'How do I replace the batteries in my sensor trash can?',
    'My trash can lid won\'t close properly, what should I do?',
    'Which liner fits my trash can model?',
    'How do I clean my fingerprint-resistant trash can?',
    'Can I use regular trash bags in a simplehuman trash can?',
    'How do I activate voice control on my trash can?'
  ],
  'soap-dispenser': [
    'How do I refill my soap dispenser?',
    'My dispenser isn\'t dispensing soap, what\'s wrong?',
    'How long does the charge last on a rechargeable dispenser?',
    'Can I use regular soap in a foaming dispenser?',
    'How do I adjust the soap volume on my dispenser?',
    'My dispenser keeps dispensing randomly, how do I fix it?'
  ],
  'mirror': [
    'How do I charge my sensor mirror?',
    'The light on my mirror won\'t turn on, what should I do?',
    'How do I connect my mirror to Alexa?',
    'What is Tru-Lux lighting?',
    'How do I clean my sensor mirror?',
    'Can I replace the light in my mirror if it burns out?'
  ],
  'paper-towel': [
    'How do I install my wall mount paper towel holder?',
    'My paper towels keep unraveling, how do I fix this?',
    'What size paper towel rolls fit the holder?',
    'How do I clean my stainless steel paper towel holder?',
    'How do I use the spray pump on my paper towel holder?'
  ],
  'dish-rack': [
    'How do I clean the drainage spout on my dish rack?',
    'My dish rack is rusting, what should I do?',
    'How do I expand my dish rack?',
    'Can I put my dish rack in the dishwasher?'
  ]
};

// Common troubleshooting issues
export const troubleshootingIssues = {
  'trash-can': {
    'lid-not-opening': {
      issue: 'Lid not opening when approaching',
      steps: [
        'Check if the batteries need to be replaced',
        'Clean the sensor lens with a soft, dry cloth',
        'Make sure there are no obstructions blocking the sensor',
        'Reset the can by removing the batteries for 30 seconds, then reinstalling them'
      ]
    },
    'lid-not-closing': {
      issue: 'Lid not closing properly',
      steps: [
        'Check if anything is obstructing the lid mechanism',
        'Make sure the hinge area is clean and free of debris',
        'Check if the lid is properly aligned with the can body',
        'For sensor models, reset by removing batteries for 30 seconds'
      ]
    },
    'voice-control-not-working': {
      issue: 'Voice control not responding',
      steps: [
        'Ensure the batteries are fresh',
        'Make sure you\'re using the correct voice commands (e.g., "open can")',
        'Speak clearly and at a moderate volume',
        'Try resetting the can by removing batteries for 30 seconds',
        'Check if you\'re standing within 5 feet of the trash can'
      ]
    },
    'pedal-not-working': {
      issue: 'Step pedal not opening lid',
      steps: [
        'Check if the pedal mechanism is obstructed',
        'Make sure the pedal is properly connected to the lid mechanism',
        'Examine the pedal for any damage or wear',
        'Check if anything inside the can is blocking the lid from opening fully'
      ]
    }
  },
  'soap-dispenser': {
    'not-dispensing': {
      issue: 'Dispenser not dispensing soap',
      steps: [
        'Check if the dispenser has enough soap',
        'Make sure the dispenser is charged or has fresh batteries',
        'Clean the sensor area with a soft, dry cloth',
        'Check if the soap is too thick (especially for foaming dispensers)',
        'Reset by holding the power button for 10 seconds'
      ]
    },
    'random-dispensing': {
      issue: 'Dispenser activating randomly',
      steps: [
        'Move the dispenser away from reflective surfaces',
        'Adjust the sensor sensitivity if your model allows it',
        'Check if the dispenser is in direct sunlight',
        'Clean the sensor area',
        'Reset the dispenser by removing batteries or holding power button'
      ]
    },
    'clogged-nozzle': {
      issue: 'Nozzle is clogged',
      steps: [
        'Rinse the nozzle under warm water',
        'For foaming dispensers, ensure you\'re using foaming soap',
        'Use a pin to carefully clear any blockage in the nozzle',
        'Clean the pump tube by running warm water through it',
        'Empty, clean, and refill the dispenser completely'
      ]
    },
    'leaking': {
      issue: 'Dispenser is leaking',
      steps: [
        'Check if the dispenser is overfilled',
        'Ensure the soap reservoir is properly sealed',
        'Check for cracks in the container',
        'Clean the pump mechanism',
        'Make sure you\'re using the correct soap type for your dispenser'
      ]
    }
  },
  'paper-towel': {
    'unraveling': {
      issue: 'Paper towels unraveling too easily',
      steps: [
        'Check if the tension arm is properly adjusted',
        'Ensure you\'re using standard-sized paper towel rolls',
        'Make sure the roll is properly seated on the holder',
        'For weighted base models, check if the base is stable'
      ]
    },
    'spray-pump-not-working': {
      issue: 'Spray pump not working',
      steps: [
        'Make sure the pump is properly primed by pressing several times',
        'Check if the intake tube is fully submerged in the liquid',
        'Ensure the liquid isn\'t too thick for the pump mechanism',
        'Clean the nozzle by running warm water through it',
        'Check if the container is properly sealed'
      ]
    }
  }
};

// Sample answers to common questions
export const commonAnswers = {
  warranty: "Simplehuman products typically come with a 2-5 year warranty depending on the model. To register your product for warranty coverage, you'll need to provide your product name or model number, purchase date, and proof of purchase. You can register directly through your account or I can help you start the process.",
  
  returns: "Simplehuman offers a 90-day return policy for products purchased directly from their website. Items must be in original condition with all packaging. For products purchased from other retailers, you'll need to follow their specific return policies.",
  
  shipping: "Simplehuman offers free standard shipping on orders over $25 within the continental US. International shipping rates vary by location. Standard delivery typically takes 3-7 business days, while expedited shipping options are available for faster delivery.",
  
  sensor_technology: "Simplehuman's sensor technology uses infrared sensors to detect motion and trigger the opening mechanism or function. The sensors are calibrated to detect hand movements within a specific range, typically 4-6 inches from the sensor location. This allows for touchless operation which is both hygienic and convenient.",
  
  cleaning: "For stainless steel products, use a soft cloth with warm water and mild soap. For stubborn fingerprints, a small amount of stainless steel cleaner works well. Avoid abrasive cleaners or pads that could scratch the surface. For electronic components, use only a dry cloth and never submerge in water.",
  
  battery_life: "Battery life varies by product. Sensor trash cans typically last 6-12 months with regular alkaline batteries. Rechargeable soap dispensers usually last 3 months on a single charge with normal use. Sensor mirrors can last 2-5 weeks on a charge depending on usage frequency.",
  
  liner_compatibility: "Simplehuman uses a lettering system (A-Z) to match liners with specific trash can models. The appropriate liner code is usually indicated on the trash can itself or in the product manual. Custom-fit liners provide the best experience, but many standard trash bags can also work.",
  
  refurbished_products: "Our certified refurbished products undergo a thorough inspection and restoration process. They may have minor cosmetic imperfections, but functionally they're guaranteed to work like new. They include a 1-year warranty instead of the standard 2-5 year warranty on new products. All mechanical components are fully tested and certified."
};

// Conversation starter templates
export const conversationStarters = [
  {
    id: 'find-trash-can',
    name: 'Find a Trash Can',
    initialMessage: "I need a new trash can for my kitchen",
    followUp: "I'd prefer something with a sensor",
    resolution: "The 45L Rectangular Sensor Can looks perfect. Does it come in black?"
  },
  {
    id: 'soap-dispenser-issue',
    name: 'Soap Dispenser Troubleshooting',
    initialMessage: "My soap dispenser stopped working",
    followUp: "It's the rechargeable sensor pump model",
    resolution: "I'll try cleaning the sensor and resetting it. Thanks!"
  },
  {
    id: 'track-order',
    name: 'Track Order',
    initialMessage: "I want to track my recent order",
    followUp: "My order number is SH104928",
    resolution: "Great, thanks for showing me the status."
  },
  {
    id: 'warranty-question',
    name: 'Warranty Information',
    initialMessage: "How do I register my product for warranty?",
    followUp: "It's a sensor mirror I bought last month",
    resolution: "I'll sign in to my account and register it now. Thanks!"
  },
  {
    id: 'product-comparison',
    name: 'Compare Products',
    initialMessage: "What's the difference between the sensor mirror models?",
    followUp: "I'm mainly interested in the magnification options",
    resolution: "The dual magnification model sounds like what I need."
  },
  {
    id: 'return-request',
    name: 'Return a Product',
    initialMessage: "I'd like to return the trash can I bought last week",
    followUp: "It's too big for my kitchen space",
    resolution: "Thanks for processing my return and recommending the smaller model!"
  },
  {
    id: 'refurbished-inquiry',
    name: 'Refurbished Products',
    initialMessage: "Do you have any refurbished soap dispensers?",
    followUp: "What's the warranty on refurbished items?",
    resolution: "I'll try the refurbished sensor pump with the 1-year warranty."
  },
  {
    id: 'kitchen-organization',
    name: 'Kitchen Organization',
    initialMessage: "I want to organize my kitchen better",
    followUp: "I need a trash can and better counter organization",
    resolution: "That bundle with the trash can and paper towel holder is perfect!"
  }
];

// New simulated conversation scenarios
export const conversationScenarios = {
  'product-return': {
    title: 'Product Return Scenario',
    description: 'Customer seeking to return a recently purchased sensor trash can',
    conversations: [
      { sender: 'user', message: "I'd like to return the trash can I bought last week" },
      { sender: 'bot', message: "I'd be happy to help with your return. Could you please provide your order number or the email address used for purchase?" },
      { sender: 'user', message: "My order number is SH104928" },
      { 
        sender: 'bot', 
        message: "Thank you. I've found your order for the 58L Rectangular Hands-Free Dual Compartment Recycling Kitchen Step Trash Can purchased on October 5, 2025. May I ask the reason for your return?",
        image: "/images/58L Rectangular Hands-Free Dual Compartment Recycling Kitchen Step Trash Can.webp" 
      },
      { sender: 'user', message: "It's too big for my kitchen space" },
      { sender: 'bot', message: "I understand. Since you're within our 90-day return window, you're eligible for a full refund. Would you like me to email you a prepaid return shipping label?" },
      { sender: 'user', message: "Yes, please" },
      { sender: 'bot', message: "Great! I've sent the return shipping label to your email. Once you ship the item back, your refund will be processed within 3-5 business days. Before you go, would you be interested in a more compact alternative like our 30L Butterfly Step Can that might fit your kitchen better?" },
      { sender: 'user', message: "Actually, that sounds perfect. Can you show me that model?" },
      { 
        sender: 'bot', 
        message: "Of course! Here's the 30L Butterfly Step Can which has a more compact footprint but still offers premium features. It's currently $129.99 and I can apply a 10% loyalty discount to your order if you decide to purchase it.",
        image: "/images/30L Butterfly Step Can.webp" 
      },
      { sender: 'user', message: "Yes, I'll take it with the discount. Thank you!" }
    ],
    outcomes: [
      "Return processed successfully",
      "Customer converted to alternative product",
      "10% loyalty discount applied",
      "Zero-party data collected: space constraints"
    ],
    metrics: {
      satisfactionScore: 4.8,
      timeToResolution: "3 minutes",
      sentimentShift: "Negative → Positive"
    }
  },
  'warranty-registration': {
    title: 'Warranty Registration Scenario',
    description: 'Customer registering a new product for warranty coverage',
    conversations: [
      { sender: 'user', message: "How do I register my new soap dispenser for warranty?" },
      { sender: 'bot', message: "I'd be happy to help you register your soap dispenser for warranty coverage. Could you please tell me which Simplehuman dispenser model you purchased?" },
      { 
        sender: 'user', 
        message: "It's the 9 oz. Touch-Free Automatic Rechargeable Sensor Pump" 
      },
      { 
        sender: 'bot', 
        message: "Great choice! The Touch-Free Automatic Rechargeable Sensor Pump comes with a 2-year warranty. To register, I'll need your serial number (found on the bottom of the base), purchase date, and proof of purchase. Do you have this information available?", 
        image: "/images/Liquid Sensor Pump.webp"
      },
      { sender: 'user', message: "Yes, the serial number is SP-RF-24183. I bought it yesterday on your website." },
      { sender: 'bot', message: "Perfect! I've found your order in our system. I've registered your Touch-Free Automatic Rechargeable Sensor Pump with serial number SP-RF-24183 for the full 2-year warranty, valid until October 13, 2027. Would you like me to email you the warranty confirmation?" },
      { sender: 'user', message: "Yes please" },
      { sender: 'bot', message: "Confirmation sent! By the way, for optimal performance, we recommend using our soap refills which are specially formulated for our sensor pumps. Would you like me to add some to your next order?" },
      { sender: 'user', message: "That would be helpful, yes" }
    ],
    outcomes: [
      "Warranty successfully registered",
      "Customer educated on product features",
      "Email subscription added",
      "Zero-party data collected: product interest, purchase location"
    ],
    metrics: {
      satisfactionScore: 4.6,
      timeToResolution: "2 minutes 10 seconds"
    }
  },
  'refurbished-offer': {
    title: 'Refurbished Product Offer Scenario',
    description: 'Customer inquiring about a product with a refurbished alternative',
    conversations: [
      { sender: 'user', message: "I'm looking for a paper towel holder, but they're a bit pricey" },
      { 
        sender: 'bot', 
        message: "I understand budget considerations are important. Our Standing Paper Towel Holder with Spray Pump is $49.99. However, I noticed we have a certified refurbished version available for $34.99, which is a savings of $15. Would you like to know more about our refurbished options?",
        image: "/images/simplehuman Standing Paper Towel Holder with Spray Pump.jpg"
      },
      { sender: 'user', message: "What does refurbished mean exactly? Is the quality the same?" },
      { sender: 'bot', message: "Great question! Our certified refurbished products undergo a thorough inspection and restoration process. They may have minor cosmetic imperfections, but functionally they're guaranteed to work like new. They include a 1-year warranty instead of the standard 2-year warranty on new products. All mechanical components are fully tested and certified." },
      { sender: 'user', message: "That sounds good. What about returns if I don't like it?" },
      { sender: 'bot', message: "Refurbished products have the same 90-day return policy as our new products. If you're not completely satisfied, you can return it for a full refund. Would you like to see the available refurbished Standing Paper Towel Holder options?" },
      { sender: 'user', message: "Yes, show me what's available" },
      { 
        sender: 'bot', 
        message: "We currently have the refurbished Standing Paper Towel Holder with Spray Pump available in Brushed Stainless Steel finish. It includes all the original accessories and a 1-year warranty. Would you like to add this to your cart at the special price of $34.99?", 
        image: "/images/simplehuman Standing Paper Towel Holder with Spray Pump.jpg"
      },
      { sender: 'user', message: "Does it come with the spray pump?" },
      { sender: 'bot', message: "Yes, the Standing Paper Towel Holder includes the integrated spray pump for easy dispensing of cleaning solutions or water. It's perfect for kitchen use and adds convenience by combining two essential tools in one sleek design." },
      { sender: 'user', message: "Great, I'll take it" }
    ],
    outcomes: [
      "Converted price-sensitive customer",
      "Sold refurbished inventory",
      "Educated customer on refurbished benefits",
      "Zero-party data collected: price sensitivity, feature priorities"
    ],
    metrics: {
      satisfactionScore: 4.5,
      timeToResolution: "4 minutes 15 seconds"
    }
  },
  'troubleshooting': {
    title: 'Product Troubleshooting Scenario',
    description: 'Customer with a malfunctioning soap dispenser',
    conversations: [
      { sender: 'user', message: "My soap dispenser is not working properly" },
      { sender: 'bot', message: "I'm sorry to hear your soap dispenser isn't working correctly. Could you please tell me which model you have and what issue you're experiencing?" },
      { 
        sender: 'user', 
        message: "It's the Touch-Free Automatic Rechargeable Sensor Pump and it's dispensing randomly without anyone near it" 
      },
      { 
        sender: 'bot', 
        message: "Thank you for that information. Random dispensing on the Touch-Free Automatic Rechargeable Sensor Pump is typically caused by one of a few issues. Let me help you troubleshoot:\n\n1. Is the dispenser placed near a reflective surface like a mirror or shiny backsplash?\n2. Is it positioned in direct sunlight?\n3. When was the last time you cleaned the sensor area?",
        image: "/images/Liquid Sensor Pump.webp"
      },
      { sender: 'user', message: "It is next to a mirror. Could that be the problem?" },
      { sender: 'bot', message: "Yes, that's likely the issue! The infrared sensor can be triggered by reflections from mirrors or other reflective surfaces. I recommend moving the dispenser at least 8 inches away from the mirror. Would you like to try that now?" },
      { sender: 'user', message: "I just moved it away from the mirror and it seems to be working normally now" },
      { sender: 'bot', message: "Excellent! I'm glad that solved the issue. For optimal performance, also remember to clean the sensor window regularly with a soft, dry cloth. Is there anything else about your soap dispenser I can help you with today?" },
      { sender: 'user', message: "That's all, thank you" },
      { sender: 'bot', message: "You're welcome! If you encounter any other issues with your Simplehuman products, don't hesitate to reach out. Would you mind taking a quick one-question survey about your support experience today?" }
    ],
    outcomes: [
      "Issue resolved without escalation",
      "Customer educated on product placement",
      "Maintenance tips provided",
      "Feedback opportunity created"
    ],
    metrics: {
      satisfactionScore: 4.9,
      timeToResolution: "2 minutes 45 seconds"
    }
  },
  'dual-compartment-inquiry': {
    title: 'Dual Compartment Trash Can Inquiry',
    description: 'Customer looking for a recycling solution for their kitchen',
    conversations: [
      { sender: 'user', message: "I need a trash can that can separate recycling" },
      { sender: 'bot', message: "Great! I'd be happy to help you find a dual compartment trash can for recycling. Our dual compartment models are perfect for separating trash and recyclables. Would you prefer a sensor-activated model or a step can?" },
      { sender: 'user', message: "What's the difference?" },
      { 
        sender: 'bot', 
        message: "Excellent question! The sensor models open automatically when you wave your hand, while step cans open when you press the pedal with your foot. Our most popular option is the 58 Liter Rectangular Hands-Free Dual Compartment Recycling Step Can, which gives you hands-free operation with the foot pedal and has dedicated compartments for trash and recycling.",
        image: "/images/58L Rectangular Hands-Free Dual Compartment Recycling Kitchen Step Trash Can.webp"
      },
      { sender: 'user', message: "That looks nice. How big is each compartment?" },
      { sender: 'bot', message: "The 58 Liter model has a 34.3 liter (9 gallon) compartment and a 24.2 liter (6.3 gallon) compartment. This gives you flexibility to use the larger side for either trash or recycling, depending on your needs. The can measures 24.8\" x 14.5\" x 24.7\" overall, so it's substantial but designed to fit efficiently against a wall." },
      { sender: 'user', message: "Does it come with special bags or can I use regular ones?" },
      { sender: 'bot', message: "It comes with our custom-fit liners (code N), which are designed specifically for this model to prevent slipping and provide a perfect fit. However, you can use regular trash bags as well. The custom-fit liners provide the best experience as they're tear-resistant and won't slip into the can. Would you like me to include a pack of liners with your order?" },
      { sender: 'user', message: "Yes, that would be helpful. Is it easy to clean?" },
      { sender: 'bot', message: "Yes, it's designed for easy cleaning! The fingerprint-resistant stainless steel exterior can be cleaned with a soft cloth and our stainless steel cleaner. The interior plastic buckets are removable for thorough cleaning, and the soft-close lid can be wiped down with a damp cloth. The nano-silver clear coat also helps protect against germs and fingerprints." },
      { sender: 'user', message: "Great, I'll take it with the liners" }
    ],
    outcomes: [
      "Successfully matched product to customer needs",
      "Upsold custom-fit liners",
      "Educated customer on product features",
      "Zero-party data collected: recycling habits"
    ],
    metrics: {
      satisfactionScore: 4.7,
      timeToResolution: "3 minutes 30 seconds"
    }
  },
  'kitchen-organization-solution': {
    title: 'Kitchen Organization Solution',
    description: 'Customer seeking a coordinated set of products to organize their kitchen',
    conversations: [
      { sender: 'user', message: "I'm remodeling my kitchen and need some organization solutions" },
      { sender: 'bot', message: "Congratulations on your kitchen remodel! I'd be happy to help you find organization solutions. Simplehuman offers a range of premium products designed to work together for a coordinated, efficient kitchen. What specific areas are you looking to organize?" },
      { sender: 'user', message: "I need a trash/recycling system and something for my countertop organization" },
      { 
        sender: 'bot', 
        message: "For trash and recycling, our 58L Dual Compartment Recycling Trash Can is perfect. It has separate compartments for waste and recyclables, with a space-efficient rectangular design that fits against walls. The fingerprint-resistant stainless steel exterior complements modern kitchen designs.",
        image: "/images/58L Rectangular Hands-Free Dual Compartment Recycling Kitchen Step Trash Can.webp"
      },
      { sender: 'user', message: "That looks good. What about something for paper towels and dish soap?" },
      { 
        sender: 'bot', 
        message: "For your countertop, our Standing Paper Towel Holder with integrated Spray Pump would be perfect. It combines a paper towel holder with a pump dispenser for dish soap or cleaning solution. This 2-in-1 design saves counter space and keeps essential items within reach while cooking.",
        image: "/images/simplehuman Standing Paper Towel Holder with Spray Pump.jpg"
      },
      { sender: 'user', message: "I like that! Do you have any smaller trash cans for food scraps while cooking?" },
      { 
        sender: 'bot', 
        message: "Yes, our Compost Caddy is ideal for collecting food scraps while cooking. It's compact, has a flip-top lid to contain odors, and includes a removable inner bucket for easy emptying. You can place it on your counter or mount it to a cabinet door for even more space saving.",
        image: "/images/Compost Caddy.webp"
      },
      { sender: 'user', message: "Perfect. And for hand soap by the sink?" },
      { 
        sender: 'bot', 
        message: "Our Touch-Free Sensor Pump is perfect for hand washing at the kitchen sink. It dispenses soap automatically when you place your hand underneath - no touching required, which is great for when you're handling raw ingredients. The rechargeable battery lasts up to 3 months on a single charge.",
        image: "/images/Liquid Sensor Pump.webp"
      },
      { sender: 'user', message: "Is there a discount if I buy all these items together?" },
      { sender: 'bot', message: "Yes! I can create a kitchen organization bundle for you with these four items. If you purchase them together, you'll receive a 15% discount, bringing your total from $459.96 down to $390.97. You'll also qualify for free shipping and an extended warranty on all items. Would you like to proceed with this bundle?" },
      { sender: 'user', message: "That sounds great, I'll take the bundle" }
    ],
    outcomes: [
      "Successfully created a multi-product bundle sale",
      "Applied bundle discount (15%)",
      "Educated customer on product features and coordination",
      "Zero-party data collected: kitchen remodel, organization priorities"
    ],
    metrics: {
      satisfactionScore: 4.9,
      timeToResolution: "5 minutes 15 seconds",
      sentimentShift: "Neutral → Very Positive"
    }
  },
  'slim-can-recommendation': {
    title: 'Space-Saving Trash Can Recommendation',
    description: 'Customer with limited kitchen space seeking a compact trash can solution',
    conversations: [
      { sender: 'user', message: "I have a very small kitchen. What's your most space-efficient trash can?" },
      { sender: 'bot', message: "I understand space constraints can be challenging! For small kitchens, I'd be happy to recommend our most space-efficient options. Are you looking for something that fits in a particular spot, like under a sink, against a narrow wall, or in a corner?" },
      { sender: 'user', message: "I have a narrow space between my fridge and counter, about 10 inches wide" },
      { 
        sender: 'bot', 
        message: "Perfect! For that narrow space, I'd recommend our 20L Slim Open Can. It has a depth of just 8.7 inches and a width of 10.4 inches, so it should fit perfectly in your 10-inch space. The slim rectangular design maximizes capacity while minimizing footprint, and the open top makes it easy to dispose of waste without needing extra clearance for a lid.",
        image: "/images/Slim Step Can.webp"
      },
      { sender: 'user', message: "That's exactly what I need! What's the capacity in gallons?" },
      { sender: 'bot', message: "The 20L Slim Open Can has a capacity of approximately 5.3 gallons. It's perfect for daily kitchen waste in smaller households. For reference, a standard kitchen trash bag is about 13 gallons, so this would use smaller bags or our custom fit liners (Code H), which are designed specifically for this model and prevent slipping." },
      { sender: 'user', message: "Do you have it in black? My kitchen has black appliances" },
      { sender: 'bot', message: "Yes, the 20L Slim Open Can is available in Black Stainless Steel, which would coordinate perfectly with your black appliances. The black stainless finish is also fingerprint-resistant, making it easier to keep clean. Would you like to see the black version?" },
      { sender: 'user', message: "Yes please" },
      { 
        sender: 'bot', 
        message: "Here's the 20L Slim Open Can in Black Stainless Steel. It features the same space-saving design but with a sleek black finish that will complement your black appliances beautifully. It's priced at $49.99, and I'd recommend adding a pack of our custom-fit liners for $6.99 to complete your purchase. Would you like to add this to your cart?",
        image: "/images/Slim Step Can.webp"
      },
      { sender: 'user', message: "Perfect. I'll take it with the liners. Thanks for your help!" }
    ],
    outcomes: [
      "Successfully matched product to specific space constraints",
      "Upsold custom-fit liners",
      "Connected with color preference for appliance coordination",
      "Zero-party data collected: kitchen size, color preferences"
    ],
    metrics: {
      satisfactionScore: 4.8,
      timeToResolution: "2 minutes 45 seconds"
    }
  }
};