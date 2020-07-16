import React, { Component } from "react";

import "./NewsLetter.scss";

export default class NewsLetter extends Component {
  state = {
    submitted: false
  }

  changeSubmit = () => {
    this.setState({ submitted: true })
  }

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
        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}

          onLoad={this.state.submitted ? this.newsLetterSubmit : null} ></iframe>

        <form className="signUp__box" id='signUp__box' onSubmit={this.changeSubmit} method="post" target="hidden_iframe" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScAK9jia5B8Y5_l-44x-Bp6BcwvZfIJFr7W4-oem75HudMcaQ/formResponse">


          <input required className='signUp__input' type="email" id="email" name="entry.1972909138" placeholder="Your email" />
          <input className='signUp__button' type="submit" value="Subscribe" />
        </form>
        <div className='signUp__success' id='signUp__success'>You've succesfully signed up for our newsletter</div>
      </div>
    );
  }
}
