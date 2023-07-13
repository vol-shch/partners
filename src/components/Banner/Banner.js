import React from 'react'
import heroImg from '../../img/png/hero__elipse.png'
import './Banner.css'

const Banner = () => {
  function deleteDefaultBehavior (e) {
    e.preventDefault()
  }
  return (
    <section className='banner'>
      <div className='text-block'>
        <h1 className='text-block__title'>personnel partner <br />
            <span className='text-block__italic'> for your bussiness</span>
        </h1>
        <p className='text-block__desc'>Support of personnel accounting and reporting of public & private companies</p>
        <a onClick={deleteDefaultBehavior} className='btn' href='!#'>Get a free consultation</a>
      </div>
      <div className='hero-img'>
        <img className='hero-img__setting' src={heroImg} alt ='Hero'/>
      </div>
    </section>
  )
}

export default Banner
