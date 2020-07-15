import React, { Component } from 'react'

import './PricingDeliveryQuality.scss'
import GeneralButton from '../GeneralButton/GeneralButton'

export default class PricingDeliveryQuality extends Component {

  render() {

    return (
      <div className='pdq'>
        <div className='pdq__block'>
          <div className='pdq__picture'></div>
          <h2 className='pdq__title'>Pricing and Delivery</h2>
          <p className='pdq__text'>Pricing on all stock in our Offer List is ex-warehouse, i.e. Langdon Coffee Merchants cover all sourcing, logistics, export and import duties, insurance, quality control and storage at our warehouses in Melbourne, Brisbane, Perth, Auckland, and London.</p>
          <p className='pdq__text'>Local delivery fees to your nominated facility are charged at a flat price per pallet, or we can arrange a specific quote to your location. Storage, custom packing and blending can also be arranged through Langdon Coffee Merchants</p>
          <div className='pdq__buttons'>
            <GeneralButton buttonName='contact us for more info' link='/contact-us' />
            <GeneralButton buttonName='review our terms of sale' urlLink='https://www.langdoncoffee.com.au/wp-content/uploads/2017/04/LCM-Standard-Terms-and-Conditions-of-Sale-v2016-1.pdf' />
          </div>
        </div>
        <div className='pdq__block'>
          <h2 className='pdq__title'>Our Quality Guarantee</h2>
          <p className='pdq__text'>Great coffee = happy customers and our goal is not only to meet your expectations, but delight you with the beans you buy from Langdon Coffee Merchants.</p>
          <p className='pdq__text'>It’s why we take such a disciplined approach to quality: from working with producers at origin, to a robust cupping program at our Langdon Coffee labs, we stand behind the quality of our beans and if for some reasons, you’re not satisfied, please reach out to our Customer Service team immediately.</p>
        </div>
      </div>
    )
  }
}