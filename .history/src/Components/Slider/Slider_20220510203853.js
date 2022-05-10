import React from 'react'
import { sliderData } from './SliderData';

// import Swiper core and required modules
import { Autoplay, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.css'
import { Link } from 'react-router-dom';

export default function Slider() {
  return (
    <div className='slider-container container'>

      <Swiper className='swiper-slider-div'
            // install Swiper modules
            modules={[Navigation,Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop= {true}
            onF
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }} 
          >

              {
                sliderData.map(({img, alt, title, year}, index) => {
                    return (
                        <SwiperSlide className='slider-item' key={index}>
                            <div className='slider-img'>
                              <img src={img} alt={alt} />
                            </div>
                            <div className='slider-content'>
                              <h4 className='title'>{title}</h4>
                              <p>{year}</p>
                            </div>
                        </SwiperSlide>
                    )
                })
              }
      </Swiper>


    
    </div>
  )
}