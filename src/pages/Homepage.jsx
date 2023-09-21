import React, { useState, useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import { useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard'
import '../styles.css'

// //my api key a5d8bd7ade
// const API_URL = 'http://www.omdbapi.com?apikey=a5d8bd7a'

const Homepage = ({user}) => {
  const navigate = useNavigate()

  return (
    <div>
      <Navbar isLoggedin/>
        <div className="shop" id="shop">
          <ProductCard />
        </div>
    </div>
  )
}

export default Homepage