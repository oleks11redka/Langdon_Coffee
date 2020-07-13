import React, { Component } from 'react'

import './WorkingWithLcm.scss'
import Header from '../../elements/Header/Header'

export default class WorkingWithLcm extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    let { headers } = this.props

    return (
      <div className='workingWithLcm'>
        <Header pageHeaderName='Working with LCM' headers={headers} />
      </div>
    )
  }
}