import React, { Component } from 'react'

import './WorkingWithLcm.scss'
import Header from '../../elements/Header/Header'
import PurchasingCuppingSampling from '../../elements/PurchasingCuppingSampling/PurchasingCuppingSampling';
import GreenBlockWithButton from '../../elements/GreenBlockWithButton/GreenBlockWithButton';
import ConactForm from '../../elements/ConactForm/ContactForm';
import PricingDeliveryQuality from '../../elements/PricingDeliveryQuality/PricingDeliveryQuality';
import FAQ from '../../elements/FAQ/FAQ';

export default class WorkingWithLcm extends Component {

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() {

    let { headers, greenBlocks } = this.props

    return (
      <div className='workingWithLcm'>
        <Header pageHeaderName='Working with LCM' headers={headers} />
        <PurchasingCuppingSampling />
        <GreenBlockWithButton greenBlocks={greenBlocks} blockName='' />
        <ConactForm formTitle='Ordering' text />
        <PricingDeliveryQuality />
        <FAQ />
      </div>
    )
  }
}