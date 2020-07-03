import React, { Component } from 'react'
import MainHeader from '../../elements/MainHeader/MainHeader'
import WhoWeAre from '../../elements/WhoWeAre/WhoWeAre'
import OurOffering from '../../elements/OurOffering/OurOffering'

import './Home.scss'

export default class Home extends Component {
    render() {
      return (
        <div className='Home'>
            <MainHeader />
            <WhoWeAre />
            <OurOffering />
        </div>
      )
    }
}