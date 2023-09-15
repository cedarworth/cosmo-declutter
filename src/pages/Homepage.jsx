import React, { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/layout/Navigation'

const Homepage = ({user}) => {
  const navigate = useNavigate()


  // useEffect(() => {
  //   if (user === null) {
  //     navigate("/login")
  //   }
  // }, [user, navigate])




  return (
    <div>
        <Navbar isLoggedin/>
          <div className="shop" id="shop">
            
          </div>

    </div>
  )
}

export default Homepage