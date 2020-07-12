import React, { Component } from "react";

import "./NewsLetter.scss";

export default class NewsLetter extends Component {
  render() {
    return (
      <form className='signUp'>
        <label className='signUp__title' htmlFor="email">SIGN UP FOR OUR NEWSLETTER</label>
        <div className="signUp__box">
          <input className='signUp__input' type="email" id="email" name="email" placeholder="Your email"></input>
          <input className='signUp__button' type="submit" value="Subscribe" />
        </div>
      </form>
    );
  }
}
