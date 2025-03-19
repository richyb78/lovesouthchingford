import React from 'react'
import "../styles/Home.css";
import { Link } from "react-router-dom";
import MainPic from "../assets/mainpic.jpg"

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${MainPic})`}}>
      <div className="headerContainer">
        <p>
          Love South Chingford E4 is a not-for-profit group of volunteers interested
          in making the South Chingford area a pleasant place to be.
        </p>
        <Link to="/about">
        <button>Find Out More!</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Home
