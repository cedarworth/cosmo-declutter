import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import { useCart } from "../providers/CartProvider";
import Footer from "../components/layout/Footer";

const Homepage = ({ user }) => {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  return (
    <div>
      <Navbar user={user} />
      <div className="shop" id="shop">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
