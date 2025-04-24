import "../styles/GalleryComponent.css";
import { useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const RepairClubGalleryComponent = ({repairClubImages}) => {
    
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal =(index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

const handleCloseModal = () => {
    setOpenModal(false);

}
const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(repairClubImages.length - 1) : setSlideNumber( slideNumber -1)
}

const nextSlide = () => {
    slideNumber + 1 === repairClubImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
}

  return (
    <div>
        {openModal &&
            <div className="sliderWrap">
            <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}/>
            <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
            <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
            
            <div className='fullScreenImage'>
                <img src={repairClubImages[slideNumber].img} alt=''/>
            </div> 
    </div>
    }

    <div className='galleryWrap'>
        {repairClubImages && repairClubImages.map((slide, index) => {
            return(
                <div
                 className='single' 
                 key={index}
                 onClick={ () => handleOpenModal(index)}>
                <img src={slide.img} alt="" />
                </div>
            )
        })
        }
    </div>
    </div>
  )
  }

export default RepairClubGalleryComponent;
