import React, { Component } from 'react'

import './ContactForm.scss'

export default class ConactForm extends Component {

  formSubmit = (event) => {
    event.preventDefault()

    let signUpForm = document.getElementById('contactForm__form')
    let signUpAlert = document.getElementById('contactForm__success')

    let removeSuccess = () => {
      signUpAlert.classList.remove('contactForm__success--show')
    }

    signUpAlert.classList.add('contactForm__success--show')
    setTimeout(removeSuccess, 3000)

    signUpForm.reset();
  }

  render() {
    let { formTitle, text } = this.props

    return (
      <div className='contactForm'>
        <h2 className='contactForm__title'>{formTitle}</h2>
        {text ? <p className='contactForm__text'>To place your coffee bean order, please contact your local Langdon Coffee Merchant representative who will talk you through order quantities, despatch and delivery:</p> : null}
        <form className='contactForm__form' id='contactForm__form' onSubmit={this.formSubmit}>
          <input required placeholder="Name *" className='contactForm__text-input' type="text" name="name" id="name" />
          <input required placeholder="Surname *" className='contactForm__text-input' type="text" name="surname" id="surname" />
          <input required placeholder="Company *" className='contactForm__text-input' type="text" name="company" id="company" />
          <input required placeholder="Email *" className='contactForm__text-input' type="email" name="email" id="email" />
          <select required className='contactForm__selection' name="region" id="region" defaultValue='region'>
            <option disabled value='region'>Region *</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Other">Other</option>
          </select>
          <input placeholder="Phone" className='contactForm__text-input' type="number" name="phoneNumber" id="phoneNumber" />
          <select required className='contactForm__selection' name="interest" id="interest" defaultValue='interested'>
            <option disabled value='interested'>I am interested in *</option>
            <option value="Sampling">Requesting a sample</option>
            <option value="Cupping">Requesting a cupping</option>
            <option value="Ordering beans">Ordering coffee beans</option>
            <option value="Other">Other (please specify below)</option>
          </select>
          <input placeholder="Your message" className='contactForm__text-input contactForm__text-input-massage' type="text" name="message" id="message" />
          <div className="contactForm__checkbox-block">
            <input required className='contactForm__checkbox' type="checkbox" name="policy" id="policy" />
            <label className='contactForm__policy' htmlFor="policy">I agree to <a className='contactForm__info-lcm' href="https://www.langdoncoffee.com.au/wp-content/uploads/2020/06/Website-Privacy-Policy-.pdf">privacy policy</a></label>
          </div>
          <input className='contactForm__submit' type="submit" value="submit" />
        </form>
        <div className='contactForm__success' id='contactForm__success'>You've succesfully submitted form</div>
      </div>
    )
  }
}