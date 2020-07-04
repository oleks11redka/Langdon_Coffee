import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavItem.scss";

export default class NavItem extends Component {
  render() {
    let { itemName, url } = this.props;
    return (
      <li className="navigation__item">
        <Link className="navigation__link" to={url}>
          {itemName}
        </Link>
      </li>
    );
  }
}
