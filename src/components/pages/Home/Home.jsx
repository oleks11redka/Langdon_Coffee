import React, { Component } from 'react'
import MainHeader from '../../elements/MainHeader/MainHeader'
import WhoWeAre from '../../elements/WhoWeAre/WhoWeAre'
import OurOffering from '../../elements/OurOffering/OurOffering'
import Instagram from '../../elements/Instagram/Instagram'
import InTheNews from '../../elements/InTheNews/InTheNews'

import './Home.scss'

export default class Home extends Component {
    render() {
      let { newsInfo } = this.props
      return (
        <div className='home'>
            <MainHeader />
            <WhoWeAre />
            <OurOffering />
            <InTheNews newsInfo={newsInfo} />
            <Instagram />
        </div>
      )
    }
}