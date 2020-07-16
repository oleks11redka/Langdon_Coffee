import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import './MapPopUp.scss'

export default class MapPopUp extends Component {

  // ReactHtmlParser - парсим текст из state(Origins) в html
  render() {
    let { countryClick, country, closePopUp, showPopUp } = this.props
    let styleWrapper = { opacity: `${showPopUp ? "1" : "0"}`, zIndex: `${showPopUp ? "20" : "-1"}` }
    let stylePop = { opacity: `${showPopUp ? "1" : "0"}`, zIndex: `${showPopUp ? "200" : "-1"}` }
    return (
      <div className="wrapper" id="wrapper-popup" style={styleWrapper} >
        <div className="map-popup" id="popup" style={stylePop} >
          <button className="popup__close" onClick={closePopUp}>&times;</button>
          <div className="popup__block">
            <div className="popup__header"></div>
            {country.map((country) => {
              if (country.countryName === countryClick) {
                let html = country.countryInfo
                return (
                  <div className="popup__info" key={country.countryName}>{ReactHtmlParser(html)}</div>
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}