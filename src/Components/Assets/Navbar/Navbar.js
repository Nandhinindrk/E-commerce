import React, { useState } from 'react';
import './Navbar.css';
import SK from '../SK.png';
import Cart from '../Cart.png';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import { useAuth } from '../../Womens/AuthContext'; // Correct path to AuthContext
import { useCart } from '../../Womens/CartContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated } = useAuth(); // For authentication check
    const navigate = useNavigate(); // useNavigate hook
    const { cartCount } = useCart();  // Get the cart count from CartContext

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCartClick = () => {
        if (!isAuthenticated) {
            alert('Please log in to view your cart.');
            navigate('/login'); // Redirect to login page if not authenticated
        } else {
            navigate('/cart'); // Redirect to cart if authenticated
        }
    };

    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img src={SK} alt="Logo" width="200" height="92" />
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <li onClick={() => { setMenu('shop'); setIsOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === 'shop' && <div className="active-indicator"></div>}
                </li>
                <li onClick={() => { setMenu('womens'); setIsOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to='/womens'>Womens</Link>
                    {menu === 'womens' && <div className="active-indicator"></div>}
                </li>
                <li onClick={() => { setMenu('mens'); setIsOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to='/mens'>Mens</Link>
                    {menu === 'mens' && <div className="active-indicator"></div>}
                </li>
                <li onClick={() => { setMenu('contact'); setIsOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link> 
                    {menu === 'contact' && <div className="active-indicator"></div>}
                </li>
                <li>
                    <div className="nav-logo-cart">
                        {isAuthenticated ? (
                            <button onClick={() => navigate('/profile')}>Profile</button>
                        ) : (
                            <Link to='/login'><button>LOGIN</button></Link>
                        )}
                    </div>
                </li>
                <li>
                    <div className='nav-logo-cart-a' onClick={handleCartClick}>
                        <img src={Cart} alt="Cart" />
                        <div className="nav-cart-count">{cartCount}</div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
