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
          <Link to="/">
            <img id="logo"
              src={require("./NavBarPictures/logo.svg")}
              alt="logo"
              className="logo"
            />
          </Link>
          <a href="https://www.instagram.com/langdoncoffeemerchants/">
            <svg className="main-insta" width="22" height="22" viewBox="0 0 22 22" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path id="instagram" fill-rule="evenodd" clip-rule="evenodd" d="M11.0047 5.60928C8.02341 5.60928 5.61873 8.01397 5.61873 10.9952C5.61873 13.9765 8.02341 16.3812 11.0047 16.3812C13.9859 16.3812 16.3906 13.9765 16.3906 10.9952C16.3906 8.01397 13.9859 5.60928 11.0047 5.60928ZM11.0047 14.4968C9.0781 14.4968 7.5031 12.9265 7.5031 10.9952C7.5031 9.06396 9.07341 7.49365 11.0047 7.49365C12.9359 7.49365 14.5062 9.06396 14.5062 10.9952C14.5062 12.9265 12.9312 14.4968 11.0047 14.4968ZM17.8672 5.38896C17.8672 6.0874 17.3047 6.64522 16.6109 6.64522C15.9125 6.64522 15.3547 6.08272 15.3547 5.38896C15.3547 4.69521 15.9172 4.13271 16.6109 4.13271C17.3047 4.13271 17.8672 4.69521 17.8672 5.38896ZM21.4344 6.66396C21.3547 4.98115 20.9703 3.49053 19.7375 2.2624C18.5094 1.03428 17.0187 0.649902 15.3359 0.565527C13.6015 0.46709 8.4031 0.46709 6.66873 0.565527C4.9906 0.645215 3.49998 1.02959 2.26716 2.25771C1.03435 3.48584 0.654663 4.97647 0.570288 6.65928C0.471851 8.39365 0.471851 13.5921 0.570288 15.3265C0.649976 17.0093 1.03435 18.4999 2.26716 19.728C3.49998 20.9562 4.98591 21.3405 6.66873 21.4249C8.4031 21.5233 13.6015 21.5233 15.3359 21.4249C17.0187 21.3452 18.5094 20.9608 19.7375 19.728C20.9656 18.4999 21.35 17.0093 21.4344 15.3265C21.5328 13.5921 21.5328 8.39834 21.4344 6.66396ZM19.1937 17.1874C18.8281 18.1062 18.1203 18.814 17.1968 19.1843C15.814 19.7327 12.5328 19.6062 11.0047 19.6062C9.47654 19.6062 6.1906 19.728 4.81248 19.1843C3.89373 18.8187 3.18591 18.1108 2.8156 17.1874C2.26716 15.8046 2.39373 12.5233 2.39373 10.9952C2.39373 9.46709 2.27185 6.18115 2.8156 4.80303C3.18123 3.88428 3.88904 3.17646 4.81248 2.80615C6.19529 2.25771 9.47654 2.38428 11.0047 2.38428C12.5328 2.38428 15.8187 2.2624 17.1968 2.80615C18.1156 3.17178 18.8234 3.87959 19.1937 4.80303C19.7422 6.18584 19.6156 9.46709 19.6156 10.9952C19.6156 12.5233 19.7422 15.8093 19.1937 17.1874Z" fill="back"/>
            </svg>
          </a>
        </div>
      </div>
    );
  }
}
