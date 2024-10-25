import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../Components/section/Footer/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div className="contact-page">
      {/* Policies Section at the Top */}
      <div className="policies">
        <h3 id="privacy-policy">Privacy Policy</h3>
        <p>"Your privacy is important to us. We are committed to protecting the information you share with us and ensuring that your data is kept confidential and secure. This Privacy Policy outlines the types of information we collect, how we use and process it, and the security measures we have in place. We may collect data such as your name, email address, shipping information, and payment details when you make a purchase. We use this information to provide you with the best possible shopping experience. We do not sell, rent, or share your personal information with third parties, except as required by law or to fulfill your order. Our website uses cookies to enhance your browsing experience, but you have the option to disable cookies in your browser settings. Please review this policy periodically, as we may update it from time to time to reflect changes in our practices."</p>
        <br></br>
        <hr />
        <h3 id="terms-conditions">Terms & Conditions</h3>
        <p>"By using our website, you agree to abide by our terms and conditions. This includes all rules, policies, and guidelines applicable to the services we provide. Our terms are designed to ensure a positive and safe experience for all users. When you place an order, you are agreeing to provide accurate information and complete the transaction in a timely manner. We reserve the right to refuse service, cancel orders, or terminate accounts if these terms are violated. The content on our website, including product descriptions, images, and pricing, is for informational purposes and may change without notice. We are not liable for any errors, inaccuracies, or omissions on our website. By using our site, you acknowledge that you are responsible for compliance with any applicable local laws. We reserve the right to change these terms at any time, and your continued use of the site constitutes acceptance of these changes."</p>
        <br></br>
        <hr />
        <h3 id="refund-policy">Refund and Returns Policy</h3>
        <p>"We want you to be completely satisfied with your purchase. If you are not, you may be eligible for a refund or exchange under specific conditions. Products must be returned in their original condition within 30 days of purchase, with all tags and packaging intact. To initiate a return, please contact our customer service team with your order number and reason for the return. Once the return is approved, you will receive instructions on how to send the item back to us. Refunds will be processed within 5-7 business days after we receive and inspect the returned item. Shipping costs for returns may be the responsibility of the customer, unless the item was damaged or incorrect. Please note that certain items, such as final sale products and personalized items, may not be eligible for return or refund. We reserve the right to refuse a refund if the product shows signs of wear or alteration."</p>
        <br></br>
        <hr />
        <h3 id="shipping-policy">Shipping Policy</h3>
        <p>"We offer fast and reliable shipping to a variety of locations, both domestically and internationally. Orders are processed within 1-2 business days, and you will receive a confirmation email with tracking information once your order ships. Standard shipping times vary based on your location and selected shipping method at checkout. Expedited shipping options are available for an additional fee. Please ensure that the shipping address provided is accurate to avoid delays. We are not responsible for delays due to customs or unforeseen circumstances beyond our control. In the event that an item is out of stock, we will notify you immediately and provide an estimated restock date or offer an alternative solution. Shipping fees are non-refundable unless the product was damaged during shipping. Our team is dedicated to ensuring your order arrives on time and in excellent condition."</p>
        <br></br>
        <hr />
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us with any questions or feedback!</p>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {/* Contact Details Section at the Bottom */}
      <div className="contact-info">
        <div className="contact-details">
          <p><FaEnvelope /> skfashion@gmail.com</p>
          <p><FaPhone /> 044-25394002</p>
          <p><FaMapMarkerAlt /> Chennai,India</p>
        </div>

        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />sk_fashion 
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />sk_fashion
          </a>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.policies h3 {
  font-size: 1.5em;
  color: #333;
  margin-top: 20px;
  margin-bottom: 10px;
  border-left: 4px solid #333;
  padding-left: 10px;
}

.policies p {
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
}

.policies hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 20px 0;
  width: 100%;
}

.policies br {
  display: none; /* Remove extra line breaks if they are unnecessary */
}

/* Optional: Add some responsive styling for smaller screens */
@media (max-width: 768px) {
  .contact-page {
    padding: 10px;
  }

  .policies h3 {
    font-size: 1.3em;
  }

  .policies p {
    font-size: 0.95em;
  }
}

        
        .contact-form {
          display: flex;
          flex-direction: column;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          width: 100%;
        }

        .contact-form label {
          margin-bottom: 5px;
          font-weight: bold;
          font-size: 1em;
        }

        .contact-form input, .contact-form textarea {
          margin-bottom: 15px;
          padding: 12px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 100%;
          font-size: 1em;
        }

        .contact-form button {
          padding: 12px 20px;
          border: none;
          background-color: #333;
          color: #fff;
          font-size: 1.1em;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #555;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          padding: 20px;
          color: #333;
        }

        .contact-details p, .social-media a {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1em;
          margin-bottom: 10px;
        }

        .social-media a {
          margin-right: 15px;
          color: #555;
          font-size: 1.5em;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .social-media a:hover {
          color: #333;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default ContactPage;
