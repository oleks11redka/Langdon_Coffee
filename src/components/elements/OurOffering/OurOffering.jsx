import React, { Component } from 'react'

import './OurOffering.scss'
import GeneralButton from '../GeneralButton/GeneralButton'

export default class OurOffering extends Component {
    render() {
      return (
        <div className='OurOffering'>
            <h2 className='OurOffering__title'>Our Offering</h2>
            <p className='OurOffering__text'>Langdon Coffee Merchants source and land fully traceable, high-quality green beans from renowned and emerging origins into our Melbourne, Auckland and London warehouses year-round. In addition to a robust quality programme, we offer third party logistics solutions, including climate-controlled storage, supply chain management and commercial blending</p>
            <GeneralButton link='/work-in-progress' buttonName='What’s on offer' />
        </div>
      )
    }
}