import React from "react";


export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
          {this.props.children}
      </div>
    );
  }
};
export class FooterSection extends React.Component {
  render() {
    return (
    <div className="results">
      <div className="column">
        <h2>{this.props.title}</h2>
      </div>
      <div className="column">
        {this.props.children}
      </div>
    </div>
  );
  }
};
export class Results extends React.Component {
  render() {
    return (
        <div className="row">
          <p>{this.props.p}</p>
          <b>{this.props.b}</b>
        </div>
      );
  }
};
export class Award extends React.Component {
  render() {
    return (
        <a className="award" target="_blank" href={this.props.link}>
          <img src={this.props.src} />
        </a>
      );
  }
};
