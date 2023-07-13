import React, {useState} from 'react';
import './Header.css';
import {Link} from 'react-scroll';

const Header = () => { 
  const [active, setActive] = useState('list');
  const [activeBurger, setActiveBurger] = useState('burger');
  const navActive = () => {
    active === 'list' ? setActive('list list_active') : setActive('list');
    activeBurger === 'burger' ? setActiveBurger('burger close') : setActiveBurger('burger');
  }
  return (
    <nav className='nav nav__container'>
      <ul className={active}>
        <li className='list__item'>
          <Link className='list__link'to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
        </li>
        <li className='list__item'>
          <Link className='list__link' to="plan" spy={true} smooth={true} offset={-100} duration={500}>Tariffs</Link>
        </li>
        <li className='list__item'>
          <Link className='list__link' to="cooperation" spy={true} smooth={true} offset={0} duration={500}>Cooperation & payment </Link>
        </li>
        <li className='list__item'>
          <Link className='list__link' to="apply" spy={true} smooth={true} offset={0} duration={500}>Contacts</Link>
        </li>
      </ul>
      <button className='nav__btn'>Call us back</button>
      <div onClick={navActive} className={activeBurger}>
          <span className='burger__line1'></span>
          <span className='burger__line2'></span>
      </div>
    </nav>
  )
}

export default Header