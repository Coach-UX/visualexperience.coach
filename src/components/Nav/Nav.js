import React from "react";
import {FadeIn} from "../Animate";

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
            <FadeIn>
              <h1 className="title">{projectName}</h1>
              <h1 className="year">{projectYear}</h1>
            </FadeIn>
            <div className="menuBtn">
              <FadeIn>
                <input type="checkbox" />
                <span />
                <span />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
