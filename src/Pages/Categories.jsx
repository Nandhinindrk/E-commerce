import React, { useState } from 'react';
import { mensProducts } from '../Components/Data/Data';
import '../App.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slider'; // Ensure this is the correct slider import
import { useCart } from '../Components/Womens/CartContext'; // Ensure the path is correct
import Footer from '../Components/section/Footer/Footer'


const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 3000]); // Set the initial range
  const [selectedColors, setSelectedColors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const colors = ['Red', 'White', 'Green', 'Dark Blue', 'Blue', 'Sandal', 'Grey', 'Navy Blue', 'Black'];

  // Access cart context
  const { cartItems, addToCart, removeFromCart } = useCart(); // Destructure from useCart

  const handleColorChange = (color) => {
    setSelectedColors((prevSelected) => {
      if (prevSelected.includes(color)) {
        return prevSelected.filter((c) => c !== color);
      } else {
        return [...prevSelected, color];
      }
    });
  };

  const filteredProducts = mensProducts.filter(product => {
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
          <br></br>
          <div className="category-filter">
            <label htmlFor="categoryFilter">
              <h5>Filter by Category :&nbsp;</h5></label>
            <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="All">All</option>
              <option value="T-shirt">T-shirt</option>
              <option value="Shirts">Shirts</option>
              <option value="Bottoms">Bottoms</option>
              <option value="Outerwear">Outerwear</option>
              <option value="Sweaters">Sweaters</option>
              <option value="Suits">Suits</option>
              <option value="Activewear">Activewear</option>
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
          {/* Price Range Slider */}
          <div className="price-filter">
            <h5>Price Range:</h5>
            <div className="price-slider">
              <Slider
                value={priceRange} // Use priceRange array
                onChange={(newPriceRange) => setPriceRange(newPriceRange)}
                min={0} // Minimum value of the slider
                max={3000} // Maximum value of the slider
                step={50} // Step size for slider
                marks // Enable marks on the slider
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

export default Categories;
