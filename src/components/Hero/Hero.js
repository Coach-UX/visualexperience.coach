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
        <Video className="heroDesktop" src={"img/" + this.props.projectClass + "/hero.mov"} autoPlay muted playsInline loop />
        <Video className="heroMobile" src={"img/" + this.props.projectClass + "/hero-mobile.mov"} autoPlay muted playsInline loop />
      </React.Fragment>
    );
  }
};

const VideoSmall = styled.video`
  grid-column: var(--gridSection-LG);
  width: 60%;
  z-index: 1;
  position: relative;
  object-fit: cover;
  margin: 0 20% 150px 20%;
  box-shadow: 0 70px 70px -50px rgba(0,0,0,.1);
  ${media.portrait`
    width: 80%;
    margin: 0 10% 100px 10%;
  `}
  ${media.sm`
    width: 90%;
    margin: 0 5% 70px 5%
  `}
`;
export class HeroVideoSmall extends React.Component {
  render() {
    return (
      <React.Fragment>
        <VideoSmall className="heroDesktop" src={"img/" + this.props.projectClass + "/hero.mp4"} autoPlay muted playsInline loop />
        <VideoSmall className="heroMobile" src={"img/" + this.props.projectClass + "/hero.mp4"} autoPlay muted playsInline loop/>
      </React.Fragment>
    );
  }
};
