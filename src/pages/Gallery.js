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
      <p className="galleryblurb">We have organised multiple Easter Fairs situated around The Crescent. The Easter markets bring exitement 
                                  as families browsed colorful handmade crafts, sample seasonal treats, 
                                  and joined in festive activities celebrating spring.
                                   </p>
      <EasterGallery />
      <h3 className="galleryTitle">Christmas Markets</h3>
      <p className="galleryblurb">Our Christmas markets are a great success as visitors stroll through charming stalls filled with handcrafted gifts, 
                                  warm seasonal treats, and joyful holiday music.
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
