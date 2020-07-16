import React, { Component } from "react";

import "./NewsLetter.scss";

export default class NewsLetter extends Component {
  newsLetterSubmit = (event) => {
    event.preventDefault()

    let signUpInput = document.getElementById('signUp__box')
    let signUpAlert = document.getElementById('signUp__success')

    let removeSuccess = () => {
      signUpAlert.classList.remove('signUp__success--show')
    }

    signUpAlert.classList.add('signUp__success--show')
    setTimeout(removeSuccess, 3000)

    signUpInput.reset();
  }


  render() {
    return (
      <div className='signUp'>
        <label className='signUp__title' htmlFor="email">SIGN UP FOR OUR NEWSLETTER</label>
        <form className="signUp__box" id='signUp__box' onSubmit={this.newsLetterSubmit}>
          <input required className='signUp__input' type="email" id="email" name="email" placeholder="Your email"/>
          <input className='signUp__button' type="submit" value="Subscribe" />
        </form>
        <div className='signUp__success' id='signUp__success'>You've succesfully signed up for our newsletter</div>
      </div>
    );
  }
}
