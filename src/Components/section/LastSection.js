import React, { useState } from 'react';
import './LastSection.css'; // Assuming you have a CSS file for styling



const LastSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`); // Replace with your submission logic
      setEmail(''); // Clear the input after submission
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="last-section">
      <div className="last-section-header">
        <h5 style={{ display: 'inline' }}>Enter your email for latest updates and offers!</h5>
        <form onSubmit={handleSubmit} className="email-form" style={{ display: 'inline' }}>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Enter your email" 
            required 
            className="email-input"
          />
          <button type="submit" className="submit-button">Go</button>
        </form>
      </div>
    </div>
  );
};

export default LastSection;
