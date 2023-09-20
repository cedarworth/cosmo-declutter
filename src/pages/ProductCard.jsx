import React, { useState } from 'react';
import '../styles.css';

const ProductCard = () => {
    const product = {
        id: 1,
        image: '../public/assets/img-4.jpg',
        name: 'Tablet',
        description: 'This is a 14inches tablet',
        price: 10000,
        location: 'Ibeju lekki'
    };
    
    const [count, setCount] = useState(0);

    const addToCart = () => {
        setCount(count + 1);
    };

    const removeFromCart = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item">
          <img width="221" height="260" src={product.image} alt="" />
          <div className="details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="price-quantity">
              <p>Price: N{product.price}</p>
              <i class="bi bi-cart4"></i>
              <div className="buttons">
                <i class="bi bi-dash-lg" onClick={removeFromCart}></i>
                <span className="quantity">{count}</span>
                <i class="bi bi-plus-lg" onClick={addToCart}></i>
              </div>
            </div>
            <p>Location: {product.location}</p>
          </div>
        </div>
    );
};

export default ProductCard;