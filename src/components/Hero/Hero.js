import React from 'react';
import styled from "styled-components";
import media from "../../Mixins";

const IntroCopy = styled.h1`
  grid-column: var(--gridSection-MD);
  padding: 25% 0 15% 0;
  ${media.sm`
    padding: 10vh 0 13vh;
  `}
`;
export class IntroSection extends React.Component {
  render() {
    const { src } = this.props;
    const { caption } = this.props;
    return (
      <IntroCopy id="introCopy">
        {this.props.children}
      </IntroCopy>
    );
  }
};

const Hero = styled.img`
  grid-column: var(--gridSection-LG);
  width: 100%;
  padding-bottom: 150px;
  z-index: 1;
  position: relative;
  ${media.sm`
      padding-bottom: 100px;
  `}
`;
export class HeroImage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero className="heroDesktop" src={"img/" + this.props.projectClass + "/hero.png"} />
        <Hero className="heroMobile" src={"img/" + this.props.projectClass + "/hero-mobile.png"} />
      </React.Fragment>
    );
  }
};
