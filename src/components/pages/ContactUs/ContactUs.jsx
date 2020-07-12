import React, { Component } from 'react'

import './ContactUs.scss'

import Header from '../../elements/Header/Header'

export default class ContactUs extends Component {
  render() {

    let { headers } = this.props

    return (
      <div className='aboutLcm'>
        <Header pageHeaderName='Contact Us' headers={headers} />
        <h1 className='s'>Hello coocoo</h1>
      </div>
    )
  }
}