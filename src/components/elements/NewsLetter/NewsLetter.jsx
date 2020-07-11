import React, { Component } from "react";

import "./NewsLetter.scss";

export default class NewsLetter extends Component {
  render() {
    return (
        <form>
          <label htmlFor="email">SIGN UP FOR OUR NEWSLETTER</label>
          <input type="email" id="email" name="email" placeholder="Your email"></input>
          <input type="submit" value="Subscribe" />
        </form>
    );
  }
}
