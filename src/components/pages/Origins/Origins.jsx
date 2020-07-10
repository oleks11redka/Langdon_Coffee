import React, { Component } from "react";
import Map from "../../elements/Map/Map";
import OurCredentials from "../../elements/OurCredentials/OurCredentials";
import CoffeeHarvestCalendar from "../../elements/CoffeeHarvestCalendar/CoffeeHarvestCalendar";


export default class Origins extends Component {
  render() {
    return (
      <div className="origins">
        <Map />
        <OurCredentials />
        <CoffeeHarvestCalendar />
      </div>);
  }
}
