import React from 'react'
import './Form.css';
const Form = () => {
  function deleteDefaultBehavior (e) {
    e.preventDefault()
  }
  return (
    <section className='apply' id='apply'>
      <div className='apply-block'>
        <h2 className='apply-block__title title'>Do you still have a questions?</h2>
        <div className='apply-form'>
            <p className='apply-form__text'>Fill out the form and we will contact you as soon as possible</p>
            <form className='form'>
              <input className ='form__input' placeholder='Your name' required type='text' />
              <input className ='form__input' placeholder='Your e-mail' required type='email' />
              <input className ='form__input' placeholder='Your phone number' required type='tel' />
              <input className ='form__input' placeholder='Message' type='text' />
              <button onClick={deleteDefaultBehavior} className='form__btn' type='submit'>Send</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Form
