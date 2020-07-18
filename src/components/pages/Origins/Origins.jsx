import React, { Component } from "react";
import './Origins.scss';
import Map from "../../elements/Map/Map";
import OurCredentials from "../../elements/OurCredentials/OurCredentials";
import CoffeeHarvestCalendar from "../../elements/CoffeeHarvestCalendar/CoffeeHarvestCalendar";
import MapPopUp from "../../elements/MapPopUp/MapPopUp";
import Header from "../../elements/Header/Header";



export default class Origins extends Component {
  state = {
    showPopUp: false,
    //Список стран
    country: [
      {
        countryName: "Brazil", countryInfo: `
      <div class="popup__info--green">
      <p><div>Country:</div><div>Brazil</div><p>
      </br>
      <p><div>Geography:</div> 500 – 1700 masl</p>
      </br>
      <p><div>Harvest Season:</div> May-October</p>
      </br>
      <p><div>MOQ:</div> 60kg Grainpro bags</p>
      </br>
      <p><div>Usage:</div><div>Perfect high-volume lots for espresso use. More recently, high-quality micro-lots are being produced regularly.</div></p>
      </br>
      <p><div>Flavour Profile:</div> Chocolate sweetness, dark fruit, caramelized nuts.</p></div>
      
      <div class="popup__info--white">
      <p>
      <div>Overview:</div>
      <div>Brazil is famed for being the largest coffee producer in the world and its focus is on volume and cost management. The typical flavour profile of a Brazilan coffee does not command the highest price in the market compared to what it costs to produce, so efficient farming processes are a must. More recently we have seen producers encouraged to experiment with varieties and processing to challenge and progress what we think of when it comes to a “typical” Brazilian coffee. Expect to see more of these coffees in time.</div>
      </p>
      </br>
      <p><div>The value chain:</div><div>
      There are a wide range of producer in Brazil. From large scale, very well run businesses with mechanical picking and drying, to small to medium scale operations. Coffee. Coffees processed and dry milled before being offered to exporters and co-op’s, who will then sort and clean ready for export.</div></p>
      </br>
      <p><div>Cupping Profile:</div><div>
      Typically we see rich, full bodied, chocolatey sweet coffees with low acidity. This gives Brazil its popularity when included in Espresso (especially at high volume). More recently an exciting shift has begun whereby we have started to see process driven coffees, giving big funky fruit flavours and deep complexity.</div><p></div>`, key: "11"
      },
      {
        countryName: "Burundi", countryInfo: `
        <div class="popup__info--green">
      <p><div>Country:</div><div> Burundi</div></p>
      </br>
      <p><div>Geography:</div><div> 1,200- 2100 meters above sea level</div></p>
      </br>
      <p><div>Varieties:</div> <div>Bourbon, and Bourbon cultivars like Jackson, Mibirzi</div></p>
      </br>
      <p><div>Harvest Season:</div><div> March - July</div></p>
      </br>
      <p><div>MOQ:</div><div> 60kg Grainpro bags</div></p>
      </br>
      <p><div>Usage:</div><div> Widely used for espresso and filter as single origin.</div> </p>
      </br>
      <p><div>Flavour Profile:</div><div> A wide range of fruit and floral like berries, citrus, bergamot and jasmine with an elegant, tea-like or winey body depending on the processing methods.</div></p></div>
      </br>
      <div class="popup__info--white">
      <p><div>Overview:</div>
      <div>After gaining independence in 1962 Burundi has endured almost constantly instability, with two civils wars, genocides, and coups contributing to the country being one of the poorest in the world.  Only 13% of the population live in urban centres making agriculture, and in particularly coffee extremely important to their GPD. In 2008 the government allowed coffee to enter the private sector with the establishment of The Regulatory Authority of the Coffee Sector (ARFIC) and Intercafe Burundi.</br>
      </br>
      There are between 600,000 – 800,000 coffee growing families in Burundi. Burundian farmers generally growing coffee along with other crops to help diversify income and to feed their families. Coffees are predominantly managed by co-ops and or privately owned washing stations. Grown mostly within 5 main regions of Buyenzi, Kirimiro, Mumirwa, Bweru, and Bugesera.</div></p>
      </br>
      <p><div>Relationships at origin:</div>
      <div>LCM have partners on the ground that help us to sort and find coffees in Burundi. In particular we work with Ramadhan Salum from CPC. Salum also owns 4 washing stations, Buziraguhindwa, Mbririzi, Shembati, and Sehe.</div> </p>
      </br>
      <p><div>Sourcing Strategy: </div>
      <div>Langdon Coffee Merchants source a variety of different microlots that are washed, double washed, or naturally processed. We do also source regional blenders. This helps us widen our range of offers based upon local market needs. Langdon Coffee Merchants ensure every coffee we buy out of Burundi is of exceptional quality. Once coffees are selected, commercially milled or outturn samples are cupped and approved prior to coffees being shipped.</div> </p>
      </br>
      <p><div>The value chain:</div>
      <div>Most coffee growers in Burundi are small, and use the number of trees they have to explain their size. Average size being 250-300 trees. Once ripen and picked, coffee cherries are sold to their local washing stations. Coffee is processed using the washed, double washed or natural. Washing stations then deliver parchment to warehouses where coffee is graded by region, size, defect count and cupping quality before export. Our partner at CPC own multiple washing stations Buziraguhindwa, Mbririzi, Shembati, and Sehe.</div></p>
      </br>
      <p><div>How we buy from Mexico:</div>
      <div>Langdon Coffee Merchants work closely with Salum at CPC who operate in the best coffee growing regions of the country. Every year, when time and resources permit, we travel to origin to visit our partner and select coffees for our local markets. We cup through as many samples as we can to find the right coffees.</div></p>
      </br>
      <p><div>Cupping Profile: </div>
      <div>Varying from region to region and grade to grade, Burundi coffee’s can showcase traditional East African flavours, or their own unique characteristics. Generally, exhibits a wide range of fruit and floral like berries, citrus, bergamot and jasmine with an elegant, tea-like or winey body depending on the processing methods. The acidity of washed coffee is often elegant and balanced and body delicate and tea-like while natural Burundians coffee can be very sweet, and bold with a good amount of winey quality.</div></p></div>`, key: "12"
      },
      {
        countryName: "Colombia", countryInfo: `
        <div class="popup__info--green">
        <p><div>Country:</div><div> Colombia </div> </p>
        </br>
        <p><div>Geography:</div><div>1100 – 2100m Altitude, Average temperatures from 8 to 24 degrees in coffee producing regions.</div></p>
        </br>
        <p><div>Varieties:</div><div> Bourbon, Colombia, Typica, Castillo, Tabi, Gesha, many more.</div> </p>
        </br>
        <p><div>Harvest Season:</div><div> October to January / March to July</div></p>
        </br>
        <p><div>Flavour Profile:</div><div> Fruit-driven, cola sweetness, berries, highly dependent on region or microclimate.</div> </p></div>
        </br>
        <div class="popup__info--white">
        <p><div>Overview:</div>
        <div>Colombia has been producing coffee for over 230 years now, originally being grown in Santander, Cundinamarca, Antioquia and Caldas with the first reported export in 1808. Contributing to 16% of all agricultural export out of Colombia. Coffee production in Colombia employs over 500,000 producers and their families. Around 95% of Colombian coffee growing families grow coffee on small plots of land averaging 5 acres each.</br>
        </br>
        In 1927 the FNC (Federación Nacional de Cafeteros de Colombia) was established as a business association to promote production and exportation of Colombian coffee. The FNC is now the largest rural non-profit organization in the world. The FNC exports approximately 30% of all Colombian coffee.</br>
        </br>
        Colombia has some of the most unique biodiversity in the world, from arid deserts in the Santander to lush tropical rain forest in the Amazon. This helps create the exceptional growing conditions and helps contribute to the two harvest they have a year. Meaning we can source fresh crop Colombians year-round.</br>
        </br>
        Currently we source coffee from these regions, and within we have micro regional lots:  Huila and Tolima</div></p>
        </br>
        <p><div>Relationships at origin:</div>
        <div>Langdon Coffee Merchants works with various exporting agencies alongside co-ops and producers directly. Our relationships on the ground are imperative in our purchasing and sourcing of Colombian coffee. We have a unique and amazing relationship with our friends in Cedro Alto who are at the forefront of sourcing fully traceable, sustainable and transparent coffees and specialise in sourcing coffee from the most remote and underdeveloped parts of Colombia.</br>
        </br>
        Whenever possible, Langdon Coffee Merchants cup and do pre-selection at origin to calibrate and give feedback to producers, and to have firsthand information of what we are tasting and buying.</br>
        </br>
        Even where we cannot travel to origin, all coffees are cupped, and properly scored and evaluated before purchase.</br>
        </br>
        LCM pre-contract coffees and volumes which enables producers to improve their production and planning.</br>
        </br>
        LCM has full traceability on stock lots coming out of Colombia. Ranging from fully transparent microlots, FTO, certified organic to AA Grade Supremo.</div></p>
        </br>
        <p><div>Sourcing Strategy:</div>
        <div>Most of the Mexican coffee we purchase are regional blenders that we cup and assess alongside our customers. We have recently had the chance to visit some farms experimenting with honey and naturally processed microlots. The more time we spend on the ground visiting growing regions, the more we uncover of this unique and lush country. </br>
        </br>
        Whenever possible, Langdon Coffee Merchants cup and do pre-selection at origin to calibrate and give feedback to producers, and to have firsthand information of what we are tasting and buying.</div></p>
        </br>
        <p><div>The value chain:</div>
        <div>We offer lot specific selection of regional blenders and the opportunity to cup and assess all coffees we have access to through our valued partners on the ground. Customisable bag sizes range from 35kg to metric tonne bulk bags.</div></p>
        </br>
        <p><div>How we buy from Colombia:</div>
        <div>Langdon Coffee Merchants rely heavily on our partners in Cedro Alto, and MasterCol on the ground at origin. We visit, cup and calibrate with them when time and resources permit.</div></p>
        </br>
        <p><div>Cupping Profile:</div>
        <div>The abundance of rich volcanic soil in highland areas, tropical climates, dry northlands, and microclimates promotes strong and fertile coffee production and lends itself to producing deliciously clean, vibrant and sparkling coffees. Other regions that are at lower altitudes produce rich and creamy cups with an abundance of body and sweetness. Colombia is a country that is so diversified on the cupping table, it would be hard to give you a traditional cupping profile. It is highly dependent on microclimate and region. Even neighbouring farms with the same varieties can cup differently.</div></p></div>`
      },
      {
        countryName: "CostaRica", countryInfo: `
        <div class="popup__info--green">
      <p><div>Country:</div><div> Costa Rica</div></p>
      </br>
      <p><div>Geography:</div><div> 800 – 1700m Masl, Average temperatures from 16 to 32 degrees in coffee producing regions</div></p>
      </br>
      <p><div>Varieties:</div><div> Catuai, Caturra, Bourbons. Experimental and exotic varieties</div></p>
      </br>
      <p><div>Harvest Season:</div><div> January-May</div></p>
      </br>
      <p><div>Arrival</div> <div>May-July </div></p>
      </br>
      <p><div>Usage:</div><div> Used largely for filter and “guest espresso”. Larger lots used as components in Espresso blends.</div></p>
      </br>
      <p><div>Flavour Profile:</div><div> Berries, Jammy, Malic acidity, stone fruit, florals.</div></p></div>
      </br>
      <div class="popup__info--white">
      <p><div>Overview:</div>
      <div>A beautiful and comparatively stable country, Costa Rica enjoys a much higher standard of living than some of it’s neighbours. It’s diverse mountain ranges, rainforests and beaches are a tourist hotspot, attracting millions of visitors every year. Given it’s stability, Costa Rica is a more expensive place to travel and do business than other central American countries and this is reflected in coffee prices. The industry is monitored and a minimum living wage is in place for farmers and workers. Quality has improved immensely as cost of production is high, meaning CR cannot compete on price. The diversity and investment in processing is unparalleled, making Costa Rica a hotbed for some of the worlds most exotic coffees. The future of Costa Rican coffee seems to lie in this area.</div></p>
      </br>
      <p><div>The value chain:</div>
      <div>We offer lot specific selection of regional blenders and the opportunity to cup and assess all coffees we have access to through our valued partners on the ground. Customisable bag sizes range from 35kg to metric tonne bulk bags.</div></p></div>`
      }
    ],
    countryClick: ""
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Функция закрытия Map-Popup по клику за пределами его области
    let wrapper = document.getElementById('wrapper-popup')
    wrapper.addEventListener('mouseup', e => {
      let block = document.getElementById("popup");
      if (!block.contains(e.target)) {
        this.setState({
          showPopUp: false
        })
      }
    })
  }


  openPopUp = (event) => {
    this.setState({
      showPopUp: true,
      countryClick: event.target.id
    })
  }

  closePopUp = () => {
    this.setState({
      showPopUp: false
    })
  }

  render() {

    let { headers } = this.props

    return (
      <div className="origins" id="origins">
        <Header pageHeaderName='Origins' headers={headers} />
        <Map openPopUp={this.openPopUp} />
        <OurCredentials />
        <CoffeeHarvestCalendar />
        <MapPopUp countryClick={this.state.countryClick} country={this.state.country} closePopUp={this.closePopUp} showPopUp={this.state.showPopUp} />
      </div>
    )
  }
}
