import React, { useState } from 'react'
import "../styles/Navbar.css";
import Logo from "../assets/LSCSmall.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="love south chingford logo" />
        <h1>Love South Chingford</h1>
        <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Us</Link>
        <button onClick={toggleNavBar}> 
        <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
