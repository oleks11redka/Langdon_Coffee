import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './GeneralButton.scss'

export default class GeneralButton extends Component {
    render() {
        let { link, buttonName, urlLink } = this.props
      return (
        <div className='generalButton__wrapper'>
          {urlLink ? <a className='generalButton' href={urlLink}>{buttonName}</a> : <Link className='generalButton' to={link}>{buttonName}</Link>}
        </div>
      )
    }
}