import React, { Component } from 'react'
import './MapPopUp.scss'

export default class MapPopUp extends Component {

  render() {
    let { countryClick, country } = this.props
    return (
      <div className="map-popup ">
        {country.map((country) => {
          if (country.countryName === countryClick)
            return (
              <div key={country.countryName}>{country.countryInfo}</div>
            )
        })}
      </div>
    )
  }
}