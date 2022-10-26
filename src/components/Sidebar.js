import React from 'react'
import { Link } from 'react-router-dom';

import { HiHome } from 'react-icons/hi';
import { AiFillShopping, AiFillContacts } from 'react-icons/ai';
import { FaMicroblog } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';

const Sidebar = ({ toggle, openSidebar }) => {
  return (
    <div
      className='sidebar'
      style={{ left: toggle ? '-100%' : '0' }}
    >
      <div className="sidebar__menu">
        <IoMdCloseCircle
          size={20}
          color='#636363'
          className='close'
          onClick={() => openSidebar()}
        />
        <ul className="sidebar__list">
          <Link to='/online-store' className='sidebar__link' onClick={() => openSidebar()}>
            <HiHome size={30} color='#00D254' />
            Home
          </Link>
          <Link to='/online-store' className='sidebar__link' onClick={() => openSidebar()}>
            <AiFillShopping size={30} color='#00D254' />
            Shop
          </Link>
          <Link className='sidebar__link' onClick={() => openSidebar()}>
            <FaMicroblog size={30} color='#00D254' />
            Blog
          </Link>
          <Link to='/online-store' className='sidebar__link' onClick={() => openSidebar()}>
            <BsFillPeopleFill size={30} color='#00D254' />
            Testimonials
          </Link>
          <Link to='/online-store' className='sidebar__link' onClick={() => openSidebar()}>
            <AiFillContacts size={30} color='#00D254' />
            Contact
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar