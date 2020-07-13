import React, { Component } from 'react'

import './ContactUs.scss'

import Header from '../../elements/Header/Header'

export default class ContactUs extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    let { headers } = this.props

    return (
      <div className='contactUs'>
        <Header pageHeaderName='Contact Us' headers={headers} />
      </div>
    )
  }
}