import React from 'react'
import './Cooperation.css'

const Cooperation = () => {
  return (
    <section className='cooperation' id='cooperation'>
      <h2 className='cooperation__title title'>Сooperation & payment</h2>
      <ul className='steps'>
            <li className='steps__item'>
                <span className='steps__number'>1.</span>
                <p className='steps__desc'>Signing the contract</p>
            </li>
            <li className='steps__item'>
                <span className='steps__number steps__number_border-1'>2.</span>
                <p className='steps__desc'>Service package subscription</p>
            </li>
            <li className='steps__item'>
                <span className='steps__number'>3.</span>
                <p className='steps__desc'>Provision of services</p>
            </li>
            <li className='steps__item steps__item_border'>
                <span className='steps__number'>4.</span>
                <p className='steps__desc'>Payment</p>
            </li>
      </ul>
    </section>
  )
}

export default Cooperation
