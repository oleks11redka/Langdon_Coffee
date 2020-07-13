import React, { Component } from 'react'

import './OurHeritageService.scss'

export default class OurHeritageService extends Component {
    render() {
      return (
        <div className='ourHeritageService'>
            <div className='ourHeritageService__heritage'>
              <h2 className='ourHeritageService__title'>Our Heritage</h2>
              <h4 className='ourHeritageService__small-title'>“We’ve been sourcing the world’s finest ingredients for over 165 years. Now it’s coffee’s turn.”</h4>
              <p className='ourHeritageService__text'>
                Founded 5 years ago, Langdon Coffee Merchants’ heritage stretches all the way back to the Victorian goldfields when Henry Joseph Langdon arrived in Melbourne in 1852 to supply prospectors with food and other vital supplies, including coffee.
                <br/>This merchant heritage, combined with an entrepreneurial spirit, led us to start Langdon Coffee Merchants in 2015.  As kids wil l do, we’ve flown the coop and moved into our own dedicated Cupping Lab and Coffee HQ in South Melbourne, but we still benefit from the long-term relationships with producers and exporters formed by Langdon Ingredients, and access to world-class warehousing and logistics operations.
              </p>
            </div>
            <div className='ourHeritageService__service'>
              <h2 className='ourHeritageService__title'>Our Service</h2>
              <h3 className='ourHeritageService__medium-title'>Cupping for Quality</h3>
              <p className='ourHeritageService__text'>Quality is at the core of our business and it’s why we take such a disciplined, scientific approach to testing: from working with producers at origin, to a robust cupping program at our own coffee labs, we put our green beans through their paces to ensure they meet expectations and delight our customers. We use the standards set by the Speciality Coffee Association, a trusted, international reference for the industry, to cup ‘blind’ (i.e. without knowing what the coffee is, or where the beans come from) to avoid any preconceptions and fairly score the coffee. Our beans are cupped directly at origin whenever possible, when they arrive into warehouse, and then again every six months to ensure their quality holds up.</p>
            </div>
        </div>
      )
    }
}