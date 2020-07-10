import React, { Component } from 'react'
import './CoffeeHarvestCalendar.scss'

export default class CoffeeHarvestCalendar extends Component {
  render() {
    return (
      <div className="CoffeeHarvestCalendar">
        <h1 className="CoffeeHarvestCalendar__title">Coffee Harvest Calendar</h1>
        <p className="CoffeeHarvestCalendar__text">Fresh crops of green beans land in our UK, New Zealand and Australian warehouses monthly
        where we invite you to savour their quality over a professional cupping with us.</p>
        <div className="CoffeeHarvestCalendar__calendar">
          <div className="CoffeeHarvestCalendar__calendar-info">
            <div className="CoffeeHarvestCalendar__box--red">
              <div className="CoffeeHarvestCalendar__red"></div>
              <span className="CoffeeHarvestCalendar__discription">Harvest period ;</span>
            </div>
            <div className="CoffeeHarvestCalendar__box--black">
              <div className="CoffeeHarvestCalendar__black"></div>
              <span className="CoffeeHarvestCalendar__discription">Shipping Period</span>
            </div>
          </div>
          <img className='CoffeeHarvestCalendar__calendar-grafic' src={require("./CoffeeHarvestCalendarPictures/harvest calendar.svg")} alt="calendar grafic"/>
        </div>
      </div>
    )
  }
}