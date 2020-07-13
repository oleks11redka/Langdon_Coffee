import React, { Component } from 'react'

import './FromBeanToBrew.scss'

export default class FromBeanToBrew extends Component {
    render() {
      return (
        <div className='fromBeanToBrew'>
            <h2 className='fromBeanToBrew__title'>From Bean to Brew</h2>
            <p className='fromBeanToBrew__text'>
              Celebrated the world over for its café and coffee culture, Langdon Coffee Merchants was established in Melbourne, Australia in 2015. The (much younger) sister business to 167-year-old Langdon Ingredients, LCM combines a rich merchant history with an entrepreneurial spirit that – like its hometown – is absolutely passionate about exceptional coffee.
              <br />Building on the global networks of our sister-business, LCM has developed trusted relationships with producers and exporters across the bean belt, sourcing traceable, high-quality green beans to support your transparent, sustainable “bean to brew” consumer story.
              <br/>Quality is at the core of our business and It’s why we take such a disciplined approach to quality: from working with producers at origin, to a robust cupping program at our Langdon Coffee labs, we stand behind the quality of our beans and if for some reasons, you’re not satisfied, please reach out to our Customer Service team immediately.
              <br/>With fast-growing, innovative coffee cultures of their own, Langdon Coffee Merchants is now bringing a curated selection of our finest green beans to the United Kingdom and New Zealand
            </p>
        </div>
      )
    }
}