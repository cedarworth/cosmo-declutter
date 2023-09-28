import React, { useState } from 'react';
import '../styles.css';
// import { useHistory } from "react-router-dom";
import { useCart } from '../providers/CartProvider';

function ProductCard() {
  // const [inCart, setInCart] = useState(0);
  const {cart, setCart} = useCart()
  // const history = useHistory();



  const product = {
        id: 1,
        image: '../assets/img-4.jpg',
        name: 'Tablet',
        description: 'This is a 14inches tablet',
        price: 10000,
        location: 'Ibeju lekki',
  };

  const [count, setCount] = useState(0);

    const addToCart = () => {
        setCount(count + 1);
        setCart([...cart, product])
    };

    const removeFromCart = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

  return (
    <div className="card">
      <img src={product.image} alt="Product" />
      <div className="info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>Location: {product.location}</p>
        <div className="buttons">
            <i class="bi bi-cart4">Add tocart:</i>
            <div className="quantity">
                <i class="bi bi-dash-lg" onClick={removeFromCart}></i>
                <span className="quantity">{count}</span>
                <i class="bi bi-plus-lg" onClick={addToCart}></i>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
