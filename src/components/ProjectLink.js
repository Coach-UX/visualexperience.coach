import React from "react";

export default class ProjectLink extends React.Component {
  render() {
    return (
      <a href={this.props.href}>
        <span>{this.props.label}</span>
      </a>
    );
  }
}
