import React from 'react'
import "../styles/XmasGallery.css";
import XmasMarket1 from "../assets/XmasMarkets/XmasMarket1.JPG";
import XmasMarket2 from "../assets/XmasMarkets/XmasMarket2.JPG";
import XmasMarket3 from "../assets/XmasMarkets/XmasMarket3.JPG";
import XmasMarket4 from "../assets/XmasMarkets/XmasMarket4.JPG";
import XmasMarket5 from "../assets/XmasMarkets/XmasMarket5.JPG";

function XmasGallery() {
  return (
    <div className="row">
        <div className="column">
            <img src={XmasMarket1} />
            <img src={XmasMarket2} />
        </div>
        <div className="column">
            <img src={XmasMarket3} />
        </div>
        <div className="column">
            <img src={XmasMarket4} />
        </div>
          <div className="column">
            <img src={XmasMarket5} />
        </div>
    </div>
      
  )
}

export default XmasGallery

