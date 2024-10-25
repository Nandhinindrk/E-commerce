import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Calculate the total count of items in the cart
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Update the quantity if the item already exists in the cart
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      // Add new item to the cart
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === id);
      if (existingItem) {
        const newQuantity = existingItem.quantity - 1; // Decrement quantity
        if (newQuantity <= 0) {
          // If quantity is 0 or less, remove the item from the cart
          return prevItems.filter(item => item.id !== id);
        }
        // Update the quantity of the existing item
        return prevItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        );
      }
      return prevItems; // Return previous items if not found
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems => {
      if (newQuantity === 0) {
        return prevItems.filter(item => item.id !== id); // Remove item if quantity is 0
      }
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
