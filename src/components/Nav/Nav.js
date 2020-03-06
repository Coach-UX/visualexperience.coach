import React from "react";
import {gsap, Power2} from "gsap";

// css
import "./Nav.scss";

export default class Nav extends React.Component {
  componentDidMount() {
    // fade in year, intro copy, hero image immediately on page load
    var pageLoad = gsap.timeline();
    pageLoad.from(".year", .6, {autoAlpha: 0, transform: "translateY(5px)", ease:Power2.easeInOut}, 0)
            .from("#introCopy", .6, {autoAlpha: 0, transform: "translateY(5px)", ease:Power2.easeInOut}, 0)
            .from(".heroDesktop", .6, {autoAlpha: 0, transform: "translateY(5px)", ease:Power2.easeInOut}, 0)
            .from(".heroMobile", .6, {autoAlpha: 0, transform: "translateY(5px)", ease:Power2.easeInOut}, 0)
            .from("#screen", .6, {autoAlpha: 0, transform: "translateY(5px)", ease:Power2.easeInOut}, 0);
    pageLoad.play();
  }
  render() {
    const { projectName } = this.props;
    const { projectYear } = this.props;
    return (
      <div id="navGrid">
        <div id="nav">
          <div className="navItems">
            <h1 className="title">{projectName}</h1>
            <h1 className="year">{projectYear}</h1>
            <div className="menuBtn">
              <input type="checkbox" />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
