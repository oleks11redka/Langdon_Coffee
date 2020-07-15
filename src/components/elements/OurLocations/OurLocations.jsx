import React, { Component } from 'react'

import './OurLocations.scss'
import LocationItem from './LocationItem/LocationItem'

export default class OurLocations extends Component {
  state = {
    locations: [
      {name: 'Australia / Melbourne', phone:'+61 (3) 8360 2642', address:'429 – 431 Clarendon Street, South Melbourne, VIC', email:'trade@langdoncoffee.com.au'},
      {name: 'United Kingdom', phone:'+ 44 (0) 2039 557 900', address:'Floor 1, 90 Great Suffolk St, London, United Kingdom, SE1 OBE', email:'UKcoffee@hjlangdon.com'},
      {name: 'Australia / Adelaide', phone: '', address:'7 Salisbury Crescent, Colonel Light Gardens 5041', email:'trade@langdoncoffee.com.au'},
      {name: 'New Zealand', phone:'+ 64 (9) 270 2040', address:'11 Rakino Way, Mt Wellington, New Zealand', email:'NZcoffee@hjlangdon.com'}
    ]
  }

    render() {
      let { locations } = this.state
      return (
        <div className='ourLocations'>
            {locations.map((location) => {
              return <LocationItem {...location} />
            })}
        </div>
      )
    }
}