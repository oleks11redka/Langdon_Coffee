import React, { Component } from "react";

import "./Header.scss";

export default class Header extends Component {

  renderHeader = (headerName, headersArray) => {
    return (
      <div className='wrapperForHeader'>
        {headersArray.map((header, i) => {
          if(header.text && header.title && header.pageTitle === headerName) {

            let requiredImage = require(`${header.headerPicture}`)

            return (
              <div className="header" key={i}>
                <div className="header__title" style={{ backgroundImage: `url(${requiredImage})` }}>
                  <h1 className="header__title-text">{header.pageTitle}</h1>
                </div>
                <div className="header__info">
                  <h2 className="header__small-title">{header.title}</h2>
                  <p className="header__text">{header.text}</p>
                </div>
              </div>
            )
          } else if(header.text && header.pageTitle === headerName) {

            let requiredImage = require(`${header.headerPicture}`)

            return (
              <div className="header" key={i}>
                <div className="header__title" style={{ backgroundImage: `url(${requiredImage})` }}>
                  <h1 className="header__title-text">{header.pageTitle}</h1>
                </div>
                <div className="header__info">
                  <p className="header__text">{header.text}</p>
                </div>
              </div>
            )
          } else if(header.pageTitle === headerName) {

            let requiredImage = require(`${header.headerPicture}`)

            return (
              <div className="header" key={i}>
                <div className="header__title" style={{ backgroundImage: `url(${requiredImage})` }}>
                  <h1 className="header__title-text">{header.pageTitle}</h1>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }

  render() {

    let { pageHeaderName, headers } = this.props

    return (
      this.renderHeader(pageHeaderName, headers)
    )
  }
}
