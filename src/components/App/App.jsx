import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import Origins from "../pages/Origins/Origins";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutLcm from "../pages/AboutLcm/AboutLcm";
import WorkingWithLcm from "../pages/WorkingWithLcm/WorkingWithLcm";
import News from "../pages/News/News";
import WorkInProgress from "../pages/WorkInProgress/WorkInProgress";
import Footer from "../elements/Footer/Footer";
import GeneralButton from "../elements/GeneralButton/GeneralButton";
import NavBar from "../elements/NavBar/NavBar";
import SingleArticle from "../pages/SingleArticle/SingleArticle";

import "./App.scss";

export default class App extends Component {
  state = {
    newsInfo: [
      {category: 'food', title: 'Hello', text: 'As the number of Americans who drink coffee every day has increased by 5% over the past five years, more Americans are also turning to espresso-based beverages and cold brew. These are two of the prevailing trends in the new 2020 National Coffee Data Trends (NCDT) report (formerly known as National Coffee Drinking Trends) from the National Coffee Association, which has compiled data on coffee consumption in the United States since 1950. The 2020 report reflects data gathered in pre-COVID-19 America, and of course the long-term economic and social ramifications the coronavirus and its response will have on consumers and the coffee industry are yet to unfold. “The NCDT is the Atlas of American Coffee,” NCA President and CEO Bill Murray said in announcement of the report’s release today. “This year’s release shows just how much Americans rely on the energy, comfort, and normalcy of their favorite brew. “But these are challenging times, and the coffee business is not as usual. NCA encourages everyone in the coffee industry to continue supporting small businesses, governments, health authorities, workers, and every day Americans as we all work together to manage the profound impacts of the coronavirus outbreak.” Released in conjunction with a webinar yesterday following the NCA’s annual convention, which took place in early March in Austin, Texas, the report draws upon several thousand surveys of a nationally representative group of people by age and race. According to the NCA, Americans are drinking more coffee than ever. Here are some of the highlights of the report, which will be available for purchase at the NCA website.', image: './NewsArticlePictures/Footer.png', key: '1', id: '1'},
      {category: 'whatever', title: 'Bye', text: 'lorem ipsum', image: './NewsArticlePictures/MainHeaderBackground.png', key: '2', id: '2'},
      {category: 'okay', title: 'Hey-hey', text: 'lorem ipsum', image: './NewsArticlePictures/Footer.png', key: '3', id: '3'},
      {category: 'interesting', title: 'Bye-bye', text: 'lorem ipsum', image: './NewsArticlePictures/MainHeaderBackground.png', key: '4', id: '4'},
      {category: 'idontcare', title: 'Mkay', text: 'lorem ipsum', image: './NewsArticlePictures/Footer.png', key: '5', id: '5'},
    ]
  }

  render() {
    let { newsInfo } = this.state;
    return (
      <Router>
        <NavBar />
        {/* Пример кнопки которая переходит уже по ссылке */}
        {/* <GeneralButton exact link='/' buttonName='Origins' /> */}
        <Route exact path="/" render={() => <Home newsInfo={newsInfo} />} />
        <Route path="/work-in-progress" component={WorkInProgress} />
        <Route exact path="/news" render={() => <News newsInfo={newsInfo} />} />
        {/* <Route path="/origins" component={Origins} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/about-lcm" component={AboutLcm} />
        <Route path="/working-with-lcm" component={WorkingWithLcm} /> */}
        <Route
          path="/news/:id"
          render={({ match }) => {
            let { id } = match.params;
            return <SingleArticle newsInfo={newsInfo} articleId={id} />;
          }}
        />
        <Footer />
      </Router>
    );
  }
}
