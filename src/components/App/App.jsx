import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../elements/NavBar/NavBar";
import Home from "../pages/Home/Home";
import WorkInProgress from "../pages/WorkInProgress/WorkInProgress";
import News from "../pages/News/News";
import Origins from "../pages/Origins/Origins";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutLcm from "../pages/AboutLcm/AboutLcm";
import WorkingWithLcm from "../pages/WorkingWithLcm/WorkingWithLcm";
import SingleArticle from "../pages/SingleArticle/SingleArticle";
import Footer from "../elements/Footer/Footer";

import "./App.scss";
// import Test from "../illya/Test";

export default class App extends Component {
  state = {
    newsInfo: [
      { category: 'Events', title: 'Hello', text: 'As the number of Americans who drink coffee every day has increased by 5% over the past five years, more Americans are also turning to espresso-based beverages and cold brew. These are two of the prevailing trends in the new 2020 National Coffee Data Trends (NCDT) report (formerly known as National Coffee Drinking Trends) from the National Coffee Association, which has compiled data on coffee consumption in the United States since 1950. The 2020 report reflects data gathered in pre-COVID-19 America, and of course the long-term economic and social ramifications the coronavirus and its response will have on consumers and the coffee industry are yet to unfold. “The NCDT is the Atlas of American Coffee,” NCA President and CEO Bill Murray said in announcement of the report’s release today. “This year’s release shows just how much Americans rely on the energy, comfort, and normalcy of their favorite brew. “But these are challenging times, and the coffee business is not as usual. NCA encourages everyone in the coffee industry to continue supporting small businesses, governments, health authorities, workers, and every day Americans as we all work together to manage the profound impacts of the coronavirus outbreak.” Released in conjunction with a webinar yesterday following the NCA’s annual convention, which took place in early March in Austin, Texas, the report draws upon several thousand surveys of a nationally representative group of people by age and race. According to the NCA, Americans are drinking more coffee than ever. Here are some of the highlights of the report, which will be available for purchase at the NCA website.', image: './NewsArticlePictures/Footer.png', key: '1', id: '1' },
      { category: 'How-to', title: 'Bye', text: 'lorem ipsum', image: './NewsArticlePictures/MainHeaderBackground.png', key: '2', id: '2' },
      { category: 'News', title: 'Hey-hey', text: 'lorem ipsum', image: './NewsArticlePictures/Footer.png', key: '3', id: '3' },
      { category: 'Community', title: 'Bye-bye', text: 'lorem ipsum', image: './NewsArticlePictures/MainHeaderBackground.png', key: '4', id: '4' },
      { category: 'From Origin', title: 'Mkay', text: 'lorem ipsum', image: './NewsArticlePictures/Footer.png', key: '5', id: '5' },
    ],
    headers: [
      {pageTitle: 'Origins', headerPicture: './HeaderPictures/Origins.png', text: 'Langdon Coffee Merchants source green beans from some of the world’s most exciting and XXX coffee origins. Right across the bean belt, we offer roasters a broad selection of traceable (back to the mill, at a minimum) cultivars, processing methods and flavour profiles, meeting the needs of speciality and high-end commercial quality coffee roasters in the UK, New Zealand and Australia. All our beans are extensively cupped for quality assurance at our state-of-the art laboratory in Melbourne by a Q-grader before making their way to our customers. As well as single origin beans, we offer commercial blending for that discerning, bespoke taste.'},
      {pageTitle: 'Contact Us', headerPicture: './HeaderPictures/ContactUs.png'},
      {pageTitle: 'About Us', headerPicture: './HeaderPictures/AboutUs.png'},
      {pageTitle: 'Working with LCM', headerPicture: './HeaderPictures/WorkingWithLcm.png', title: 'We’ve got your green bean needs sorted', text: 'Whatever taste profile, brew method, price or volume requirement you’re after, Langdon Coffee Merchants can help source the perfect green bean for your brew. As well as providing samples, we love to host private cupping sessions to take you through our range first hand – after all, we think it’s best to let our coffee do the talking! With our commercial blending capability, we can also help you create a blend that is unique to your roastery.'},
      {pageTitle: 'News', headerPicture: './HeaderPictures/News.png'}
    ],
  }

  render() {
    let { newsInfo, headers } = this.state;
    return (
      <Router>
        <NavBar />
        {/* <Test /> */}
        <Route exact path="/" render={() => <Home newsInfo={newsInfo} />} />
        <Route path="/work-in-progress" component={WorkInProgress} />
        <Route exact path="/news" render={() => <News newsInfo={newsInfo} headers={headers} />} />
        <Route path="/origins" render={() => <Origins headers={headers} />} />
        <Route path="/contact-us" render={() => <ContactUs headers={headers} />} />
        <Route path="/about-lcm" render={() => <AboutLcm headers={headers} />} />
        <Route path="/working-with-lcm" render={() => <WorkingWithLcm headers={headers} />} />
        <Route
          path="/news/:id"
          render={({ match }) => {
            let { id } = match.params;
            return <SingleArticle newsInfo={newsInfo} articleId={id} headers={headers} />;
          }}
        />
        <Footer />
      </Router>
    );
  }
}
