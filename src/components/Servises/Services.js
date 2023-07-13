import React from 'react'
import './Services.css'
const Services = () => {
  function deleteDefaultBehavior (e) {
    e.preventDefault()
  }
  return (
    <section className='services' id='services'>
        <h2 className='services__title title'>Our services</h2>
        <div className='services-grid'>
          <div className='services-grid__item'>
            <div className='services-grid__text'>
              <p className='services-grid__title'>Management of personnel<br /> documents</p>
              <a onClick={deleteDefaultBehavior} href='!#' className='services-grid__link'>More info</a>
            </div>
          </div>
          <div className='services-grid__item'>
            <div className='services-grid__text'>
              <p className='services-grid__title'>Conducting personnel audit</p>
              <a onClick={deleteDefaultBehavior} href='!#' className='services-grid__link'>More info</a>
            </div>
          </div>
          <div className='services-grid__item'>
            <div className='services-grid__text'>
              <p className='services-grid__title'> Work with risky cases</p>
              <a onClick={deleteDefaultBehavior} href='!#' className='services-grid__link'>More info</a>
            </div>
          </div>
          <div className='services-grid__item'>
            <div className='services-grid__text'>
              <p className='services-grid__title'>Consultations on HR issues & recruiting</p>
              <a onClick={deleteDefaultBehavior} href='!#' className='services-grid__link'>More info</a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Services
