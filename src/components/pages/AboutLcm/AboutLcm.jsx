import React, { Component } from 'react'
import './AboutLcm.scss';

import Header from '../../elements/Header/Header';
import FromBeanToBrew from '../../elements/FromBeanToBrew/FromBeanToBrew';
import OurGlobalTeam from '../../elements/OurGlobalTeam/OurGlobalTeam';
import OurHeritageService from '../../elements/OurHeritageService/OurHeritageService';
import SupplyChain from '../../elements/SupplyChain/SupplyChain';
import GreenBlockWithButton from '../../elements/GreenBlockWithButton/GreenBlockWithButton';

export default class AboutLcm extends Component {

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() {

    let { headers, greenBlocks } = this.props

    return (
      <div className='aboutLcm'>
        <Header pageHeaderName='About Us' headers={headers} />
        <FromBeanToBrew />
        <OurGlobalTeam />
        <OurHeritageService />
        <GreenBlockWithButton greenBlocks={greenBlocks} blockName='South Melbourne Coffee HQ' />
        <SupplyChain />
      </div>
    )
  }
}