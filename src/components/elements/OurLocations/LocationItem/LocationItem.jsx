import React, { Component } from 'react'

import './LocationItem.scss'

export default class LocationItem extends Component {
    render() {
      let {name, phone, address, email} = this.props
      return (
        <div className='locationItem'>
          <h3 className='locationItem__title'>{name}</h3>
          <p className='locationItem__phone' style={{ marginTop: `${phone === '' ? '0' : '20px' }` }}>{phone ? `Phone: ${phone}` : null}</p>
          <p className='locationItem__adress'>Address: {address}</p>
          <a href={`mailto:${email}`} className='locationItem__button'>
            <svg className='locationItem__svg' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M29.5453 14.9438C29.7281 14.7984 30 14.9344 30 15.1641V24.75C30 25.9922 28.9922 27 27.75 27H8.25C7.00781 27 6 25.9922 6 24.75V15.1688C6 14.9344 6.26719 14.8031 6.45469 14.9484C7.50469 15.7641 8.89688 16.8 13.6781 20.2734C14.6672 20.9953 16.3359 22.5141 18 22.5047C19.6734 22.5188 21.375 20.9672 22.3266 20.2734C27.1078 16.8 28.4953 15.7594 29.5453 14.9438ZM18 21C19.0875 21.0188 20.6531 19.6313 21.4406 19.0594C27.6609 14.5453 28.1344 14.1516 29.5688 13.0266C29.8406 12.8156 30 12.4875 30 12.1406V11.25C30 10.0078 28.9922 9 27.75 9H8.25C7.00781 9 6 10.0078 6 11.25V12.1406C6 12.4875 6.15937 12.8109 6.43125 13.0266C7.86563 14.1469 8.33906 14.5453 14.5594 19.0594C15.3469 19.6313 16.9125 21.0188 18 21Z" fill="#EEA9B5"/>
            </svg>
            Send Email
          </a>
        </div>
      )
    }
}