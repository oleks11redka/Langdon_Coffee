import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'

import './FAQ.scss'
import FAQItem from './FAQItem/FAQItem'

export default class FAQ extends Component {

  state = {
    FAQ: [
      {faqTitle: 'What countries do you supply coffee to?', faqText: 'We always have some coffees available for spot purchases, but not a huge amount. We prefer to bring regular shipments of fresh crop coffee into the country. The advantage of this system is that there are no holding costs and no old coffee sitting around, and it allows for regular choice and supply of quality single estate beans as new crops become available. Check out our current offers page to see what is available right now.', faqLink: ''},
      {faqTitle: 'Is there a minimum order size?', faqText: 'We always have some coffees available for spot purchases, but not a huge amount. We prefer to bring regular shipments of fresh crop coffee into the country. The advantage of this system is that there are no holding costs and no old coffee sitting around, and it allows for regular choice and supply of quality single estate beans as new crops become available. Check out our current offers page to see what is available right now.', faqLink: ''},
      {faqTitle: 'What are your payment terms?', faqText: 'We always have some coffees available for spot purchases, but not a huge amount. We prefer to bring regular shipments of fresh crop coffee into the country. The advantage of this system is that there are no holding costs and no old coffee sitting around, and it allows for regular choice and supply of quality single estate beans as new crops become available. Check out our current offers page to see what is available right now.', faqLink: ''},
      {faqTitle: 'Do your prices include local freight?', faqText: 'We always have some coffees available for spot purchases, but not a huge amount. We prefer to bring regular shipments of fresh crop coffee into the country. The advantage of this system is that there are no holding costs and no old coffee sitting around, and it allows for regular choice and supply of quality single estate beans as new crops become available. Check out our current offers page to see what is available right now.', faqLink: ''},
      {faqTitle: 'Is my business too small? Do you supply smaller suppliers?', faqText: 'We always have some coffees available for spot purchases, but not a huge amount. We prefer to bring regular shipments of fresh crop coffee into the country. The advantage of this system is that there are no holding costs and no old coffee sitting around, and it allows for regular choice and supply of quality single estate beans as new crops become available. Check out our current offers page to see what is available right now.', faqLink: ''},
      {faqTitle: 'How can I taste the coffee before I buy?', faqText: 'We always have some coffees available for spot purchases, but not a huge amount. We prefer to bring regular shipments of fresh crop coffee into the country. The advantage of this system is that there are no holding costs and no old coffee sitting around, and it allows for regular choice and supply of quality single estate beans as new crops become available. Check out our current offers page to see what is available right now.', faqLink: ''},
      {faqTitle: "What's the best way to stay in touch with LCM?", faqText: 'We always have some coffees available for spot purchases, but not a huge amount. We prefer to bring regular shipments of fresh crop coffee into the country. The advantage of this system is that there are no holding costs and no old coffee sitting around, and it allows for regular choice and supply of quality single estate beans as new crops become available. Check out our current offers page to see what is available right now.', faqLink: ''},
      {faqTitle: 'Do you offer cupping education courses?', faqText: 'We always have some coffees available for spot purchases, but not a huge amount. We prefer to bring regular shipments of fresh crop coffee into the country. The advantage of this system is that there are no holding costs and no old coffee sitting around, and it allows for regular choice and supply of quality single estate beans as new crops become available. Check out our current offers page to see what is available right now.', faqLink: ''},
    ],
  }

  render() {

    let { FAQ } = this.state

    return (
    <div className='faq'>
      <h2 className='faq__title'>FAQ</h2>
        <Accordion>
          {FAQ.map((element, i) => {
            return <FAQItem {...element} key={element.faqTitle} eventKey={i} />
          })}
        </Accordion>
    </div>
    )
  }
}