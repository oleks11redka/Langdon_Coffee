import React, { Component } from 'react'
import MainHeader from '../../elements/MainHeader/MainHeader'
import GeneralButton from '../../elements/GeneralButton/GeneralButton'

import './Home.scss'

export default class Home extends Component {
    render() {
      return (
        <div className='Home'>
            <MainHeader />
        </div>
      )
    }
}