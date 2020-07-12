import React, { Component } from 'react'

import './WorkingWithLcm.scss'
import Header from '../../elements/Header/Header'

export default class WorkingWithLcm extends Component {
  render() {

    let { headers } = this.props

    return (
      <div className='aboutLcm'>
        <Header pageHeaderName='Working with LCM' headers={headers} />
        <h1 className='s'>Hello coocoo</h1>
      </div>
    )
  }
}