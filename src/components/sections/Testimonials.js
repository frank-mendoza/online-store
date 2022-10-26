import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import pexelspixabay from '../../img/home/pexels-pixabay.png'
import pexelsmentatdgt from '../../img/home/pexels-mentatdgt.png'
import pexelscottonbro from '../../img/home/pexels-cottonbro.png'
import pexelsmeriño from '../../img/home/pexels-meriño-sm.png'

const Testimonials = () => {

  const CarouselItem = ({ src, alt }) => (

    <div className="carousel__item">
      <div className="carousel__item-content">
        <img src={src} alt={alt} />
        <h4 className="carousel__item-title">Lorem ipsum
          <br />
          <span>Lorem ipsum </span>
        </h4>
      </div>
      <p className="carousel__item-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi libero minima, consequuntur architecto, suscipit minus.
      </p>
    </div>

  )

  return (
    <div className='carousel'>
      <div className="carousel__container">
        <h3 className="subtitle">Lorem ipsum </h3>
        <h2 className='title'>Lorem ipsum dolor sit amet</h2>
        <Swiper
          modules={[Navigation, Autoplay, Controller, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          breakpoints={{
            390: {
              slidesPerView: 1,
            },
            414: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 4
            },
            1000: {
              slidesPerView: 4
            }
          }
          }
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          scrollbar={{ draggable: true }}
          className='carousel__content'
        >
          <SwiperSlide>
            <CarouselItem
              src={pexelspixabay}
              alt='pexelspixabay'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              src={pexelscottonbro}
              alt='pexelscottonbro'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              src={pexelsmentatdgt}
              alt='pexelsmentatdgt'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              src={pexelsmeriño}
              alt='pexelsmeriño'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              src={pexelsmeriño}
              alt='pexelsmeriño'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              src={pexelsmeriño}
              alt='pexelsmeriño'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              src={pexelsmeriño}
              alt='pexelsmeriño'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials