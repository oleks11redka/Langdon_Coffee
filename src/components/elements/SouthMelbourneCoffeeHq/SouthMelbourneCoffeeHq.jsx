import React, { Component } from 'react'

import './SouthMelbourneCoffeeHq.scss'
import GeneralButton from '../GeneralButton/GeneralButton'

export default class SouthMelbourneCoffeeHq extends Component {
  render() {
    return (
      <div className='southMelbourneCoffeeHq'>
        <div className='southMelbourneCoffeeHq__picture'></div>
        <div className='southMelbourneCoffeeHq__description'>
          <h2 className='southMelbourneCoffeeHq__title'>South Melbourne Coffee HQ</h2>
          <p className='southMelbourneCoffeeHq__text'>In 2020, Langdon Coffee Merchants unveiled its state-of-the-art HQ and Cupping Laboratory in leafy South Melbourne – home to some of Melbourne’s favourite roasteries and cafes.</p>
          <p className='southMelbourneCoffeeHq__text'>Transforming a neglected mid-19th century warehouse, the South Melbourne HQ features a &lt;&lt;cupping laboratory&gt;&gt;, roasting room, &lt;&lt;other highlights??&gt;&gt;.</p>  
          <p className='southMelbourneCoffeeHq__text'>Equipped with a W1 Geisen roaster, Langdon Coffee Merchant’s sensory experts can now roast small batch specialty coffees on-site, as well as conducting cupping sessions for customers a drop by for a latte, we’ve got a La Marzocca in the street facing brew-bar.</p>
          <GeneralButton link='/about-lcm' buttonName='Come Cup With Us' />
        </div>
      </div>
    )
  }
}