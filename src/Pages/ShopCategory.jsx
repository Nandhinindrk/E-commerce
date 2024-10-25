import React, { useState } from 'react';
import { womensProducts } from '../Components/Data/Data';
import '../App.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slider';
import { useCart } from '../Components/Womens/CartContext'; // Import the custom hook from CartContext
import Footer from '../Components/section/Footer/Footer'


const ShopCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2500]); 
  const [selectedColors, setSelectedColors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const { addToCart, removeFromCart, cartItems } = useCart(); // Access cart context values

  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Pink', 'Brown'];

  const handleColorChange = (color) => {
    setSelectedColors((prevSelected) => {
      if (prevSelected.includes(color)) {
        return prevSelected.filter((c) => c !== color);
      } else {
        return [...prevSelected, color];
      }
    });
  };

  const filteredProducts = womensProducts.filter(product => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
    return categoryMatch && priceMatch && colorMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get the quantity of a product in the cart
  const getProductQuantity = (productId) => {
    const productInCart = cartItems.find(item => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <div className="shop-category-container">

      <div className="shop-layout">
        <div className="filter-container">
          <div className="category-filter">
          <br></br>
            <label htmlFor="categoryFilter">
              <h5>Filter by Category :&nbsp;</h5></label>
            <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="All">All</option>
              <option value="Kurti">Kurti</option>
              <option value="Work wear">Work wear</option>
              <option value="Western wear">Western wear</option>
              <option value="Summer wear">Summer wear</option>
            </select>
          </div>
          <br></br>
          <div className="color-filter">
            <h5>Filter by Color:</h5>
            {colors.map((color) => (
              <label key={color}>
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                />
                {color}
              </label>
            ))}
          </div>
<br></br>
          <div className="price-filter">
            <h5>Price Range:</h5>
            <div className="price-slider">
              <Slider
                value={priceRange}
                onChange={(newPriceRange) => setPriceRange(newPriceRange)}
                min={0}
                max={2500}
                step={50}
                marks
              />
              <div>
                <br />
                <span>Min: ₹{priceRange[0]}</span> - <span>Max: ₹{priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-list-container">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product.id} className="product-item">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>Price: ₹{product.price}</p>
                </Link>

                <div className="cart-actions">
                  <button onClick={() => addToCart(product)} className="add-to-cart">
                    Add to Cart
                  </button>
                  {getProductQuantity(product.id) > 0 && (
                    <div className="cart-quantity">
                      <span>Quantity: {getProductQuantity(product.id)}</span>
                      <button onClick={() => removeFromCart(product.id)} className="remove-item">
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No products available in this category and price range.</p>
          )}
        </div>
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Footer />
    </div>
    
  );
};

export default ShopCategory;
