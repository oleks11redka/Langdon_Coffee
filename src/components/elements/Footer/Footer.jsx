import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* big picture for top */}
        <div className="footer__pictureTitle">
          <img
            src={require("./FooterPictures/Footer.png")}
            alt="Main header title"
            className="footer__title"
          />
        </div>
        {/* footer content */}
        <div className="footer__withElem footer__container">
          {/* letf part of footer */}
          <div className="footer__leftSide">

            <div className="footer__navigation">
              <div className="footer__img-box">
                <img src={require("./FooterPictures/footer-left-text.png")} alt="big langdon" className="footer__picture" />
              </div>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link to="/work-in-progress" className="footer__link">Privacy policy</Link>
                </li>
                <li className="footer__list-item">
                  <Link to="/work-in-progress" className="footer__link">
                    Sales terms &amp; conditions
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link to="/work-in-progress" className="footer__link">contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* right part of footer */}
          <div className="footer__rightSide">
            <div className="footer__logos">
              <img src={require("./FooterPictures/langdon ingredients.png")} alt="logo langdon" className="footer__logos--langdon" />
              <img src={require("./FooterPictures/bakery-craft.png")} alt="logo bakery" className="footer__logos--bakery" />
              <img src={require("./FooterPictures/natural.png")} alt="logo natural" className="footer__logos--natural" />
              <img src={require("./FooterPictures/HenryLangdonV2-01 1.png")} alt="logo henry" className="footer__logos--henry" />
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
