import React, { useState } from 'react';
// import Navbar from '../components/layout/Navbar';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        // This is where your cart items would go in a real app
        // Each item should be an object with properties for id, name, price, etc.
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
