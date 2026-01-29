import React from 'react'
import { Link } from 'react-router-dom'
//import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='bg-blue-400 px-6 py-4'>
      <ul className='font-medium text-neutral-50 flex justify-center gap-9 min-w-4'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
