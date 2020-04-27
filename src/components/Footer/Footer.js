import React from "react";
import "./Footer.scss";
import {Reveal} from "../Animate";


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
        <Reveal>
          <h1>{this.props.title}</h1>
        </Reveal>
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
      <Reveal>
        <div className="row">
          <p>{this.props.p}</p>
          <b>{this.props.b}</b>
        </div>
      </Reveal>
      );
  }
};
export class Award extends React.Component {
  render() {
    return (
      <Reveal>
        <a className="award" target="_blank" rel="noopener noreferrer" href={this.props.link}>
          <img src={this.props.src} alt={this.props.alt}/>
        </a>
      </Reveal>
      );
  }
};

export class Credits extends React.Component {
  render() {
    return (
      <Reveal>
        <div className="credits">
          <p><b>{this.props.left}</b></p>
          <p>{this.props.right}</p>
        </div>
      </Reveal>

    )
  }
};
