import React from 'react'
import "../styles/EasterGallery.css";
import Easter1 from "../assets/Easter/Easter1.JPG";
import Easter2 from "../assets/Easter/Easter2.JPG";
import Easter3 from "../assets/Easter/Easter3.JPG";
import Easter4 from "../assets/Easter/Easter4.JPG";


function EasterGallery() {
  return (
         <div className="row">
                <div className="column">
                  <img src={Easter1} />
                  </div>
                  <div className="column">
                  <img src={Easter2} />
                  </div>
                  <div className="column">
                  <img src={Easter3} />
                  </div>
                  <div className="column">
                  <img src={Easter4} />
                </div>
              </div>
  )
}

export default EasterGallery
