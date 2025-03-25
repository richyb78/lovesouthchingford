import React from 'react'
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon onClick={() => window.open('https://www.facebook.com/groups/2335756109972489/')} />
        <InstagramIcon onClick={() => window.open('https://www.instagram.com/lovesouthchingford/')} />
      </div>
      <p> &copy; 2025 Love South Chingford.</p>
    </div>
  )
}

export default Footer
