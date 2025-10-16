import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='link'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}
export default Navbar