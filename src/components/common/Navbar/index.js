import React from 'react'
import './style.css'


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
           <div className='logo'>
            <h1>Raheel Portfolio</h1>
           </div>
           <div className='nav-links'>
            <ul>
                <li><a className="active" href="#welcome-sec">About</a></li>
                <li><a href="#skill-sec">Skills</a></li>
                <li><a href="#project-sec">Projects</a></li>
                <li><a href="#contact-sec">Contact</a></li>
            </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;

