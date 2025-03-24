import React from 'react'
import "../styles/Events.css";
import EasterGallery from "../components/EasterGallery";
import XmasGallery from "../components/XmasGallery";
import GardeningGallery from '../components/GardeningGallery';

function Events() {
  return (
    <div>
      <h3>Gardening Around South Chingford</h3>
      <GardeningGallery />
      <h3>Easter at Chingford Mount</h3>
      <EasterGallery />
      <h3>Christmas Markets</h3>
      <XmasGallery />

    </div>
  )
  
}

export default Events
