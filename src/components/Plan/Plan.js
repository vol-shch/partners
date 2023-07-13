import React from 'react'
import './Plan.css'
const Plan = () => {
    const ulBlue = [
        {desc: 'Creation of personnel orders',id:1},
        {desc: 'Filing of employee applications',id:2},
        {desc: 'Filling in the work books of employees, keeping a journal of accounting of work books',id:3},
        {desc: 'Keeping records of working hours',id:4},
        {desc: 'Maintaining a staff schedule',id:5},
    ]
    const ulGray = [
        {desc: 'Drawing up a vacation schedule',id:1},
        {desc: 'Development of internal labor regulations',id:2},
        {desc: 'Registration of business trips',id:3},
        {desc: 'Keeping military records with submission of reports and all information letters',id:4},
    ]
    function deleteDefaultBehavior (e) {
        e.preventDefault()
      }
  return (
    <section className='plan' id='plan'>
      <h2 className='plan__title title'>Pick a plan</h2>
      <div className='card-prices'>
        <div className='card-prices__text-box'>
        <div className='card-prices__header'>
                    <h3 className='card-prices__title'>Standart</h3>
                    <span className='card-prices__price'>from 20$</span>
            </div>
            <div className='card-prices__header'>
                    <h3 className='card-prices__title'>Business</h3>
                    <span className='card-prices__price'>from 40$</span>
            </div>
        </div>
        <div className='card-prices__card'>
            <div className='card-prices__list-block'>
                <ul className='card-prices__list'>
                    {ulBlue.map(item =><li className='card-prices__item' key={item.id}>{item.desc}</li>)}
                </ul>
            </div>
            <div className='card-prices__list-block'>
                <ul className='card-prices__list card-prices__list_gray'>
                    {ulGray.map(item =><li className='card-prices__item card-prices__item_gray' key={item.id}>{item.desc}</li>)}
                </ul>
                <a onClick={deleteDefaultBehavior} href='!#' className='card-prices__btn'>Get a free consultation</a>
            </div>
            </div>
      </div>
    </section>
  )
}

export default Plan
