import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import './MapPopUp.scss'

export default class MapPopUp extends Component {

  render() {
    let { countryClick, country } = this.props
    return (
      <div className="map-popup ">
        {country.map((country) => {
          if (country.countryName === countryClick) {
            let html = country.countryInfo
            console.log(html)
            return (
              <div key={country.countryName}>{ReactHtmlParser(html)}</div>
            )
          }
        })}
      </div>
    )
  }
}