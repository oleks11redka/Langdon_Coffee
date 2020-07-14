import React, { Component } from 'react'
import MainHeader from '../../elements/MainHeader/MainHeader'
import GreenBlockWithButton from '../../elements/GreenBlockWithButton/GreenBlockWithButton'
import OurOffering from '../../elements/OurOffering/OurOffering'
import Instagram from '../../elements/Instagram/Instagram'
import InTheNews from '../../elements/InTheNews/InTheNews'
import NewsLetter from '../../elements/NewsLetter/NewsLetter'

import './Home.scss'

export default class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

    render() {
      let { newsInfo, greenBlocks } = this.props
      return (
        <div className='home'>
            <MainHeader />
            <GreenBlockWithButton greenBlocks={greenBlocks} blockName='Who we are' />
            <OurOffering />
            <InTheNews newsInfo={newsInfo} />
            <NewsLetter />
            <Instagram />
        </div>
      )
    }
}