import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* big picture for top */}
        <div className="footer__pictureTitle">
          {/* <img
            src={require("./FooterPictures/Footer.png")}
            alt="Main header title"
            className="footer__title"
          /> */}
        </div>
        {/* footer content */}
        <div className="footer__withElem footer__container">
          {/* letf part of footer */}
          <div className="footer__leftSide">

            <div className="footer__navigation">
              <div className="footer__img-box">
                <img src={require("./FooterPictures/big.svg")} alt="big langdon" className="footer__picture" />
              </div>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a className="footer__link" href="https://www.langdoncoffee.com.au/wp-content/uploads/2020/06/Website-Privacy-Policy-.pdf">Privacy policy</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="https://www.langdoncoffee.com.au/wp-content/uploads/2017/04/LCM-Standard-Terms-and-Conditions-of-Sale-v2016-1.pdf">Sales terms &amp; conditions</a>
                </li>
                <li className="footer__list-item">
                  <Link to="/contact-us" className="footer__link">contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* right part of footer */}
          <div className="footer__rightSide">
            <div className="footer__logos">
              <div className="footer__logos--col">
                <img src={require("./FooterPictures/first.svg")} alt="logo langdon" className="footer__logos--langdon" />
                <img src={require("./FooterPictures/second.svg")} alt="logo bakery" className="footer__logos--bakery" />
              </div>
              <div className="footer__logos--col">
                <img src={require("./FooterPictures/third.svg")} alt="logo natural" className="footer__logos--natural" />
                <img src={require("./FooterPictures/fourth.svg")} alt="logo henry" className="footer__logos--henry" />
              </div>


            </div>
            <div className="footer__copyright">
              <p className="footer__copyrightText">
                COPYRIGHT © 2017 LANGDON COFFEE MERCHANTS
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
