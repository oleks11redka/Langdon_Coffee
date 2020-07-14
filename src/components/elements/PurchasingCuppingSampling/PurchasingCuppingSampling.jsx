import React, { Component } from 'react'

import './PurchasingCuppingSampling.scss'

export default class PurchasingCuppingSampling extends Component {
    render() {
      return (
        <div className='purchasingCuppingSampling'>
            <div className='purchasingCuppingSampling__purchasing'>
              <h2 className='purchasingCuppingSampling__title'>Purchasing</h2>
              <h4 className='purchasingCuppingSampling__small-title'>At Langdon Coffee Merchants, we’re proud to be coffee geeks</h4>
              <p className='purchasingCuppingSampling__text'>
                With XXX years of combined industry experience, and many a competitive brewers and baristas in the crew, there’s nothing we love more than to geek out about coffee, over a coffee!
                <br/>Whether you’re an experienced roaster, aspiring café owner, or just a keen latte sipper, we’re keen to advise on bean selection, quality assurance, purchase planning and brewing methods. Our goal is to build long-term relationships, providing guidance and flexibility in our models and range, to ensure you’re successful – and that this flows back to our producer partners at origin.
                <br/>Depending on the urgency of your coffee need, seasonality and volume/price requirements, customers can opt to buy green beans from Langdon Coffee Merchants in two ways:
              </p>
              <ul className='purchasingCuppingSampling__list'>
                <li className='purchasingCuppingSampling__list-item'><span className='purchasingCuppingSampling__list-item-title'>Spot Buying :</span>These beans are bought based on what represents the best, most interesting beans coming out of origin, what we love drinking and what we think our customers will love roasting andserving. Spot purchasing is ideal for smaller roasters, or those who need greater flexibility in their range and volumes, or to cover ad hoc shortages.
                  <br/>Pricing on spot buy lots will generally be a little higher than ‘pre-committed’ beans, as the producer and LCM carry greater financial risk. Like all our green beans, spot buys are rigorously cupped and assessed by LCM before they leave origin, and on arrival into our facilities, to ensure expected standards are met. Spot purchase beans are listed on our Offer Sheet and can be purchased before landing, or once they arrive at warehouse.
                </li>
                <li className='purchasingCuppingSampling__list-item'><span className='purchasingCuppingSampling__list-item-title'>Forward Purchasing :</span>Under this model, the customer briefs us on the cup profile, price range, volume and can even request coffee beans from a specific producer. We then source the beans to suit. This model is best suited to those who need quality and price consistency, and will often suit medium to larger roasters who have good medium – long term forecasting. Where a customer is looking for exclusivity, forward buying is the best means for achieving this.
                  <br/>LCM works very closely with forward buying customers to ensure we understand your requirements and have a detailed brief before we purchase on your behalf. Making a long-term commitment to buy coffee from the same producer annually is also the most impactful way of building mutually beneficial relationship with producers at origin.
                </li>
              </ul>
            </div>
            <div className='purchasingCuppingSampling__cupping'>
              <h2 className='purchasingCuppingSampling__title'>Cupping and Sampling</h2>
              <p className='purchasingCuppingSampling__text'>Each Langdon Coffee Merchant region (Australia, New Zealand, United Kingdom) is equipped with a dedicated cupping room where we invite customers in to cup taste our range.</p>
            </div>
        </div>
      )
    }
}