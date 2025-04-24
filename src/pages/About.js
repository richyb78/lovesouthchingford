import React from 'react'
import "../styles/About.css";
import AboutPic from "../assets/aboutpic.jpg"
import HandsLogo from "../assets/handslogo.png";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage: `url(${AboutPic})`}}></div>
      <div className="aboutBottom">
      <img src={HandsLogo} alt="love south chingford logo" className="logoSmall"/>
      <h2>About Us</h2>
      <h3>
          Love South Chingford E4 (LSCE4) is a not-for-profit group of volunteers interested
          in making the South Chingford area a pleasant place to be.
      </h3>
      <p>
          We are a voluntary group who regulary put on our gardening gloves to garden the public 
          spaces in South Chingford. Our aim is to improve the look and feel of the area and to 
          create a sense of community for all its residents.
      </p>  
      <p>
          We organise and run various different seasonal events like the Christmas tree switch on at Albert Crescent
          and Easter markets and regulary run a repair shop in 228 Chingford Mount.
      </p>
       <p> 
          We are also involved in general community issues liaising with Waltham Forest 
          Council Councillors and Local Police teams. We have various meetings, phone calls and emails 
          exchanges with our local Police and Waltham Forest Council Officers regarding current issues i.e.
          Dangerous street paving, Anti social behaviour, Street drinking, Empty shops, Pollution, Policing
          and much more - all ongoing.
      </p>
      <p>
          
          Here are some of our achievements over the last 3 years:
      </p>
      <div className='listContainer'>
      <ul>
          <li>Planted and maintain flower beds and secured new trees along our High Street.</li>
          <li>Entered into London in Bloom flower comptition.</li>
          <li>Redesigned and maintain flower beds at the entrance to Chingford Cemetery.</li>
          <li>Restored Memorial Park pond.Quite often 2 ducks can be seen in residence!</li>
          <li>Help secure renovation to Memorial Park main entrance.</li>
          <li>Helped promote PSPO (Public Space Protection Order).</li>
          <li>Organised for two emergency defibrillator machines to be installed at Chingford Mount.</li>
          <li>Secured a Christmas tree to be proud of on Albert Crescent.</li>
          <li>Organised the Christmas Switch-on event on Albert Crescent which is now held on the first Saturday 
              in December at St Edmunds Hall.</li>
          <li>Each year we have funded and installed poppies along Old Church Road in remembrance of all who sacrificed their lives in WW2.</li>
          <li>Organised installation and maintance of 2 defibrillators at Chingford Mount.</li>
        </ul>
        </div>
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
