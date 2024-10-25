// Product.js

import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
        console.log(`Added to cart: ${product.name}`); // Debug log
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;
