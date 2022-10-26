import React from 'react'
import Button from '../../customComponents/Button'

import cottonbro from '../../img/home/cottonbro.png'
import merino from '../../img/home/pexels-meriño.png'
import pexelswendywei from '../../img/home/pexelswendywei.png'
import pexelsmichaelburrows from '../../img/home/pexels-michael-burrows.svg'
import bottomimg from '../../img/home/plants.svg'
import card01 from '../../img/home/pexels-binyamin-mellish.png'
import card02 from '../../img/home/pexels-flenn-may.png'
import card03 from '../../img/home/pexels-renda-eko.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const About = () => {

  const AboutContainer = ({ ...props }) => (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      animateOnce={true}
      initiallyVisible={true}  
      className={!props.secondary ? "about__container" : 'about__container about__container-bgsecondary'}
    >
      <div className={props.left ? "about__content" : 'about__content order2'}>
        <h3 className="subtitle">Lorem ipsum </h3>
        <h2 className='title'>Lorem ipsum dolor sit <br /> amet con`sectetur</h2>
        <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi libero minima, consequuntur architecto, suscipit minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi libero minima, consequuntur architecto, suscipit minus.`</p>
        <div className="about__button">
          {!props.secondary ?
            <Button title='Lorem ipsin' />
            :
            <Button title='Lorem ipsin' outline={true} />
          }
        </div>
      </div>

      <div className={props.left ? "about__img" : 'about__img about__img-order1'}>
        <img src={props.src} alt={props.alt} />
      </div>

      {props.bottomImage ?
        <div className="bottomImg">
          <img src={bottomimg} alt="plants" />
        </div> : null
      }
    </AnimationOnScroll>
  )

  const AboutCard = ({ ...props }) => (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      animateOnce={true}
      initiallyVisible={true} 
      delay={props.delay} 
      className="about__card"
    >
      <div className="about__card-img">
        <img src={props.src} alt={props.alt} />
      </div>
      <h3 className="about__card-title">{props.title}</h3>
      <p className="about__card-text">{props.text}</p>
    </AnimationOnScroll>
  )

  return (
    <div className='about'>
      <AboutContainer
        buttonLight={true}
        left={true}
        src={cottonbro}
        alt="cottonbro"
        delay={100}
      />

      <AboutContainer
        buttonLight={false}
        left={false}
        src={merino}
        alt="cottonbro"
        secondary={true}
        bottomImage={true}
        delay={600}
      />


      <AboutContainer
        buttonLight={true}
        left={true}
        src={pexelswendywei}
        alt="pexelswendywei"
        delay={1000}
      />
      <div className="about__container about__container-cards">
        <AboutCard
          text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi libero minima, consequuntur architecto, suscipit minus.'
          title='Lorem ipsum'
          src={card01}
          alt=''
        />
        <AboutCard
          text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi libero minima, consequuntur architecto, suscipit minus.'
          title='Lorem ipsum'
          src={card02}
          alt=''
        />
        <AboutCard
          text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi libero minima, consequuntur architecto, suscipit minus.'
          title='Lorem ipsum'
          src={card03}
          alt=''
        />
      </div>

      <div className='about__container about__container-w100'>
        <div className="about__wrapper">
          <div className='about__content'>
            <h3 className="subtitle">Lorem ipsum </h3>
            <h2 className='title'>Lorem ipsum dolor <br />sit amet con`sectetur</h2>
            <p className="info">Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi libero minima, consequuntur architecto, suscipit minus.</p>

            <div className="about__label-container">
              <div className="about__label">
                <span className="about__label-checkicon"></span>
                <span>Lorem ipsum</span>
              </div>
              <div className="about__label">
                <span className="about__label-checkicon"></span>
                <span>Lorem ipsum</span>
              </div>
              <div className="about__label">
                <span className="about__label-checkicon"></span>
                <span>Lorem ipsum</span>
              </div>
              <div className="about__label">
                <span className="about__label-checkicon"></span>
                <span>Lorem ipsum</span>
              </div>
            </div>

            <Button title='Lorem ipsum' />
          </div>

          <div className="about__img about__img-order1 mb-40">
            <img src={pexelsmichaelburrows} alt='pexels-michael-burrows' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About