import React, { Component } from 'react'

import './WorkingWithLcm.scss'
import Header from '../../elements/Header/Header'

export default class WorkingWithLcm extends Component {
  render() {

    let { headers } = this.props

    return (
      <div className='workingWithLcm'>
        <Header pageHeaderName='Working with LCM' headers={headers} />
      </div>
    )
  }
}