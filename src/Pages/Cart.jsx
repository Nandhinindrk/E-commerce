// Cart.jsx
import React, { useContext } from 'react';
import { useAuth } from '../Components/Womens/AuthContext'; // Importing useAuth for authentication checks
import { CartContext } from '../Components/Womens/CartContext'; // Importing CartContext for cart operations
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for redirection
import '../App.css'; // Assuming this file contains necessary styles
import Footer from '../Components/section/Footer/Footer'


const Cart = () => {
  const { isAuthenticated } = useAuth(); // Check if the user is authenticated
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext); // Cart items and actions from CartContext
  const navigate = useNavigate(); // Navigate for redirecting user

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 0) return; // Prevent negative quantities
    updateQuantity(id, newQuantity); // Update quantity in cart
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to checkout page
  };

  // Check if the user is authenticated
  if (!isAuthenticated) {
    return <div>Please log in to view your cart.</div>;
  }

  // Check if the cart is empty
  if (cartItems.length === 0) {
    return <div className="cart-bag">
      <h4>Your shopping bag is empty</h4>
        </div>;
  }

  return (
    <div className="cart-container">
      <h5>Your Cart</h5>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-info">
              <h2>{item.name}</h2>
              <p className="price">Price: ₹{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-item">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h2>
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
        
      </div>

      <style>{`
        .cart-container {
          padding: 20px;
        }

        .cart-items {
          display: flex;
          flex-direction: column;
        }

        .cart-item {
          display: flex;
          align-items: center;
          margin: 10px 0;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;
        }

        .cart-item-image img {
          width: 100px; /* Adjust size as needed */
          height: auto;
          margin-right: 20px;
        }

        .cart-item-info {
          flex-grow: 1;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }

        .quantity-controls button {
          margin: 0 5px;
        }

        .remove-item {
          background-color: red;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
        }

        .cart-summary {
          margin-top: 20px;
          text-align: right;
        }

        .checkout-button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 16px;
        }
          
      `}</style>
      <Footer />
      
    </div>
  );
};

export default Cart;
