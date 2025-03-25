import React from 'react'
import "../styles/Galleries.css";
import RepairClub1 from "../assets/RepairClub/RepairClub1.JPG";
import RepairClub2 from "../assets/RepairClub/RepairClub2.JPG";
import RepairClub3 from "../assets/RepairClub/RepairClub3.JPG";

function RepairClubGallery() {
  return (
   <div className="row">
            <div className="column">
                <img src={RepairClub1} />
            </div>
            <div className="column">
                <img src={RepairClub2} />
            </div>
            <div className="column">
                <img src={RepairClub3} />
            </div>
            <div className="column">
                <img src={RepairClub1} />
            </div>
        </div>
  )
}

export default RepairClubGallery
