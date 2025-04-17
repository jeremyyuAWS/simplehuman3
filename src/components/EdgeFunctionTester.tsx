import React, { useState } from 'react';
import { callChatInference, convertApiResponseToMessage } from '../services/chatService';
import { Message } from '../types';
import { BsPlayFill, BsCheck2Circle, BsXCircle, BsInfoCircle } from 'react-icons/bs';

interface TestResult {
  success: boolean;
  message: string;
  response?: any;
  error?: string;
}

export const EdgeFunctionTester: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);
  const [testMessage, setTestMessage] = useState("Hello, I need a trash can");
  const [showHelp, setShowHelp] = useState(false);
  
  const runTest = async () => {
    setIsLoading(true);
    setResults([]);
    
    try {
      // Test 1: Basic Connection Test
      try {
        const response = await callChatInference(testMessage);
        
        setResults(prev => [...prev, {
          success: true,
          message: "Connection to Edge Function successful",
          response
        }]);
        
        // Test 2: Intent Classification Test
        if (response.context?.customer_intent) {
          setResults(prev => [...prev, {
            success: true,
            message: `Intent classification working: "${response.context.customer_intent}"`,
          }]);
        } else {
          setResults(prev => [...prev, {
            success: false,
            message: "Intent classification test failed - no intent returned",
          }]);
        }
        
        // Test 3: Response Format Test
        try {
          const message = convertApiResponseToMessage(response);
          setResults(prev => [...prev, {
            success: true,
            message: "Response conversion successful",
            response: message
          }]);
        } catch (error) {
          setResults(prev => [...prev, {
            success: false,
            message: "Response conversion failed",
            error: error instanceof Error ? error.message : String(error)
          }]);
        }
        
        // Test 4: Rich Content Test
        if (response.message?.rich_content || response.message?.suggestions) {
          setResults(prev => [...prev, {
            success: true,
            message: "Rich content and/or suggestions detected in response",
          }]);
        } else {
          setResults(prev => [...prev, {
            success: false,
            message: "No rich content or suggestions detected",
          }]);
        }
      } catch (error) {
        setResults(prev => [...prev, {
          success: false,
          message: "Connection to Edge Function failed",
          error: error instanceof Error ? error.message : String(error)
        }]);
      }
      
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Edge Function Tester</h2>
        <button
          onClick={() => setShowHelp(!showHelp)}
          className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
        >
          <BsInfoCircle className="mr-1" />
          {showHelp ? "Hide Help" : "Show Help"}
        </button>
      </div>
      
      {showHelp && (
        <div className="bg-blue-50 p-4 rounded-lg mb-4 text-sm text-blue-800">
          <h3 className="font-medium mb-2">Troubleshooting Edge Function Issues</h3>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Make sure the edge function is properly deployed to Supabase</li>
            <li>Verify that your Supabase URL and ANON_KEY in .env are correct</li>
            <li>The edge function should be named "lyzr-chat" (check the Functions section in Supabase Dashboard)</li>
            <li>If errors persist, try using the "Local" agent toggle in the chatbot instead</li>
          </ol>
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="testMessage" className="block text-sm font-medium text-gray-700 mb-1">
          Test Message
        </label>
        <div className="flex">
          <input
            id="testMessage"
            type="text"
            value={testMessage}
            onChange={(e) => setTestMessage(e.target.value)}
            className="flex-grow border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Enter a test message"
          />
          <button 
            onClick={runTest}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md flex items-center disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Testing...
              </>
            ) : (
              <>
                <BsPlayFill className="mr-2" />
                Run Test
              </>
            )}
          </button>
        </div>
      </div>
      
      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Test Results</h3>
          
          <div className="border rounded-md overflow-hidden">
            {results.map((result, index) => (
              <div 
                key={index} 
                className={`p-4 ${index !== results.length - 1 ? 'border-b' : ''} ${result.success ? 'bg-green-50' : 'bg-red-50'}`}
              >
                <div className="flex items-center">
                  {result.success ? (
                    <BsCheck2Circle className="text-green-600 h-5 w-5 mr-2" />
                  ) : (
                    <BsXCircle className="text-red-600 h-5 w-5 mr-2" />
                  )}
                  <span className={`font-medium ${result.success ? 'text-green-800' : 'text-red-800'}`}>
                    {result.message}
                  </span>
                </div>
                
                {result.error && (
                  <div className="mt-2 p-2 bg-red-100 text-red-800 rounded text-sm font-mono overflow-x-auto">
                    {result.error}
                  </div>
                )}
                
                {result.response && (
                  <div className="mt-2">
                    <details>
                      <summary className="cursor-pointer text-blue-600 text-sm">View Response</summary>
                      <div className="mt-2 p-2 bg-gray-100 rounded text-sm font-mono max-h-40 overflow-auto">
                        <pre>{JSON.stringify(result.response, null, 2)}</pre>
                      </div>
                    </details>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-6 text-sm text-gray-600">
        <p><strong>Note:</strong> This tester sends a message to the edge function and validates:</p>
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>If the edge function is accessible and returns a response</li>
          <li>If intent classification is working</li>
          <li>If the response can be converted to the app's message format</li>
          <li>If the response includes rich content or suggestions</li>
        </ol>
      </div>
    </div>
  );
};