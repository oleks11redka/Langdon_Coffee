import React, { Component } from 'react'

import './ContactUs.scss'

import Header from '../../elements/Header/Header'
import ConactForm from '../../elements/ConactForm/ContactForm';
import OurLocations from '../../elements/OurLocations/OurLocations';

export default class ContactUs extends Component {

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() {
    let { headers } = this.props

    return (
      <div className='contactUs'>
        <Header pageHeaderName='Contact Us' headers={headers} />
        <div className='contactUs__info'>
          <h3 className='contactUs__small-title'>How do we take our coffee? Seriously, very seriously!</h3>
          <p className='contactUs__text'>At Langdon Coffee Merchants we love to talk all things coffee – reach out to request a sampling, come in for a cupping, order your beans or simply have a chat</p>
        </div>
        <ConactForm formTitle='Contact Form' />
        <OurLocations />
      </div>
    )
  }
}