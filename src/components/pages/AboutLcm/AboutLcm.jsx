import React, { Component } from 'react'
import './AboutLcm.scss';

import Header from '../../elements/Header/Header';

export default class AboutLcm extends Component {

  render() {

    let { headers } = this.props

    return (
      <div className='aboutLcm'>
        <Header pageHeaderName='About Us' headers={headers} />
        <h1 className='s'>Hello coocoo</h1>
      </div>
    )
  }
}