import React, { Component } from 'react'

import './MainHeader.scss'

export default class MainHeader extends Component {
    render() {
      return (
        <div className='mainHeader'>
            <div className='mainHeader__picture'>
                <img src={require('./MainHeaderPictures/MainHeaderTitle.png')} alt='Main header title' className='mainHeader__title' />
            </div>
            <div className='mainHeader__description-block'>
                <p className='mainHeader__description'>We source green beans from the most exciting and unique coffee producers around the world, offering a traceable product suited to speciality and high - quality commercial coffee roasters in Australia, the United Kingdom and New Zealand</p>
            </div>
        </div>
      )
    }
}