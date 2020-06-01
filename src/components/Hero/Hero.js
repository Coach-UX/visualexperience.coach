import React from 'react';
import styled from "styled-components";
import media from "../../mixins/mixins.js";
import {Reveal, FadeIn} from "../Animate";


const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  grid-column: var(--gridSection-MD);
  top: 0%;
  padding: 20% 0;
    ${media.portrait`
      padding: 30% 0 30%;
    `}
  & #introCopy {
    position: relative;
    width: 100%;
    padding: 0;
    text-align: left;
      ${media.sm`
        width: 100%;
      `}
  }
`;
export class IntroSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroContainer id="heroContainer">
          <div id="introCopy">
            <FadeIn>
              <h1>{this.props.children}</h1>
            </FadeIn>
          </div>
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
`;
export class HeroImage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero className="heroDesktop">
          <FadeIn>
            <img src={"img/" + this.props.projectClass + "/hero.png"} alt="hero" />
          </FadeIn>
        </Hero>
        <Hero className="heroMobile">
          <FadeIn>
            <img src={"img/" + this.props.projectClass + "/hero-mobile.png"} alt="hero" />
          </FadeIn>
        </Hero>
      </React.Fragment>
    );
  }
};




const HeroSlim = styled(Hero)`
  & video, img {
    width: 60%;
    height: 60vh;
    object-fit: cover;
    margin: 0 20%;
    box-shadow: 0 50px 50px -50px rgba(0,0,0,.1);
    ${media.portrait`
      width: 80%;
      height: 50vh;
      margin: 0 10%;
    `}
    ${media.sm`
      height: 40vh;
    `}
  }
`;
export class HeroVideoSlim extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSlim>
          <FadeIn>
            <video src={"img/" + this.props.projectClass + "/hero.mp4"} autoPlay muted playsInline loop />
          </FadeIn>
        </HeroSlim>
      </React.Fragment>
    );
  }
};
export class HeroImageSlim extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSlim>
          <FadeIn>
            <img src={"img/" + this.props.projectClass + "/hero.jpg"} alt="hero" />
          </FadeIn>
        </HeroSlim>
      </React.Fragment>
    );
  }
};
