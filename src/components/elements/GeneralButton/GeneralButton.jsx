import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './GeneralButton.scss'

export default class GeneralButton extends Component {
    render() {
        let { link, buttonName } = this.props
      return (
        <Link className='generalButton' to={link}>{buttonName}</Link>
      )
    }
}