import React, { Component } from 'react'

import './WorkingWithLcm.scss'
import Header from '../../elements/Header/Header'
import PurchasingCuppingSampling from '../../elements/PurchasingCuppingSampling/PurchasingCuppingSampling';
import GreenBlockWithButton from '../../elements/GreenBlockWithButton/GreenBlockWithButton';
import ConactForm from '../../elements/ConactForm/ContactForm';

export default class WorkingWithLcm extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    let { headers, greenBlocks } = this.props

    return (
      <div className='workingWithLcm'>
        <Header pageHeaderName='Working with LCM' headers={headers} />
        <PurchasingCuppingSampling />
        <GreenBlockWithButton greenBlocks={greenBlocks} blockName='' />
        <ConactForm formTitle='Contact Form' text />
      </div>
    )
  }
}