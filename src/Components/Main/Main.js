import React from 'react';
import './Main.css'
import { useState } from 'react';
import kurti from '../Assets/kurti.avif'
import jeans from '../Assets/jeans.avif'
import summer from '../Assets/summer.avif'
import western from '../Assets/western.avif'
import sarees from '../Assets/sarees.avif'
import men1 from '../Assets/men1.avif'
import men2 from '../Assets/men2.avif'
import men3 from '../Assets/men3.avif'
import men4 from '../Assets/men4.avif'
import men5 from '../Assets/men5.avif'
import photo2 from '../Assets/photo2.avif'
import photo4 from '../Assets/photo4.avif'
import photo3 from '../Assets/photo3.avif'
import free from '../Assets/free.avif'





const Main = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    setIsReadMore(!isReadMore);
  };

    return (
      <div className="container mt-4">
        <div className="row">
          {/* Main content, full width on mobile, 12 columns on medium and larger screens */}
          <div className="col-12">
            <h1>WOMEN</h1>
          </div>
          
          {/* Responsive Image Layout */}
          <div className="col-12">
            <div className="row border-none p-3">
              {/* Left Side: One Picture */}
              <div className="col-12 col-md-6 mb-3">
                <div className="text-center">
                <a href="/womens">
                  <img src={kurti} className="img-fluid" alt="left" />
                  </a>
                </div>
              </div>
  
              {/* Right Side: Four Pictures */}
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-6 mb-2">
                  <a href="/womens">
                    <img src={jeans} className="img-fluid" alt="Right 1" />
                    </a>
                  </div>
                  <div className="col-6 mb-2">
                  <a href="/womens">
                    <img src={sarees} className="img-fluid" alt="Right 2" />
                    </a>
                  </div>
                  <div className="col-6">
                  <a href="/womens">
                    <img src={summer} className="img-fluid" alt="Right 3" />
                    </a>
                  </div>
                  <div className="col-6">
                  <a href="/womens">
                    <img src={western} className="img-fluid" alt="Right 4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* Second Section */}
      <div className="row mt-5">
        <div className="col-12">
        <div className="banner">
            <span className="label"><img src={free} alt="" />🚚 Free Delivery on Orders Over Rs. 1000!<img src={free} alt="" /></span>
        </div>
          <h1>MEN</h1>
        </div>

        {/* Link Button to Another Page (Second Section) */}
        <div className="col-12 mb-3">
        
        </div>

        {/* Responsive Image Layout (Second Section) */}
        <div className="col-12">
          <div className="row border-none p-3">
            {/* Left Side: One Picture */}
            <div className="col-12 col-md-6 mb-3">
            <a href="/mens">
            <div className="text-center"><img src={men1} className="img-fluid" alt="Left Men" /></div>
            </a>
            </div>

            {/* Right Side: Four Pictures */}
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 mb-2">
                <a href="/mens">
                  <img src={men2} className="img-fluid" alt="Right Men 1" />
                  </a>
                </div>
                <div className="col-6 mb-2">
                <a href="/mens">
                <img src={men3} className="img-fluid" alt="Right Men 2" />
                </a>
                </div>
                <div className="col-6">
                <a href="/mens">
                <img src={men4} className="img-fluid" alt="Right Men 3" />
                </a>
                </div>
                <div className="col-6">
                <a href="/mens">
                  <img src={men5} className="img-fluid" alt="Right Men 4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-section">
      <h2 className="section-title">Discover Our Exclusive Collections</h2>
      <p className="section-description">
        Elevate your wardrobe with our handpicked selections of the latest trends and timeless classics. 
        Explore styles for every occasion, from casual outings to formal events.
      </p>
      <div className="featured-collections">
        <div className="collection-item">
          <img src={photo2} alt="Collection 1" />
          <h3>Formal Men's Pants & Shirts</h3>
          <p>Step into sophistication with our curated collection of formal men's pants and shirts, designed for the modern gentleman. This collection offers a perfect blend of style, comfort, and versatility, ensuring you look sharp for any occasion—be it a business meeting, a formal event, or a special celebration.</p>
        </div>
        <div className="collection-item">
          <img src={photo4} alt="Collection 2" />
          <h3>Women’s Maxi Dresses</h3>
          <p>Unleash your inner goddess with our stunning collection of women’s maxi dresses, designed to flow gracefully and offer comfort without compromising on style. Whether you're attending a summer wedding, a casual beach outing, or a chic brunch with friends, our maxi dresses are the perfect choice for any occasion.</p>
        </div>
        <div className="collection-item">
          <img src={photo3} alt="Collection 3" />
          <h3>Men’s Casuals</h3>
          <p>Redefine your everyday wardrobe with our curated collection of men’s casuals, where style meets comfort for the modern man. Perfect for weekends, casual outings, or relaxed days at home, this collection offers versatile pieces that effortlessly blend fashion and functionality.</p>
        </div>
      </div>
      <div className="shop-now-btn">
      <a href="/womens">
        <button>Shop Now</button>
        </a>
      </div>
    </div>
    {/* fourth section */}
    <div className="row my-4">
    <div className="col-12">
      <p>
      {isReadMore ? (
              <>
      SK fashion brand is a creative entity that designs, produces, and markets clothing, accessories, and lifestyle products. It reflects a unique style, targeting specific consumer preferences while often blending trends with timeless aesthetics. SK Fashion brands can focus on various niches, such as luxury, streetwear, or eco-friendly fashion, each aiming to establish a distinct identity. The brand's vision influences every aspect of the product, from material selection to marketing campaigns. Successful brands foster strong emotional connections with customers, often promoting values like self-expression, sustainability, or innovation. Through branding, quality, and trendsetting designs, fashion brands build loyalty and global recognition.
      </>
            ) : (
              <>
                A fashion brand is a creative entity that designs, produces, and markets clothing, accessories, and lifestyle products. 
                It reflects a unique style, targeting specific consumer preferences while often blending trends with timeless aesthetics.
              </>
            )}
             </p>
             <a href="#" onClick={toggleReadMore} className="text-primary">
            {isReadMore ? " Show Less" : " Read More"}
          </a>
     
    </div>
  </div>

  {/* forth section Three Columns Separated by Lines */}
  <div className="row my-4">
    <div className="col-md-4">
      <div className="border-end pe-3">
        <h5>Free delivery</h5>
        <p>Free delivery on order above Rs. 1000</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="border-end px-3">
        <h5>Return within 20 days*</h5>
        <p>No questions asked returns and refunds</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="ps-3">
        <h5>Secure payment</h5>
        <p>Hassel free secure payment gateway</p>
      </div>
    </div>
  </div>
      </div>
    );
  };
  
  export default Main;

