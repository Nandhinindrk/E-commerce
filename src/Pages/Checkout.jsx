import React, { useContext } from 'react';
import { CartContext } from '../Components/Womens/CartContext'; // Adjust the import path as necessary
import '../App.css'; // Ensure this file includes your CSS

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <div>Your cart is empty. Please add items to proceed to checkout.</div>;
  }

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="billing-address">
        <h2>Billing Address</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Postal Code:</label>
            <input type="text" required />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h5>{item.name}</h5>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
        <div className="total">
          <h2>Total Amount: ₹{totalAmount}</h2>
          <button className="checkout-button">Proceed to Payment</button>
        </div>
      </div>

      <style>{`
        .checkout-container {
          padding: 30px;
          max-width: 800px;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 26px;
          color: #333;
        }

        .billing-address {
          margin-bottom: 30px;
          padding: 20px;
          background-color: #f8f8f8;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .billing-address h2 {
          margin-bottom: 15px;
          font-size: 22px;
          color: #007bff;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }

        input:focus {
          border-color: #007bff;
          outline: none; /* Remove the default outline */
        }

        .submit-button {
          background-color: #007bff; /* Bootstrap primary color */
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
          width: 100%;
        }

        .submit-button:hover {
          background-color: #0056b3; /* Darker blue on hover */
        }

        .cart-summary {
  width: 80%; /* Adjust width as needed */
  max-width: 600px; /* To keep it from getting too wide */
  margin: 50px auto; /* Center align on the page */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.cart-summary h3 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.cart-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; /* Name takes more space, Price and Quantity have equal width */
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.cart-item h5 {
  margin: 0;
  font-size: 18px;
}

.cart-item p {
  margin: 0;
  font-size: 16px;
  color: #555;
}

.cart-item p.price, .cart-item p.quantity {
  text-align: right; /* Align price and quantity to the right */
}

.cart-item p.price {
  min-width: 80px; /* Set a minimum width to maintain consistency */
}

.cart-item p.quantity {
  min-width: 60px; /* Fixed width for quantity */
}




.total {
  text-align: center;
  margin-top: 20px;
}

.total h2 {
  margin-bottom: 20px;
  font-size: 22px;
  color: #333;
}

.checkout-button {
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-button:hover {
  background-color: #218838;
}


        @media (max-width: 600px) {
          .checkout-container {
            padding: 20px;
          }

          .cart-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .cart-summary {
            flex-direction: column;
            align-items: flex-start;
          }

          .checkout-button {
            width: 100%;
            margin-top: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Checkout;
