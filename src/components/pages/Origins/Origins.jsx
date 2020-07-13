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
      {
        countryName: "Brazil", countryInfo: `
      <p class="text"><span>Country:</span> Brazil<p>
      </br>
      <p><span>Geography:<span> 500 – 1700 masl</p>
      </br>
      <p><span>Harvest Season:</span> May-October</p>
      </br>
      <p><span>MOQ:</span> 60kg Grainpro bags</p>
      </br>
      <p><span>Usage:</span> Perfect high-volume lots for espresso use. More recently, high-quality micro-lots are being produced regularly.</p>
      </br>
      <p><span>Flavour Profile:</span> Chocolate sweetness, dark fruit, caramelized nuts.</p>
      </br>
      <p><span>Overview:</span> 
      Brazil is famed for being the largest coffee producer in the world and its focus is on volume and cost management. The typical flavour profile of a Brazilan coffee does not command the highest price in the market compared to what it costs to produce, so efficient farming processes are a must. More recently we have seen producers encouraged to experiment with varieties and processing to challenge and progress what we think of when it comes to a “typical” Brazilian coffee. Expect to see more of these coffees in time.</p>
      </br>
      <p><span>The value chain:</span> 
      There are a wide range of producer in Brazil. From large scale, very well run businesses with mechanical picking and drying, to small to medium scale operations. Coffee. Coffees processed and dry milled before being offered to exporters and co-op’s, who will then sort and clean ready for export.</p>
      </br>
      <p><span>Cupping Profile:</span> 
      Typically we see rich, full bodied, chocolatey sweet coffees with low acidity. This gives Brazil its popularity when included in Espresso (especially at high volume). More recently an exciting shift has begun whereby we have started to see process driven coffees, giving big funky fruit flavours and deep complexity.<p>`, key: "11"
      },
      {
        countryName: "Burundi", countryInfo: `
        <p><span>Country:</span> Burundi</p>
        </br>
      <p><span>Geography:<span> 1,200- 2100 meters above sea level</p>
      </br>
      <p><span>Varieties:</span> Bourbon, and Bourbon cultivars like Jackson, Mibirzi</span>
      </br>
      <p><span>Harvest Season:</span> March - July</p>
      </br>
      <p><span>MOQ:</span> 60kg Grainpro bags</p>
      </br>
      <p><span>Usage:</span> Widely used for espresso and filter as single origin. </p>
      </br>
      <p><span>Flavour Profile:</span> A wide range of fruit and floral like berries, citrus, bergamot and jasmine with an elegant, tea-like or winey body depending on the processing methods.</p>
      </br>
      <p><span>Overview: </span>
      After gaining independence in 1962 Burundi has endured almost constantly instability, with two civils wars, genocides, and coups contributing to the country being one of the poorest in the world.  Only 13% of the population live in urban centres making agriculture, and in particularly coffee extremely important to their GPD. In 2008 the government allowed coffee to enter the private sector with the establishment of The Regulatory Authority of the Coffee Sector (ARFIC) and Intercafe Burundi. </br>
      </br>
      There are between 600,000 – 800,000 coffee growing families in Burundi. Burundian farmers generally growing coffee along with other crops to help diversify income and to feed their families. Coffees are predominantly managed by co-ops and or privately owned washing stations. Grown mostly within 5 main regions of Buyenzi, Kirimiro, Mumirwa, Bweru, and Bugesera.</p>
      </br>
      <p><span>Relationships at origin:</span>
      LCM have partners on the ground that help us to sort and find coffees in Burundi. In particular we work with Ramadhan Salum from CPC. Salum also owns 4 washing stations, Buziraguhindwa, Mbririzi, Shembati, and Sehe. </p>
      </br>
      <p><span>Sourcing Strategy: </span>
      Langdon Coffee Merchants source a variety of different microlots that are washed, double washed, or naturally processed. We do also source regional blenders. This helps us widen our range of offers based upon local market needs. Langdon Coffee Merchants ensure every coffee we buy out of Burundi is of exceptional quality. Once coffees are selected, commercially milled or outturn samples are cupped and approved prior to coffees being shipped. </p>
      </br>
      <p><span>The value chain:</span>
      Most coffee growers in Burundi are small, and use the number of trees they have to explain their size. Average size being 250-300 trees. Once ripen and picked, coffee cherries are sold to their local washing stations. Coffee is processed using the washed, double washed or natural. Washing stations then deliver parchment to warehouses where coffee is graded by region, size, defect count and cupping quality before export. Our partner at CPC own multiple washing stations Buziraguhindwa, Mbririzi, Shembati, and Sehe.</p>
      </br>
      <p><span>How we buy from Mexico:</span>
      Langdon Coffee Merchants work closely with Salum at CPC who operate in the best coffee growing regions of the country. Every year, when time and resources permit, we travel to origin to visit our partner and select coffees for our local markets. We cup through as many samples as we can to find the right coffees.</p>
      </br>
      <p><span>Cupping Profile: </span>
      Varying from region to region and grade to grade, Burundi coffee’s can showcase traditional East African flavours, or their own unique characteristics. Generally, exhibits a wide range of fruit and floral like berries, citrus, bergamot and jasmine with an elegant, tea-like or winey body depending on the processing methods. The acidity of washed coffee is often elegant and balanced and body delicate and tea-like while natural Burundians coffee can be very sweet, and bold with a good amount of winey quality.</p>`, key: "12"
      },
      {
        countryName: "Colombia", countryInfo: `
        <p><span>Country:</span> Colombia </p>
        </br>
        <p><span>Geography:</span>1100 – 2100m Altitude, Average temperatures from 8 to 24 degrees in coffee producing regions.</p>
        </br>
        <p><span>Varieties:</span> Bourbon, Colombia, Typica, Castillo, Tabi, Gesha, many more. </p>
        </br>
        <p><span>Harvest Season:</span> October to January / March to July</p>
        </br>
        <p><span>Flavour Profile:</span> Fruit-driven, cola sweetness, berries, highly dependent on region or microclimate. </p>
        </br>
        <p><span>Overview:</span>
        Colombia has been producing coffee for over 230 years now, originally being grown in Santander, Cundinamarca, Antioquia and Caldas with the first reported export in 1808. Contributing to 16% of all agricultural export out of Colombia. Coffee production in Colombia employs over 500,000 producers and their families. Around 95% of Colombian coffee growing families grow coffee on small plots of land averaging 5 acres each.</br>
        </br>
        In 1927 the FNC (Federación Nacional de Cafeteros de Colombia) was established as a business association to promote production and exportation of Colombian coffee. The FNC is now the largest rural non-profit organization in the world. The FNC exports approximately 30% of all Colombian coffee.</br>
        </br>
        Colombia has some of the most unique biodiversity in the world, from arid deserts in the Santander to lush tropical rain forest in the Amazon. This helps create the exceptional growing conditions and helps contribute to the two harvest they have a year. Meaning we can source fresh crop Colombians year-round.</br>
        </br>
        Currently we source coffee from these regions, and within we have micro regional lots:  Huila and Tolima</p>
        </br>
        <p><span>Relationships at origin:</span>
        Langdon Coffee Merchants works with various exporting agencies alongside co-ops and producers directly. Our relationships on the ground are imperative in our purchasing and sourcing of Colombian coffee. We have a unique and amazing relationship with our friends in Cedro Alto who are at the forefront of sourcing fully traceable, sustainable and transparent coffees and specialise in sourcing coffee from the most remote and underdeveloped parts of Colombia.</br>
        </br>
        Whenever possible, Langdon Coffee Merchants cup and do pre-selection at origin to calibrate and give feedback to producers, and to have firsthand information of what we are tasting and buying.</br>
        </br>
        Even where we cannot travel to origin, all coffees are cupped, and properly scored and evaluated before purchase.</br>
        </br>
        LCM pre-contract coffees and volumes which enables producers to improve their production and planning.</br>
        </br>
        LCM has full traceability on stock lots coming out of Colombia. Ranging from fully transparent microlots, FTO, certified organic to AA Grade Supremo.</p>
        </br>
        <p><span>Sourcing Strategy:</span>
        Most of the Mexican coffee we purchase are regional blenders that we cup and assess alongside our customers. We have recently had the chance to visit some farms experimenting with honey and naturally processed microlots. The more time we spend on the ground visiting growing regions, the more we uncover of this unique and lush country. </br>
        </br>
        Whenever possible, Langdon Coffee Merchants cup and do pre-selection at origin to calibrate and give feedback to producers, and to have firsthand information of what we are tasting and buying.</p>
        </br>
        <p><span>The value chain:</span>
        We offer lot specific selection of regional blenders and the opportunity to cup and assess all coffees we have access to through our valued partners on the ground. Customisable bag sizes range from 35kg to metric tonne bulk bags.</p>
        </br>
        <p><span>How we buy from Colombia:<span>
        Langdon Coffee Merchants rely heavily on our partners in Cedro Alto, and MasterCol on the ground at origin. We visit, cup and calibrate with them when time and resources permit.</p>
        </br>
        <p><span>Cupping Profile:</span>
        The abundance of rich volcanic soil in highland areas, tropical climates, dry northlands, and microclimates promotes strong and fertile coffee production and lends itself to producing deliciously clean, vibrant and sparkling coffees. Other regions that are at lower altitudes produce rich and creamy cups with an abundance of body and sweetness. Colombia is a country that is so diversified on the cupping table, it would be hard to give you a traditional cupping profile. It is highly dependent on microclimate and region. Even neighbouring farms with the same varieties can cup differently.</p>`
      },
      {
        countryName: "CostaRica", countryInfo: `
        <p><span>Country:</span> Costa Rica</p>
        </br>
      <p><span>Geography:</span> 800 – 1700m Masl, Average temperatures from 16 to 32 degrees in coffee producing regions</p>
      </br>
      <p><span>Varieties:</span> Catuai, Caturra, Bourbons. Experimental and exotic varieties</p>
      </br>
      <p><span>Harvest Season:</span> January-May</p>
      </br>
      <p><span>Arrival</span> May-July </p>
      </br>
      <p><span>Usage: </span> Used largely for filter and “guest espresso”. Larger lots used as components in Espresso blends.</p>
      </br>
      <p><span>Flavour Profile:</span> Berries, Jammy, Malic acidity, stone fruit, florals.</p>
      </br>
      <p><span>Overview:</span>
      A beautiful and comparatively stable country, Costa Rica enjoys a much higher standard of living than some of it’s neighbours. It’s diverse mountain ranges, rainforests and beaches are a tourist hotspot, attracting millions of visitors every year. Given it’s stability, Costa Rica is a more expensive place to travel and do business than other central American countries and this is reflected in coffee prices. The industry is monitored and a minimum living wage is in place for farmers and workers. Quality has improved immensely as cost of production is high, meaning CR cannot compete on price. The diversity and investment in processing is unparalleled, making Costa Rica a hotbed for some of the worlds most exotic coffees. The future of Costa Rican coffee seems to lie in this area.</p>
      </br>
      <p><span>The value chain:</span>
      We offer lot specific selection of regional blenders and the opportunity to cup and assess all coffees we have access to through our valued partners on the ground. Customisable bag sizes range from 35kg to metric tonne bulk bags.</p>`
      }
    ],



    countryClick: ""
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }


  openPopUp = (event) => {
    this.setState({
      countryClick: event.target.id
    })
  }

  render() {

    let { headers } = this.props

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
