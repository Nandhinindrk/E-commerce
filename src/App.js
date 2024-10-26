import React, { useState } from 'react';
import Navbar from './Components/Assets/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Categories from './Pages/Categories';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import LiveChat from './Components/LiveChat/LiveChat';
import ProductDetail from './Pages/ProductDetails';
import ContactPage from './Pages/ContactPage';
import { CartProvider } from './Components/Womens/CartContext'; // Check the path
import Checkout from './Pages/Checkout';
import { AuthProvider } from './Components/Womens/AuthContext';


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <div>
      <AuthProvider>
      <CartProvider>
        <BrowserRouter basename="/E-commerce">
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/E-commerce' element={<Shop />} /> 
            <Route path='/womens' element={<ShopCategory gender="women" />} />
            <Route path='/mens' element={<Categories gender="men" />} />
            <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/cart' element={<Cart cart={cart} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='/login' element={<LoginSignup />} />
          </Routes>
          <LiveChat />
          
        </BrowserRouter>
      </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
