import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'

import './GreenBlockWithButton.scss'
import GeneralButton from '../GeneralButton/GeneralButton'

export default class GreenBlockWithButton extends Component {

  buttonName = (param) => {
    switch(param) {
      case 'Who we are':
        return 'More About Us';
      case 'South Melbourne Coffee HQ':
        return 'Come Cup With Us';
      case '':
        return 'Request a Sample';
      default:
        return 'Work In Progress';
    }
  }

  buttonLink = (param) => {
    switch(param) {
      case 'Who we are':
        return '/about-lcm';
      case 'South Melbourne Coffee HQ':
      case '':
        return '/contact-us';
      default:
        return '/work-in-progress';
    }
  }

  render() {
    let { greenBlocks, blockName } = this.props
    let block

    return (
      <div className='greenBlockWithButton-wrapper'>
        {block = greenBlocks.filter(block => {return block.greenTitle === blockName}),
         block.map((block, i) => {
          let requiredImage = require(`${block.greenPicture}`)
          let text = block.greenText
          return (
            <div className='greenBlockWithButton' key={i}>
              <div className='greenBlockWithButton__picture' style={{ backgroundImage: `url(${requiredImage})` }}></div>
              <div className='greenBlockWithButton__description'>
                {block.greenTitle === '' ? null : <h2 className={`greenBlockWithButton__title greenBlockWithButton__title--${block.greenTitle === 'South Melbourne Coffee HQ' ? 'south-melbourne' : null}`}>{block.greenTitle}</h2>}
                {ReactHtmlParser(text)}
                <GeneralButton link={`${this.buttonLink(block.greenTitle)}`} buttonName={this.buttonName(block.greenTitle)} />
            </div>
          </div>)
         })}
      </div>
    )
  }

}