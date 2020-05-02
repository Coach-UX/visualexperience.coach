import React from "react";
import {Reveal} from "./Animate";

export default class ProjectLink extends React.Component {
  render() {
    return (
      <a href={this.props.href} className={this.props.className} target="_blank" rel="noopener noreferrer">
        <Reveal>
          <span>{this.props.label}</span>
        </Reveal>
      </a>
    );
  }
}
