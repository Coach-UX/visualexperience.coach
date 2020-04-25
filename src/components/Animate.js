import React from "react";
import {Animated} from "react-animated-css";

export class FadeIn extends React.Component {
    render() {
        return(
          <Animated animationIn="fadeIn" animationInDuration={1000} isVisible={true}>
            {this.props.children}
          </Animated>
        );
    }
}
