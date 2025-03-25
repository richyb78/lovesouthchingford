import React from 'react'
import "../styles/Gallery.css";
import EasterGallery from "../components/EasterGallery";
import XmasGallery from "../components/XmasGallery";
import GardeningGallery from '../components/GardeningGallery';
import RepairClubGallery from '../components/RepairClubGallery';

function Gallery() {
  return (
    <>
    <div>
      <h3 className="galleryTitle">Gardening Around South Chingford</h3>
      <p className="galleryblurb"> We engage in regular and varied gardening activities
                                   around Chingford Cemetery, Memorial Park and the Crescent to promote
                                   environmental awareness, social connections and contribute to a greener community for all.
                                   </p>
      <GardeningGallery />
      <h3 className="galleryTitle">Easter at Chingford Mount</h3>
      <p className="galleryblurb">We have organised Easter markets situated around Albert Crescent where the community can join in festive activities celebrating spring.
                                   </p>
      <EasterGallery />
      <h3 className="galleryTitle">Christmas Tree Switch on Event</h3>
      <p className="galleryblurb">Our Christmas switch on event was a great success and included many stalls, a father Christmas and real snow!
                                  </p>
      <XmasGallery />
      <h3 className="galleryTitle">The Repair Club</h3>
      <p className="galleryblurb">We run regular repair clubs in 228 Chingford Mount for the public to bring in broken household items to be fixed by our expert fixers.</p>
      <RepairClubGallery />

    </div>
    </>
  )
  
}

export default Gallery
