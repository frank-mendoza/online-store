import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Navigation, Scrollbar, Autoplay, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '../../customComponents/Button'

import birds from '../../img/home/pexels-daniyal-ghanavati-70069.jpg'
import noelle from '../../img/home/pexels-noelle-otto-906006.jpg'
import waldemar from '../../img/home/pexels-waldemar-brandt-2111192.jpg'

const Home = () => {

  const HomeContainer = ({ src, alt }) => (
    < >
      <img className='home__img' src={src} alt={alt} />
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        initiallyVisible={true}
        className="home__contents"
      >
        <h1 className="home__title"> Lorem ipsum dolor sit con`sectetur</h1>
        <p className="home__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br className='sp' />Facilis modi libero minima, consequuntur architecto, suscipit minus.</p>
        <div className="home__button">
          <Button title="Lorem ipsum" white={true} />
        </div>
      </AnimationOnScroll>
    </>
  )
  return (
    <div div
      className='home'
    >
      <Swiper
        modules={[Navigation, Autoplay, Controller, Scrollbar]}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        className='home__wrapper'
      >
        <SwiperSlide className="home__container">
          <HomeContainer src={birds} alt='pexels-daniyal-ghanavati-70069' />
        </SwiperSlide>
        <SwiperSlide className="home__container">
          <HomeContainer src={noelle} alt='pexels-noelle-otto-906006' />
        </SwiperSlide>
        <SwiperSlide className="home__container">
          <HomeContainer src={waldemar} alt='pexels-waldemar-brandt-2111192' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home

