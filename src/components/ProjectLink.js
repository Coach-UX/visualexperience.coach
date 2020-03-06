import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class ProjectLink extends React.Component {
  render() {
    const { href } = this.props;
    const { label } = this.props;
    return (
      <a href="{href}">
        <span>{label}</span>
      </a>
    );
  }
}
