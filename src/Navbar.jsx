import { Link } from "react-router-dom";
import React, {useState} from "react"
 const Navbar = () => {
    const [menuOpen, setMenuOpen]=  useState(false)
  return (
    <nav className="navbar">
      <img src="./image/logomark.png" />
      
        <div className="menu"
        onClick={()=>{
            setMenuOpen(!menuOpen);
        }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={menuOpen? "open": ""}>
          <li>
            <Link to="/"> home</Link>
          </li>
          <li>
            <Link to="/create"> New blog</Link>
          </li>
          <li>
            <Link to=""> Contacts</Link>
          </li>
          <li>
            <Link to=""> Services</Link>{" "}
          </li>
        </ul>
     
    </nav>
  );
};

export default Navbar;
