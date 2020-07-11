import React, { Component } from 'react'
import './OurCredentials.scss'

export default class OurCredentials extends Component {
  render() {
    return (
      <div className="ourCredentials">
        <h1 className="ourCredentials__title">Our Credentials</h1>
        <div className="ourCredentials__logos">
          <img className='oruCredentials__logo' src={require("./OurCredentialsPictures/blue-ACO-logo-1.svg")} alt="logo ACO"/>
          <img className='oruCredentials__logo' src={require("./OurCredentialsPictures/logo.svg")} alt="logo specialety"/>
          <img className='oruCredentials__logo' src={require("./OurCredentialsPictures/Fairtrade_Logo.svg")} alt="logo fairtrade"/>
          <img className='oruCredentials__logo' src={require("./OurCredentialsPictures/acta.svg")} alt="logo acta"/>
          <img className='oruCredentials__logo' src={require("./OurCredentialsPictures/seal_green_web.svg")} alt="logo frog"/>
        </div>
      </div>
    )
  }
}