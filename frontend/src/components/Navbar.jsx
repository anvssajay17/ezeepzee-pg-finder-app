
import './styles/Navbar.css'; 
import { Link } from "react-router-dom";

const Navbar = () => {


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

     

    </>
  );
};

export default Navbar;




