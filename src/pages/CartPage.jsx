import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/layout/Navbar';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        
    ]);

    const handleRemoveFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    return (
        <div className="cart">
            <h2>Your CartPage</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}</p>
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove from CartPage</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartPage;
