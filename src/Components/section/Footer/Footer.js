import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import instagram from './instagram.png'
import location from './location.png'
import whatsapp from './whatsapp.png'
import phone from './phone.png'
import mail from './mail.png'

const Footer = () => {
    return (
        <div className='container-a'>
            <div className="last-section-content">
                <div className="column">
                    <h3>Collections</h3>
                    <Link to="/womens">Womens wear</Link>
                    <br></br>
                    <Link to="/mens">Mens wear</Link>
                </div>
                <div className="column">
                    <h3>Legal</h3>
                    <Link to="/contact#privacy-policy">Privacy Policy</Link>
                    <br></br>
                    <Link to="/contact#terms-conditions">Terms & Conditions</Link>
                    <br></br>
                    <Link to="/contact#refund-policy">Refund and Returns Policy</Link>
                    <br></br>
                    <Link to="/contact#shipping-policy">Shipping Policy</Link>
                    {/* Add social media links or icons here */}
                </div>
                <div className="column">
                    <h3>Contacts</h3>
                    <p><img src={location} alt="" height="13" width="13"/>&nbsp;&nbsp;Chennai</p>
                    <p><img src={instagram} alt="" height="13" width="13"/>&nbsp;&nbsp;sk_fashion</p>
                    <p><img src={whatsapp} alt="" height="13" width="13"/>&nbsp;&nbsp;8957945994</p>
                    <p><img src={phone} alt="" height="13" width="13"/>&nbsp;&nbsp;044-25394002</p>
                    <p><img src={mail} alt="" height="13" width="13"/>&nbsp;&nbsp;skfashion@gmail.com</p>
                    {/* Add links to recent updates or news articles here */}
                </div>
            </div>
            <br></br>
            <div className="container text-center">
                <p>&copy; 2024 SK FASHION. All rights reserved.</p>
            </div>
            
        </div>
    );
};

export default Footer;
