import React from 'react'
import { sliderData } from './SliderData';

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css'

export default function Slider() {
  return (
    <div className='slider-container'>
        <Swiper className='swiper-container'
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
            {
                sliderData.map(({img, alt}, index) => {
                    return (
                        <SwiperSlide className='' key={index}>
                            <div className='slider-img'>
                            <img src={img} alt={alt} />
                            </div>
                        </SwiperSlide>
                    )
                })
            }
      </Swiper>

    </div>
  )
}
