import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class ProjectLink extends React.Component {
  render() {
    return (
      <a href={this.props.href}>
        <span>{this.props.label}</span>
      </a>
    );
  }
}
