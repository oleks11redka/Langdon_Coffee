import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default class NavBar extends Component {
  state = {
    navbar: [
      { itemName: "about us", id: 1, url: "/about-lcm" },
      { itemName: "origins", id: 2, url: "/origins" },
      { itemName: "working with lcm", id: 3, url: "/working-with-lcm" },
      { itemName: "news", id: 4, url: "/news" },
      { itemName: "contact us", id: 5, url: "/contact-us" },
    ],
  };

  listenToScroll = () => {
    const winScroll = window.pageYOffset
    if (winScroll > 100) {
      document.getElementById("logo").style.transform = "translate(-50%,-32%) scale(.6)"
    }
    else {
      document.getElementById("logo").style.transform = "translate(-50%,-10%) scale(1)"
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }


  render() {

    return (
      <div className="navigation">
        <div className="navigation__container">
          <ul className="navigation-bar">
            {this.state.navbar.map((item) => {
              return (
                <NavItem
                  itemName={item.itemName}
                  key={item.id}
                  url={item.url}
                />
              );
            })}
          </ul>
          <Link to="./">
            <img id="logo"
              src={require("./NavBarPictures/logo.svg")}
              alt="logo"
              className="logo"
            />
          </Link>
          <Link to="./">
            <img
              src={require("./NavBarPictures/instagram.svg")}
              alt="insta-img"
              className="main-insta"
            />
          </Link>

        </div>
      </div>
    );
  }
}
