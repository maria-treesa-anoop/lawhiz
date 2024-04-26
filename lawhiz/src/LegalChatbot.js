import React, { useState } from 'react';

const ChatbotInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // Here you would call a function to process the user input and generate a bot response
      // For demonstration purposes, let's add a mock bot response
      setTimeout(() => {
        setMessages([...messages, { text: 'Sorry, I am just a mock-up and cannot provide assistance.', sender: 'bot' }]);
      }, 500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="chat-window mb-4 h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="input-form flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg mr-2 focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotInterface;


