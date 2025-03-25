import React from 'react'
import "../styles/Galleries.css";
import RepairClub1 from "../assets/RepairClub/RepairClub1.JPG";
import RepairClub2 from "../assets/RepairClub/RepairClub2.JPG";
import RepairClub3 from "../assets/RepairClub/RepairClub3.JPG";

function RepairClubGallery() {
  return (
   <div className="row">
            <div className="column">
                <img src={RepairClub1} alt="repair club picture"/>
            </div>
            <div className="column">
                <img src={RepairClub2} alt="repair club picture"/>
            </div>
            <div className="column">
                <img src={RepairClub3} alt="repair club picture"/>
            </div>
            <div className="column">
                <img src={RepairClub1} alt="repair club picture"/>
            </div>
        </div>
  )
}

export default RepairClubGallery
