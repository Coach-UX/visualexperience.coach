import React from "react";
import {gsap, Power2} from "gsap";

// css
import "./Nav.scss";

export default class Nav extends React.Component {
  componentDidMount() {
    // fade in year, intro copy, hero image immediately on page load
    var pageLoad = gsap.timeline();
    pageLoad.from(".year", .7, {autoAlpha: 0, transform: "translateY(10px)", ease:Power2.easeInOut}, 0)
             .from(".title", .7, {autoAlpha: 0, transform: "translate(-50%, 10px)", ease:Power2.easeInOut}, 0)
             .from("#introCopy", .7, {autoAlpha: 0, transform: "translateY(10px)", ease:Power2.easeInOut}, 0)
             .from(".heroDesktop", .7, {autoAlpha: 0, transform: "translateY(10px)", ease:Power2.easeInOut}, 0)
             .from(".heroMobile", .7, {autoAlpha: 0, transform: "translateY(10px)", ease:Power2.easeInOut}, 0)
             .from("#screenMask", .7, {autoAlpha: 0, ease:Power2.easeInOut}, 0)
             .from("a", .7, {autoAlpha: 0, ease:Power2.easeInOut}, 0)
             .from("#screen", .7, {autoAlpha: 0, transform: "translateY(10px)", ease:Power2.easeInOut}, 0);
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
