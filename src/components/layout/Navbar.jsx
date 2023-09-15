import React from "react";
import {Link} from "react-router-dom"


const Navbar = ({ isLoggedin }) => {

  return (
    
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/">CosmoDeclutter</Link>
        </h1>
      </div>
      {isLoggedin ? (
        <div className="container">
          <div className="cart" id="cartLoads">
            <Link to="cart.html">
              <i className="bi bi-cart2"></i>
              <div id="cartAmount" className="cartAmount">
                0
              </div>
            </Link>
          </div>

          {/* <!-- Navigation icons --> */}
          <div className="navigation">
            <i id="open" className="bi bi-list"></i>
            <i id="close" className="bi bi-x-lg hide"></i>
          </div>

          {/* <!-- menu items --> */}

          <div id="menu" className="menu-list">
            <div className="nav-item">
              <input type="radio" name="nav" id="a" />
              <label htmlFor="a">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </label>
            </div>
            <div className="nav-item">
              <input type="radio" name="nav" id="b" />
              <label htmlFor="b">
                <Link to="#about" className="nav-link">
                  About
                </Link>
              </label>
            </div>
            <div className="nav-item">
              <input type="radio" name="nav" id="c" />
              <label htmlFor="c">
                <Link to="#news" className="nav-link">
                  News
                </Link>
              </label>
            </div>
            <div className="nav-item">
              <input type="radio" name="nav" id="d" />
              <label htmlFor="d">
                <Link to="#testimonials" className="nav-link">
                  Testimonials
                </Link>
              </label>
            </div>
            <div className="nav-item">
              <input type="radio" name="nav" id="e" />
              <label htmlFor="e">
                <Link to="#contact" className="nav-link">
                  Contact
                </Link>
              </label>
            </div>
            <div className="nav-item">
              <input type="radio" name="nav" id="f" />
              <label htmlFor="f">
                <Link to="/login" className="nav-link">
                  login
                </Link>
              </label>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );

};

export default Navbar;