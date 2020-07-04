import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

import "./App.scss";

export default class App extends Component {
  state = {
    name: "crazy"
  }
  render() {
    return (
      <Router>
        <NavBar />

        {/* Пример кнопки которая переходит уже по ссылке */}
        {/* <GeneralButton exact link='/' buttonName='Origins' /> */}

        <Route name={this.state.name} exact path="/" component={Home} />
        <Route exact path="/work-in-progress" component={WorkInProgress} />
        <Route path="/news" component={News} />
        {/* <Route path="/origins" component={Origins} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/about-lcm" component={AboutLcm} />
        <Route path="/working-with-lcm" component={WorkingWithLcm} />
        <Route path="/news/:id" component={Article} /> */}
        <Footer />
      </Router>
    );
  }
}
