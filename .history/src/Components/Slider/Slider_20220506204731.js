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
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      pagination={true}
      className='slider-container'
    >
      <SwiperSlide><img src='../../img/youth-hackathon-cover.jpg.crdownload' alt='youth' /></SwiperSlide>
      <SwiperSlide><img src='../../img/youth-hackathon-cover.jpg.crdownload' alt='youth' /></SwiperSlide>
      <SwiperSlide><img src='../../img/youth-hackathon-cover.jpg.crdownload' alt='youth' /></SwiperSlide>
      <SwiperSlide><img src='../../img/youth-hackathon-cover.jpg.crdownload' alt='youth' /></SwiperSlide>
      <SwiperSlide><img src='../../img/youth-hackathon-cover.jpg.crdownload' alt='youth' /></SwiperSlide>
      
    </Swiper>
  )
}
