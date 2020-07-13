import React, { Component } from 'react'
import './AboutLcm.scss';

import Header from '../../elements/Header/Header';
import FromBeanToBrew from '../../elements/FromBeanToBrew/FromBeanToBrew';
import OurGlobalTeam from '../../elements/OurGlobalTeam/OurGlobalTeam';
import OurHeritageService from '../../elements/OurHeritageService/OurHeritageService';
import SouthMelbourneCoffeeHq from '../../elements/SouthMelbourneCoffeeHq/SouthMelbourneCoffeeHq';
import SupplyChain from '../../elements/SupplyChain/SupplyChain';

export default class AboutLcm extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    let { headers } = this.props

    return (
      <div className='aboutLcm'>
        <Header pageHeaderName='About Us' headers={headers} />
        <FromBeanToBrew />
        <OurGlobalTeam />
        <OurHeritageService />
        <SouthMelbourneCoffeeHq />
        <SupplyChain />
      </div>
    )
  }
}