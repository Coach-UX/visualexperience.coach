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
            <h1 className="menu-label">
                
            </h1>

              <h1 className="title">
                  {projectName}
              </h1>

              <h1 className="year">
                <FadeIn>
                  {projectYear}
                </FadeIn>
              </h1>
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
