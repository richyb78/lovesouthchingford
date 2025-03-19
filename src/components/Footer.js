import React from 'react'
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <p> &copy; 2025 Love South Chingford</p>
    </div>
  )
}

export default Footer
