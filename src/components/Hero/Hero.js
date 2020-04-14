import React from 'react';
import styled from "styled-components";
import media from "../../Mixins";
import { LazyGroup, Lazy } from 'react-lazy'

const HeroContainer = styled.div`
position: relative;
width: 100%;
grid-column: var(--gridSection-LG);
top: 0%;
padding: 50px 0 180px 0;
  ${media.sm`
    padding: 2vh 0 15vh;
    padding: 50px 0 100px;
  `}
`;
const Title = styled.h1`
  position: relative;
  top: 0%;
  width: 100%;
  margin-bottom: 4vh;
  white-space: pre-wrap;
  ${media.sm`
    padding: 0%;
  `}
`;
const IntroCopy = styled.h3`
  position: relative;
  width: 44%;
  padding: 0 28%;
  text-align: center;
  ${media.sm`
    width: 80%;
    padding: 0 10%;
  `}
`;

export class IntroSection extends React.Component {
  render() {
    const { src } = this.props;
    const { caption } = this.props;
    return (
      <React.Fragment>
      <HeroContainer>
        <Title className="title">
          {this.props.projectName}
        </Title>
        <IntroCopy id="introCopy">
          {this.props.children}
        </IntroCopy>
      </HeroContainer>
        </React.Fragment>
    );
  }
};

const Image = styled.img`
  grid-column: var(--gridSection-LG);
  width: 100%;
  padding-bottom: 150px;
  z-index: 1;
  position: relative;
  ${media.sm`
      padding-bottom: 100px;
  `}
`;
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
export class HeroImage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Image className="heroDesktop" src={"img/" + this.props.projectClass + "/hero.png"} />
        <Image className="heroMobile" src={"img/" + this.props.projectClass + "/hero-mobile.png"} />
      </React.Fragment>
    );
  }
};

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
