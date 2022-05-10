import React from 'react'
import { sliderData } from './SliderData';

// import Swiper core and required modules
import { Pagination, Autoplay, Scrollbar, A11y, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Slider.css'

export default function Slider() {
  return (
    <div className='slider-container container'>

slider-container


    {/* <Swiper className='swiper-container'
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }} 
        >

            {
                sliderData.map(({img, alt, title}, index) => {
                    return (
                        <SwiperSlide className='slider' key={index}>
                            <div className='slider-item'>
                              <div className='slider-img'>
                                <img src={img} alt={alt} />
                              </div>
                              <div className='slider-content'>
                                <h4 className='title'>{title}</h4>
                                <p>2010</p>
                              </div>
                          </div>
                        </SwiperSlide>
                    )
                })
            }
      </Swiper> */}
    </div>
  )
}
