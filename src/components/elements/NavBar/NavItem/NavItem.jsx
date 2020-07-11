import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.scss";


export default class NavItem extends Component {
  render() {
    let { itemName, url } = this.props;
    return (
      <li className="navigation__item">
        <NavLink className="navigation__link" activeStyle={{ color: '#eea9b5' }} to={url}>
          {itemName}
        </NavLink>
      </li>
    );
  }
}
