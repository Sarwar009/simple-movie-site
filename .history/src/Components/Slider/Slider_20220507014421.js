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
        }
            pauseTime= {2800},
            transitionTime= {1200},
            slices= {14},
            boxes= 8},
            hoverPause: 1,
            autoAdvance: true,
            captionOpacity: 0.4,
            captionEffect: "fade",
        } 
        >

            {
                sliderData.map(({img, alt}, index) => {
                    return (
                        <SwiperSlide className='slider' key={index}>
                            <div className='slider-item'>
                            <div className='slider-img'>
                              <img src={img} alt={alt} />
                            </div>
                            <div className='slider-content'>
                              <h4 className='title'>Pirats of the carribean</h4>
                              <p>2010</p>
                            </div>
                          </div>
                        </SwiperSlide>
                    )
                })
            }
      

      </Swiper>

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
                sliderData.map(({img, alt}, index) => {
                    return (
                        <SwiperSlide className='slider' key={index}>
                            <div className='slider-item'>
                            <div className='slider-img'>
                              <img src={MovieImg} alt='thumb' />
                            </div>
                            <div className='slider-content'>
                              <h4 className='title'>Pirats of the carribean</h4>
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
