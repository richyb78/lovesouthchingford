import React from 'react'
import "../styles/About.css";
import AboutPic from "../assets/aboutpic.jpg"
import LogoSmall from "../assets/lsclogosmall.png";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage: `url(${AboutPic})`}}></div>
      <div className="aboutBottom">
      <img src={LogoSmall} alt="small love south chingford logo" className="logoSmall"/>
      <h2>About Us</h2>
      <h3>
          Love South Chingford E4 (LSCE4) is a not-for-profit group of volunteers interested
          in making the South Chingford area a pleasant place to be.
      </h3>
      <p>
          We are a voluntary group whose aim is to improve the area by liaising with Waltham Forest 
          Council Councillors and Local Police teams. We have various meetings, phone calls and emails 
          exchanges with our local Police and Waltham Forest Council Officers regarding current issues i.e.
          Dangerous street paving, Anti social behaviour, Street drinking, Empty shops, Pollution, Policing
          and much more - all ongoing.
      </p>
      <p>
          We also put our gardening gloves on to maintain and improve public spaces in South Chingford.
          Here is an update of our achievements over the last 3 years:
      </p>
      <ul>
          <li>Planted and maintain flower beds and secured new trees along our High Street.</li>
          <li>Entered into London in Bloom comptition.</li>
          <li>Redesigned and maintain flower beds at the entrance to Chingford Cemetery.</li>
          <li>Help restore Memorial Park pond.</li>
          <li>Help secure renovation to Memorial Park main entrance (ongoing).</li>
          <li>Helped promote PSPO (Public Space Protection Order).</li>
          <li>Organised for two emergency defibrillator machines to be installed at Chingford Mount.</li>
          <li>Secured a Christmas tree to be proud of on Albert Crescent.</li>
          <li>Organised the Christmas Switch-on event on Albert Crescent</li>
          </ul>
        <p>
              Membership is open to volunteers of all ages & abilities including supervised children. 
          </p>
          <p>
          If you would like to get involved please email us at lovesouthchingforde4@gmail.com
          </p>
      </div>
    </div>
  )
}

export default About
