import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__picture"></div>
        <div className="footer__withElem">
          <div className="footer__leftSide">
            <div className="footer__pictureTitle">
              <img
                src={require("./FooterPictures/Footer.png")}
                alt="Main header title"
                className="footer__title"
              />
            </div>
            <div className="footer__navigation">
              <ul>
                <li>
                  <Link to="/work-in-progress">Privacy policy</Link>
                </li>
                <li>
                  <Link to="/work-in-progress">
                    Sales terms &amp; conditions
                  </Link>
                </li>
                <li>
                  <Link to="/work-in-progress">contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__rightSide">
            <div className="footer__logos">{/* Добавлю чуть позже */}</div>
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
