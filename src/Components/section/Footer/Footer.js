import React from 'react';
import './Footer.css';
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
                    <a href="/womens#womens-wear">Womens wear</a>
                    <br></br>
                    <a href="/mens#mens-wear">Mens wear</a>
                </div>
                <div className="column">
                    <h3>Legal</h3>
                    <a href="/contact#privacy-policy">Privacy Policy</a>
                    <br></br>
                    <a href="/contact#terms-conditions">Terms & Conditions</a>
                    <br></br>
                    <a href="/contact#refund-policy">Refund and Returns Policy</a>
                    <br></br>
                    <a href="/contact#shipping-policy">Shipping Policy</a>
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
