import React from 'react';
import styled from "styled-components";
import media from "../../mixins/mixins.js";
import {Reveal} from "../Animate";


const HeroContainer = styled.div`
position: relative;
width: 100%;
grid-column: var(--gridSection-MD);
top: 0%;
padding: 20% 0;
${media.portrait`
  padding: 30% 0 30%;
`}
  ${media.sm`
    padding: 30% 0 30%;
  `}
`;
const IntroCopy = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  text-align: left;
  ${media.sm`
    width: 100%;
  `}
`;
export class IntroSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroContainer id="heroContainer">
          <IntroCopy id="introCopy">
            <Reveal>
              <h1>{this.props.children}</h1>
            </Reveal>
          </IntroCopy>
        </HeroContainer>
      </React.Fragment>
    );
  }
};


const Hero = styled.div`
  grid-column: var(--gridSection-LG);
  z-index: 1;
  position: relative;
  width: 100%;
  padding-bottom: 150px;
  ${media.sm`
      padding-bottom: 100px;
  `}
  & img {
    width:100%;
  }
  & video {
    width:100%
  }
  & .videoSmall {
    width: 60%;
    object-fit: cover;
    margin: 0 20%;
    box-shadow: 0 70px 70px -50px rgba(0,0,0,.1);
    ${media.portrait`
      width: 80%;
      margin: 0 10%;
    `}
    ${media.sm`
      width: 90%;
      margin: 0 5%;
    `}
  }
`;
export class HeroImage extends React.Component {
  render() {
    return (

      <React.Fragment>
          <Hero className="heroDesktop">
            <Reveal>
              <img src={"img/" + this.props.projectClass + "/hero.png"} alt="hero" />
            </Reveal>
          </Hero>
          <Hero className="heroMobile">
            <Reveal>
              <img src={"img/" + this.props.projectClass + "/hero-mobile.png"} alt="hero" />
            </Reveal>
          </Hero>
      </React.Fragment>

    );
  }
};

export class HeroVideoSmall extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero>
          <Reveal>
            <video className="videoSmall" src={"img/" + this.props.projectClass + "/hero.mp4"} autoPlay muted playsInline loop />
          </Reveal>
        </Hero>
      </React.Fragment>
    );
  }
};
export class HeroImageSmall extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero>
          <Reveal>
            <img className="videoSmall" src={"img/" + this.props.projectClass + "/hero.jpg"} alt="hero" />
          </Reveal>
        </Hero>
      </React.Fragment>
    );
  }
};
