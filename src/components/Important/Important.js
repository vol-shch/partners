import React from 'react'
import './Important.css'
import imgBlock from '..//../img/jpg/passport__view.jpg'
const Important = () => {
    const list = [
        { desc:'According to labor laws in Ukraine, keeping personnel records is mandatory for all employers', id: 1},
        { desc:'Correctly prepared documentation guarantees your peace of mind and the absence of fines', id: 2},
        { desc:'Cooperation with PersonnelPartner will free up your time for business development', id: 3},
    ];
     return (
            <section className='important' id='important'>
                <div className='important__box'>
                <h2 className='important__title title'>Why is this important?</h2>
                    <ul className='important__list'>
                        {list.length ? list.map(item =><li className='important__item' key={item.id}>{item.desc}</li>): <h2>HICOGO</ h2>}
                    </ul>
                    </div>
                <div className='important__big-picture'>
                        <img className='important__big-img' src = {imgBlock} alt='Passport' />
                </div>
            </section>
     )
}

export default Important
