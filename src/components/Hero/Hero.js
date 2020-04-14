import React from 'react';
import styled from "styled-components";
import media from "../../Mixins";

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
const IntroCopy = styled.h1`
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
        <HeroContainer>
          <IntroCopy id="introCopy">
            {this.props.children}
          </IntroCopy>
        </HeroContainer>
      </React.Fragment>
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

const Video = styled.video`
  grid-column: var(--gridSection-LG);
  width: 60%;
  z-index: 1;
  position: relative;
  object-fit: cover;
  height: 80%;
  margin: 0 20%;
  box-shadow: 0 100px 70px -50px rgba(0,0,0,.15);
  ${media.sm`
    width: 80%;
    margin: 0 10%;
    height: 60%;
  `}
  ${media.portrait`
    height: 60%;
    width: 80%;
    margin: 0 10%;
  `}
`;
export class HeroVideo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Video className="heroDesktop" src={"img/" + this.props.projectClass + "/hero.mp4"} autoPlay muted playsInline loop />
        <Video className="heroMobile" src={"img/" + this.props.projectClass + "/hero.mp4"} autoPlay muted playsInline loop/>
      </React.Fragment>
    );
  }
};
