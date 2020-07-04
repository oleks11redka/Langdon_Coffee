import React, { Component } from "react";

import "./Instagram.scss";

export default class Instagram extends Component {
  render() {
    let instaLink = "https://www.instagram.com";
    return (
      <div className="instagram">
        <div className="instagram__pictures"></div>
        <div className="instagram__followingBtn">
          <a href={instaLink}></a>
          <a href={instaLink}></a>
        </div>
      </div>
    );
  }
}
