import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles.css' 

const Footer = () => {
  return (
      <div className="footer">
        <div className="footer-dir"><Link to="#Testimonials">About</Link></div>
        <div className="footer-dir"><Link to="#NewsPage">News</Link></div>
        <div className="footer-dir"><Link to="#Testimonials">Testimonials</Link></div>
        <div className="footer-dir"><Link to="#Testimonials">Contact</Link></div>
    
        <div className="socials">
          <Link to="#Facebook"><i className="bi bi-facebook"></i></Link>
          <Link to="#Instagram"><i className="bi bi-instagram"></i></Link>
          <Link to="#Twitter"><i className="bi bi-twitter"></i></Link>
          <Link to="#Youtube"><i className="bi bi-youtube"></i></Link>
        </div>
    </div>
  )
}

export default Footer;