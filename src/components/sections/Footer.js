import React from 'react'

import { AiFillFacebook } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';

import Button from '../../customComponents/Button'

import phone from '../../img/home/undraw_my_app.svg'
const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer__banner">
        <div className="footer__form-wrapper">
          <span className="footer__list-title">Lorem ipsum </span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi libero minima, consequuntur architecto, suscipit minus.</p>
          <form action="" className='footer__form'>
            <div className="footer__input-wrapper">

              <input type="text" placeholder='Suscipit minus.' />
              <input type="text" placeholder='Consequuntur ' />
            </div>
            <div className="footer__button">
              <Button title="Lorem ipsum" white={true} />
            </div>
          </form>
        </div>
        <div className="footer__number">
          <img src={phone} alt="phone" />
          <span>Lorem ipsum </span>
          <p>01293127234</p>
        </div>
      </div>
      <div className="footer__container">
        <div className="footer__wrapper">

          <ul className="footer__list">
            <span className="footer__list-title white">Lorem ipsum </span>
            <li className="footer__link">
              <a href=""> minima</a>
            </li>
            <li className="footer__link">
              <a href="">Libero minima</a>
            </li>
            <li className="footer__link">
              <a href=""> minima</a>
            </li>
            <li className="footer__link">
              <a href="">Libero minima</a>
            </li>
          </ul>
          <ul className="footer__list">
            <span className="footer__list-title white">Lorem ipsum </span>
            <li className="footer__link">
              <a href="">Libero minima</a>
            </li>
            <li className="footer__link">
              <a href=""> minima</a>
            </li>
            <li className="footer__link">
              <a href="">Libro minima</a>
            </li>
            <li className="footer__link">
              <a href="">Libero minima</a>
            </li>
          </ul>
          <ul className="footer__list">
            <span className="footer__list-title white">Lorem ipsum </span>
            <li className="footer__link">
              <a href=""> minima</a>
            </li>
            <li className="footer__link">
              <a href="">Libero minima</a>
            </li>
            <li className="footer__link">
              <a href=""> minima</a>
            </li>
            <li className="footer__link">
              <a href="">Libero minima</a>
            </li>
          </ul>

          <div className="footer__form-wrapper transparent">
            <span className="footer__list-title white">Lorem ipsum </span>
            <p className='white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis modi libero minima, suscipit minus.</p>
            <form action="" className='footer__form'>
              <input type="text" placeholder='Consequuntur architecto' />
              <Button title="Lorem ipsum" white={true} />
            </form>
          </div>
        </div>
        <div className="footer__social">
          <a href="">
            <AiFillFacebook color='#fff' size={20} />
          </a>
          <a href="">
            <BsMessenger color='#fff' size={20} />
          </a>
          <a href="">
            <FaWhatsappSquare color='#fff' size={20} />
          </a>
        </div>
        <p className='footer__copyright'>© Lorem ipsum dolor sit amet consectetur, adipisicin.</p>
      </div>
    </div>
  )
}

export default Footer