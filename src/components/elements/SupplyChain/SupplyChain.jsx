import React, { Component } from 'react'

import './SupplyChain.scss'

export default class SupplyChain extends Component {
    render() {
      return (
        <div className='supplyChain'>
            <h2 className='supplyChain__title'>Supply chain &amp; logistics solutions</h2>
            <p className='supplyChain__text'>In addition to our coffee offering, we can support portions or all of your supply chain with our third-party logistics solution. We offer climate - controlled storage at our headquarters in Melbourne and have a network of AQIS approved warehouses in Brisbane, Perth and Auckland</p>
            <div className='supplyChain__picture'></div>
            <h4 className='supplyChain__list-title'>LCM caters to the full spectrum of supply chain services including:</h4>
            <ul className='supplyChain__list'>
              <li className='supplyChain__list-item'>Customs clearance</li>
              <li className='supplyChain__list-item'>Packing and unpacking</li>
              <li className='supplyChain__list-item'>Storage and inventory management</li>
              <li className='supplyChain__list-item'>Blending and tailor-made packaging and consolidation services</li>
              <li className='supplyChain__list-item'>Customer service support and inventory reporting</li>
              <li className='supplyChain__list-item'>Domestic and international freight and distribution</li>
            </ul>
        </div>
      )
    }
}