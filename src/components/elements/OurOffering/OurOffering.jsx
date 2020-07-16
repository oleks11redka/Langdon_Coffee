import React, { Component } from 'react'

import './OurOffering.scss'
import GeneralButton from '../GeneralButton/GeneralButton'

export default class OurOffering extends Component {
    render() {
      return (
        <div className='ourOffering'>
            <h2 className='ourOffering__title'>Our Offering</h2>
            <p className='ourOffering__text'>Langdon Coffee Merchants source and land fully traceable, high-quality green beans from renowned and emerging origins into our Melbourne, Auckland and London warehouses year-round. In addition to a robust quality programme, we offer third party logistics solutions, including climate-controlled storage, supply chain management and commercial blending</p>
            <GeneralButton urlLink='https://www.langdoncoffee.com.au/wp-content/uploads/2020/07/JULYv2-2020-Global-Offers-List-110520.pdf' buttonName='What’s on offer' />
        </div>
      )
    }
}