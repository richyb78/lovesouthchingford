import React from 'react'
import "../styles/Galleries.css";
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
            <img src={Gardening1} alt="gardening pictures"/>
            <img src={Gardening2} alt="gardening pictures"/>
            <img src={Gardening3} alt="gardening pictures"/>
        </div>
        <div className="column">
            <img src={Gardening4} alt="gardening pictures"/>
            <img src={Gardening5} alt="gardening pictures"/>
            <img src={Gardening6} alt="gardening pictures"/>
        </div>
        <div className="column">
            <img src={Gardening7} alt="gardening pictures"/>
            <img src={Gardening8} alt="gardening pictures"/>
            <img src={Gardening9} alt="gardening pictures"/>
        </div>
        <div className="column">
            <img src={Gardening10} alt="gardening pictures"/>
            <img src={Gardening11} alt="gardening pictures"/>
            <img src={Gardening12} alt="gardening pictures"/>
            <img src={Gardening13} alt="gardening pictures"/>
        </div>
        </div>
    </div>
  )
}

export default GardeningGallery
