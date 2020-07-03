import React, { Component } from 'react'
import GeneralButton from '../../elements/GeneralButton/GeneralButton'

import './WorkInProgress.scss'

export default class WorkInProgress extends Component {
    render() {
      return (
        <div className='workInProgress'>
            <h2 className='workInProgress'>Our Team is Still working on this page, we will keep you updated</h2>
            <GeneralButton link='/' buttonName='Return Back' />
        </div>
      )
    }
}