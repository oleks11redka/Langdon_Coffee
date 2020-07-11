import React, { Component } from "react";

import "./Instagram.scss";

export default class Instagram extends Component {
  render() {
    let instaLink = "https://www.instagram.com";
    return (
      <div className="instagram">
        <h1 className="instagram__title">Instagram</h1>
        <div className="instagram__pictures">
          <img className='instagram__picture' src={require("./instagrampictures/Rectangle 8.svg")} alt="fotos of posts" />
          <img className='instagram__picture' src={require("./instagrampictures/Rectangle 11.svg")} alt="fotos of posts" />
          <img className='instagram__picture' src={require("./instagrampictures/Rectangle 13.svg")} alt="fotos of posts" />
          <img className='instagram__picture' src={require("./instagrampictures/Rectangle 12.svg")} alt="fotos of posts" />
          <img className='instagram__picture' src={require("./instagrampictures/Rectangle 13-1.svg")} alt="fotos of posts" />
        </div>
        <div className="instagram__followingBtn">
          <a className='instagram__text-btn' href={instaLink}>Follow Us! <img className="instagram__icon" src={require("./instagrampictures/instagram.svg")} alt="instagram"/></a>
        </div>
      </div>
    );
  }
}
