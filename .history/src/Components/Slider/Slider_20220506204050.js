import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      autoplay={true}
      pagination={true}
    >
      <SwiperSlide><img src='../../img/youth-hackathon-cover.jpg.crdownload' alt='youth' /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  )
}
