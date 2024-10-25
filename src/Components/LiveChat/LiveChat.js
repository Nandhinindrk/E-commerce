import React, { useState } from 'react';
import './Chat.css';

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { sender: 'support', text: 'Hi! How can I assist you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(true); // State for minimized status

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage = { sender: 'user', text: inputValue };
    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate a support response after 2 seconds
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'support', text: 'Thank you for your message! We will get back to you shortly.' }
      ]);
    }, 2000);
  };

  const toggleChat = () => {
    setIsMinimized(!isMinimized); // Toggle minimized state
  };

  const handleInputClick = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to the container
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to the container
    handleSendMessage(); // Call the send message function
  };

  return (
    <div className={`chat-container ${isMinimized ? 'minimized' : ''}`}>
      {isMinimized ? (
        <div className="chat-icon" onClick={toggleChat}>💬</div> // Click to expand chat
      ) : (
        <>
          <div className="chat-header" onClick={toggleChat}>Live Chat Support</div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              onClick={handleInputClick} // Prevent minimizing when clicking the input
            />
            <button onClick={handleButtonClick}>Send</button>
          </div>
        </>
      )}
    </div>
  );
};

export default LiveChat;
