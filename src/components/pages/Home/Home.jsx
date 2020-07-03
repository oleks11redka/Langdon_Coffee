import React, { Component } from 'react'
import MainHeader from '../../elements/MainHeader/MainHeader'
import WhoWeAre from '../../elements/WhoWeAre/WhoWeAre'
import OurOffering from '../../elements/OurOffering/OurOffering'
import Instagram from '../../elements/Instagram/Instagram'

import './Home.scss'
import InTheNews from '../../elements/InTheNews/InTheNews'

export default class Home extends Component {
    render() {
      return (
        <div className='home'>
            <MainHeader />
            <WhoWeAre />
            <OurOffering />
            <InTheNews />
            <Instagram />
        </div>
      )
    }
}