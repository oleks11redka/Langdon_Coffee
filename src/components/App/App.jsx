import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../elements/NavBar/NavBar";
// import Home from "../pages/Home/Home";
// import Origins from "../pages/Origins/Origins";
// import ContactUs from "../pages/ContactUs/ContactUs";
// import AboutLcm from "../pages/AboutLcm/AboutLcm";
// import WorkingWithLcm from "../pages/WorkingWithLcm/WorkingWithLcm";
// import News from "../pages/News/News";
// import Article from "../pages/Article/Article";
// import Footer from "../pages/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        {/* <Route path="/" component={Home} />
        <Route path="/origins" component={Origins} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/about-lcm" component={AboutLcm} />
        <Route path="/working-with-lcm" component={WorkingWithLcm} />
        <Route path="/news" component={News} />
        <Route path="/news/:id" component={Article} />
        <Footer />  */}
      </Router>
    );
  }
}
