import React from "react";
import {RevealNav, FadeIn} from "../Animate";

// css
import "./Nav.scss";


export default class Nav extends React.Component {
  componentDidMount() {
  }
  render() {
    const { projectName } = this.props;
    const { projectYear } = this.props;
    return (
      <div id="navGrid">
        <div id="nav">
          <div className="navItems">
              <h1 className="title">
                <RevealNav>
                  {projectName}
                </RevealNav>
              </h1>

              <h1 className="year">
                <RevealNav>
                  {projectYear}
                </RevealNav>
              </h1>
            <div className="menuBtn">
            <FadeIn>  <input type="checkbox" />
                <span />
                <span /></FadeIn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
