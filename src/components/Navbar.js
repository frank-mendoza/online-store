import React, { useEffect, useState } from 'react'

import { MdOutlineMenuOpen } from 'react-icons/md';

import Button from '../customComponents/Button'

import logo from '../img/icons/platinos-logo.png'

export const Navbar = ({ openSidebar}) => {

  const [colorChange, setColorchange] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {

      if(window.scrollY >= 80){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }
      
    })
  }, [])

  return (
    <nav className='nav' style={{backgroundColor: colorChange ? '#fff' : 'transparent'}} >
      <div className="nav__wrapper">

        <div className="nav__container">
          <div className="nav__logo">
            <img src={logo} alt="platinos logo" />
            <p className={colorChange ? 'nav__logo-text' : 'nav__logo-text white' }>LANTINOS</p>
          </div>
        </div>

        <ul className={!colorChange ?  "nav__link-container" : 'nav__link-container dark'}>
          <li className="nav__list">
            <a href="" className="nav__link">Home</a>
          </li>
          <li className="nav__list">
            <a href="" className="nav__link">Shop</a>
          </li>
          <li className="nav__list">
            <a href="" className="nav__link">Blog</a>
          </li>
          <li className="nav__list">
            <a href="" className="nav__link">Testimonials</a>
          </li>
          <div className="nav__button">
            <Button title='Contact Us' white={!colorChange ? true : false}/>
          </div>
        </ul>

        <div className="nav__toggle" onClick={() => openSidebar()}>
          <MdOutlineMenuOpen size={30} color={!colorChange ? '#FFFEEF' : '#272727'}/>
        </div>
      </div>
    </nav>
  )
}
