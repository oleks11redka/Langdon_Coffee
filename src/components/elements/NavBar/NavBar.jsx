import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default class NavBar extends Component {
  state = {
    navbar: [
      { itemName: "about us", id: 1, url: "/about-us" },
      { itemName: "origins", id: 2, url: "/origins" },
      { itemName: "working with lcm", id: 3, url: "/working-with-lcm" },
      { itemName: "news", id: 4, url: "/news" },
      { itemName: "contact us", id: 5, url: "/contact-us" },
    ],
  };

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
            <img
              src={require("./NavBarPictures/logo.svg")}
              alt="logo"
              className="main-logo"
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
