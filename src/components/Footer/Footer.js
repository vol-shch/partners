import React from 'react'
import {Link} from 'react-scroll'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer '>
    <div className='footer__container'>
        <h2 className='footer__title title'>Contacts</h2>
        <div className='footer-adress'>
            <p className='footer-adress__item'><span>Phone\</span><span>+38 (068) 781 31 62</span></p>
            <p className='footer-adress__item'><span>E-mail\</span><span>ppart@gmail.com</span></p>
            <p className='footer-adress__item'><span>Adress\</span><span>12 Kuivska st <br/> off 64 <br/> 33000 Rivne <br/> Ukraine</span></p>
        </div>
        <ul className='footer-list'>
            <li className='footer-list__item'>
            <Link className='footer-list__link'to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
            </li>
            <li className='footer-list__item'>
            <Link className='footer-list__link' to="plan" spy={true} smooth={true} offset={-100} duration={500}>Tariffs</Link>
            </li>
            <li className='footer-list__item'>
            <Link className='footer-list__link' to="important" spy={true} smooth={true} offset={-100} duration={500}>Why is this important</Link>
            </li>
            <li className='footer-list__item'>
            <Link className='footer-list__link' to="cooperation" spy={true} smooth={true} offset={0} duration={500}>Cooperation & payment </Link>
            </li>
        </ul>
    </div>
    </footer>
  )
}

export default Footer
