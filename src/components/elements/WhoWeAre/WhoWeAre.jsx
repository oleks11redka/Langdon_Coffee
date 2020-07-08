import React, { Component } from 'react'

import './WhoWeAre.scss'
import GeneralButton from '../GeneralButton/GeneralButton'

export default class WhoWeAre extends Component {
  render() {
    return (
      <div className='whoWeAre'>
        <div className='whoWeAre__picture'></div>
        <div className='whoWeAre__description'>
          <h2 className='whoWeAre__title'>Who we are</h2>
          <p className='whoWeAre__text'>A small but closely connected global team of dedicated, knowledgeable coffee enthusiasts, 
          Langdon Coffee Merchant’s goal is to build sustainable, meaningful relationships with our producers and customers alike.</p>
          
         <p className='whoWeAre__text'>We know our coffee beans inside
            and out, and we only sell what we like to drink. In most cases, we are in direct contact with the producer throughout the
             growing and harvesting season and cup at origin as often as we can.</p>  
             
             
            <p className='whoWeAre__text'>When you choose to buy green coffee from Langdon Coffee Merchants, 
             you can trust that your beans have been sourced sustainably, rigorously quality tested and their producers paid fairly</p>
          <GeneralButton link='/about-lcm' buttonName='More About Us' />
        </div>
      </div>
    )
  }
}