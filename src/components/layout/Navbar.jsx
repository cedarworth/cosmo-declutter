import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"; 
import '../../styles.css' 
import { useCart } from "../../providers/CartProvider";
import { useUser } from "../../providers/UserProvider";

const Navbar = ({ LoginPage }) => {
  const {cart, setCart} = useCart();
  const {user} = useUser();

  return (

    <header className="header">
      <div className="logo">
          <Link to="/home"><img
          id="nav-img"
          src="../assets/logo_4.png"
          width="250"
          height="150"
          alt=""
        /></Link>
      </div>
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
            {!!user ? (
              <>
                <div className="nav-item">
                  <input type="radio" name="nav" id="e" />
                  <label htmlFor="e">
                    <Link to={`/${user}/profile`} className="nav-link">
                      Profile
                    </Link>
                  </label>
                </div>
                <div className="nav-item">
                  <input type="radio" name="nav" id="f" />
                  <label htmlFor="f">
                    <Link to="/login" className="nav-link">
                      Logout
                    </Link>
                  </label>
                </div>
              </>
            ) : (
              <div className="nav-item">
                <input type="radio" name="nav" id="e" />
                <label htmlFor="e">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </label>
              </div>
            )}
          </div> {/* Closing tag for "menu-list" div */}
          <Sidebar user={user}/>
        </div> {/* Closing tag for "container" div */}
    </header>
  );
};

export default Navbar
