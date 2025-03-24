import React from 'react'
import "../styles/GardeningGallery.css";
import Gardening1 from "../assets/Gardening/Gardening1.JPG";
import Gardening2 from "../assets/Gardening/Gardening2.JPG";
import Gardening3 from "../assets/Gardening/Gardening3.JPG";
import Gardening4 from "../assets/Gardening/Gardening4.JPG";
import Gardening5 from "../assets/Gardening/Gardening5.JPG";
import Gardening6 from "../assets/Gardening/Gardening6.JPG";
import Gardening7 from "../assets/Gardening/Gardening7.JPG";
import Gardening8 from "../assets/Gardening/Gardening8.JPG";
import Gardening9 from "../assets/Gardening/Gardening9.JPG";
import Gardening10 from "../assets/Gardening/Gardening10.JPG";
import Gardening11 from "../assets/Gardening/Gardening11.JPG";
import Gardening12 from "../assets/Gardening/Gardening12.JPG";
import Gardening13 from "../assets/Gardening/Gardening13.JPG";

function GardeningGallery() {
  return (
    <div>
    <div className="row">
        <div className="column">
            <img src={Gardening1} />
            <img src={Gardening2} />
            <img src={Gardening3} />
        </div>
        <div className="column">
            <img src={Gardening4} />
            <img src={Gardening5} />
            <img src={Gardening6} />
        </div>
        <div className="column">
            <img src={Gardening7} />
            <img src={Gardening8} />
            <img src={Gardening9} />
        </div>
        <div className="column">
            <img src={Gardening10} />
            <img src={Gardening11} />
            <img src={Gardening12} />
            <img src={Gardening13} />
        </div>
        </div>
    </div>
  )
}

export default GardeningGallery
