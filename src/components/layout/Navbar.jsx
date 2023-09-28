import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"; 
import '../../styles.css' 
import { useCart } from "../../providers/CartProvider";


const Navbar = ({ user, loginPage }) => {
  const {cart, setCart} = useCart()

  return (
    <header className="header">
      <div className="logo">
          <Link to="/"><img
          id="nav-img"
          src="../assets/logo_4.png"
          width="250"
          height="150"
          alt=""
        /></Link>
      </div>
      
      {!loginPage ? (
        <div className="container">
          <div className="cart" id="cartLoads">
            <Link to="/CartPage">
              <i className="bi bi-cart2"></i>
              <div id="cartAmount" className="cartAmount">
                {cart.length}
              </div>
            </Link>
          </div>

          <div id="menu" className="menu-list">
            <div className="nav-item">
              <input type="radio" name="nav" id="e" />
              <label htmlFor="e">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </label>
            </div>
            <div className="nav-item">
              <input type="radio" name="nav" id="f" />
              <label htmlFor="f">
                <Link to="/login" className="nav-link">
                {!!user ? "logout" : "login"}
                </Link>
              </label>
            </div>
          </div>
          <Sidebar user={user}/>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
