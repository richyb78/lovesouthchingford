import React from 'react'
import "../styles/Navbar.css";
import Logo from "../assets/Lsclogo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <img src={Logo}></img>

      </div>
      <div className="rightside">

      </div>
      
    </div>
  )
}

export default Navbar
