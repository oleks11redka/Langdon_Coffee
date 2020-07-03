import React, { Component } from 'react'
import MainHeader from '../../elements/MainHeader/MainHeader'
import WhoWeAre from '../../elements/WhoWeAre/WhoWeAre'

import './Home.scss'

export default class Home extends Component {
    render() {
      return (
        <div className='Home'>
            <MainHeader />
            <WhoWeAre />
        </div>
      )
    }
}