import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import "./NavBar.scss";

export default class NavBar extends Component {
  navbar = [
    { itemName: "about us", id: 1, url: "/about_us" },
    { itemName: "origins", id: 2, url: "/origins" },
    { itemName: "working with lcm", id: 3, url: "/working_with_lcm" },
    { itemName: "news", id: 4, url: "/news" },
    { itemName: "contact us", id: 5, url: "/contact_us" },
  ];

  render() {
    return (
      <ul className="navigation">
        {this.navbar.map((item) => {
          return (
            <NavItem itemName={item.itemName} key={item.id} url={item.url} />
          );
        })}
      </ul>
    );
  }
}
