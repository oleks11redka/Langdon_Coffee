import React, { Component } from 'react'

import './ContactForm.scss'

export default class ConactForm extends Component {

  render() {
    let { formTitle, text } = this.props

    return (
      <div className='contactForm'>
        <h2 className='contactForm__title'>{formTitle}</h2>
        {text ? <p className='contactForm__text'>To place your coffee bean order, please contact your local Langdon Coffee Merchant representative who will talk you through order quantities, despatch and delivery:</p> : null}
        <form className='contactForm__form' action="">
          <input required placeholder="Name *" className='contactForm__text-input' type="text" name="name" id="name"/>
          <input required placeholder="Surname *" className='contactForm__text-input' type="text" name="surname" id="surname"/>
          <input required placeholder="Company *" className='contactForm__text-input' type="text" name="company" id="company"/>
          <input required placeholder="Email *" className='contactForm__text-input' type="email" name="email" id="email"/>
          <select required className='contactForm__selection' name="region" id="region">
            <option selected disabled value>Region *</option> 
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Other">Other</option>
          </select>
          <input placeholder="Phone" className='contactForm__' type="number" name="phoneNumber" id="phoneNumber"/>
          <select required className='contactForm__selection' name="interest" id="interest">
            <option selected disabled value>I am interested in *</option> 
            <option value="Sampling">Requesting a sample</option>
            <option value="Cupping">Requesting a cupping</option>
            <option value="Ordering beans">Ordering coffee beans</option>
            <option value="Other">Other (please specify below)</option>
          </select>
          <input placeholder="Your message" className='contactForm__text-input' type="text" name="message" id="message"/>
          <label className='contactForm__policy' htmlFor="policy">I agree to <a href="https://www.langdoncoffee.com.au/wp-content/uploads/2020/06/Website-Privacy-Policy-.pdf">privacy policy</a></label>
          <input required className='contactForm__checkbox' type="checkbox" name="policy" id="policy"/>
          <input className='contactForm__submit' type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}