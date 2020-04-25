import React from "react";
import {FadeIn} from "./Animate";

export default class ProjectLink extends React.Component {
  render() {
    return (
      <a href={this.props.href}>
        <FadeIn>
          <span>{this.props.label}</span>
        </FadeIn>
      </a>
    );
  }
}
