import React, { Component } from "react";
import './Origins.scss';
import Map from "../../elements/Map/Map";
import OurCredentials from "../../elements/OurCredentials/OurCredentials";
import CoffeeHarvestCalendar from "../../elements/CoffeeHarvestCalendar/CoffeeHarvestCalendar";
import MapPopUp from "../../elements/MapPopUp/MapPopUp";



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
    return (
      <div className="origins">
        <div className="origins__header">
          <div className="origins__title">
            <h1 className="origins__title-text">Origins</h1>
          </div>
          <div className="origins__info">
            <p className="origins__text">
              Langdon Coffee Merchants source green beans from some of the world’s most exciting and XXX coffee origins.
              Right across the bean belt, we offer roasters a broad selection of traceable (back to the mill, at a minimum) cultivars,
              processing methods and flavour profiles, meeting the needs of speciality and high-end commercial quality coffee roasters in the UK,
              New Zealand and Australia. All our beans are extensively cupped for quality assurance at our state-of-the art laboratory in Melbourne
              by a Q-grader before making their way to our customers. As well as single origin beans, we offer commercial blending for that discerning,
              bespoke taste
          </p>
          </div>
        </div>
        <Map openPopUp={this.openPopUp} />
        <OurCredentials />
        <CoffeeHarvestCalendar />
        <MapPopUp countryClick={this.state.countryClick} country={this.state.country} />
      </div>
    )
  }
}
