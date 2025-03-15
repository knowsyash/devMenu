import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img 
        src={assets.logo} 
        alt="Website Logo" 
        className="logo" 
      />
      <img 
        src={assets.profile_image} 
        alt="User Profile" 
        className="profile" 
      />
    </div>
  )
}

export default Navbar
