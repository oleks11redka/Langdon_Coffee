import React, { Component } from "react";
import './Origins.scss';
import Map from "../../elements/Map/Map";
import OurCredentials from "../../elements/OurCredentials/OurCredentials";
import CoffeeHarvestCalendar from "../../elements/CoffeeHarvestCalendar/CoffeeHarvestCalendar";
import MapPopUp from "../../elements/MapPopUp/MapPopUp";
import Header from "../../elements/Header/Header";



export default class Origins extends Component {
  state = {

    country: [
      { countryName: "Rwanda", countryInfo: "kkjfdnjkfnjdnfjsd", key: "11" },
      { countryName: "Ethiopia", countryInfo: "dfdfnmdnmdm", key: "12" }
    ],

    countryClick: ""
  }


  openPopUp = (event) => {
    this.setState({
      countryClick: event.target.id
    })
  }

  render() {

    let { headers }= this.props

    return (
      <div className="origins">
        <Header pageHeaderName='Origins' headers={headers} />
        <Map openPopUp={this.openPopUp} />
        <OurCredentials />
        <CoffeeHarvestCalendar />
        <MapPopUp countryClick={this.state.countryClick} country={this.state.country} />
      </div>
    )
  }
}
