import React from 'react'
import { sliderData } from './SliderData';

// import Swiper core and required modules
import { Autoplay, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.css'

export default function Slider() {
  return (
    <div className='slider-container container'>

      <Swiper className='swiper-slider-div'
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >

              {
                sliderData.map(({img, alt, title}, index) => {
                    return (
                        <SwiperSlide className='slider-item' key={index}>
                            <div className='slider-item'>
                              <div className='slider-img'>
                                <img src={img} alt={alt} />
                              </div>
                              <div className='slider-content'>
                                <h4 className='title'>{title}</h4>
                                <p>2010</p>
                              </div>
                        </SwiperSlide>
                    )
                })
              }
            {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>


    
    </div>
  )
}
