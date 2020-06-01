import React from "react";
import {Animated} from "react-animated-css";
import { Fade } from 'react-reveal';
import ScrollAnimation from 'react-animate-on-scroll';


export class FadeIn extends React.Component {
    render() {
        return(
          <div className="fadeIn">
            {this.props.children}
          </div>
        );
    }
}


{/*export class Reveal extends React.Component {
    render() {
        return(
          <ScrollAnimation animateIn="fadeIn" duration={0.5}>
            {this.props.children}
          </ScrollAnimation>
        );
    }
}

export class RevealNav extends React.Component {
    render() {
        return(
          <ScrollAnimation animateIn="fadeIn" duration={0.5} offset={0}>
            {this.props.children}
          </ScrollAnimation>
        );
    }
}*/}

export class Reveal extends React.Component {
    render() {
        return(
          <Fade duration={700}>
            {this.props.children}
          </Fade>
        );
    }
}

export class RevealCascade extends React.Component {
    render() {
        return(
          <Fade duration={700} cascade>
            {this.props.children}
          </Fade>
        );
    }
}

export class RevealNav extends React.Component {
    render() {
        return(
          <Fade duration={700}>
            {this.props.children}
          </Fade>
        );
    }
}
