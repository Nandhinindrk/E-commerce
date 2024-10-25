import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mensProducts, womensProducts } from '../Components/Data/Data';
import StarRating from '../Components/StarRating/StarRating';
import { CartContext } from '../Components/Womens/CartContext'; // Adjust the import path
import '../App.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const allProducts = [...mensProducts, ...womensProducts];
    const product = allProducts.find((item) => item.id === parseInt(productId));
    const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

    // Initialize the quantity from cartItems if the product exists in the cart
    const initialQuantity = cartItems.find(item => item.id === product.id)?.quantity || 0;
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleAddToCart = () => {
        addToCart(product, 1); // Add 1 quantity to cart
        setQuantity(prevQuantity => prevQuantity + 1); // Update local state
    };

    const handleRemoveFromCart = () => {
        if (quantity > 0) {
            removeFromCart(product.id); // Call to removeFromCart
            setQuantity(prevQuantity => prevQuantity - 1); // Update local state without going negative
        }
    };

    // Update the quantity state when cartItems change
    useEffect(() => {
        const updatedQuantity = cartItems.find(item => item.id === product.id)?.quantity || 0;
        setQuantity(updatedQuantity);
    }, [cartItems, product.id]);

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className="product-detail-container">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <p className="price">Price: ₹{product.price}</p>
                <p className="description">{product.description}</p>

                <div className="size-options">
                    <p>Select Size:</p>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>

                <div className="rating">
                    <StarRating rating={product.rating} />
                    <span>{product.rating}</span>
                </div>

                <div className="cart-actions">
                    <button onClick={handleAddToCart} className="add-to-cart">
                        Add to Cart
                    </button>
                    {quantity > 0 && (
                        <div className="cart-quantity">
                            <span>Quantity: {quantity}</span>
                            <button onClick={handleRemoveFromCart} className="remove-item">
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
