import React from 'react'

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
        <Swiper className='container testimonial-container'
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} >
            <SwiperSlide>
                <div className='client-avatar'>
                  <img src='../../img/youth-hackathon-cover.jpg' alt='avtr1' />
                </div>
            </SwiperSlide>
      </Swiper>

    </div>
  )
}
