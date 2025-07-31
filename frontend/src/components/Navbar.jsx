// import React, { useState } from 'react';
import './styles/Navbar.css'; 
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const handleToggle = () => {
  //   setMenuOpen(prev => !prev);
  // };

  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          
          <div className="logo">
            <a href="#home">EzeePzee</a>
          </div>

          
          <ul id="menu">
            <li><a href="#home">Home</a></li>
            {/* <li><a href="#AddPg">Add Pg</a></li> */}
            <li><Link to="/addpg">Add Pg</Link></li>

            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

     
      {/* <div
        className={menuOpen ? "menuIcon toggle" : "menuIcon"}
        onClick={handleToggle}
      >
        <span className="icon-bars"></span>
        <span className="icon-bars overlay"></span>
      </div>

      <div
        className="overlay-menu"
        style={{
          transform: menuOpen ? 'translateX(0%)' : 'translateX(-100%)',
          transition: 'transform 0.2s ease-out',
        }}
      >
        <ul id="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#Add pg">Add Pg</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div> */}
    </>
  );
};

export default Navbar;




