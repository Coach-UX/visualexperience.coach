import React from 'react';
import styled from "styled-components";
import media from "../mixins/mixins.js";
import {Reveal} from "./Animate.js";


/*
___ ____ _  _ ___
 |  |___  \/   |
 |  |___ _/\_  |
*/

// regular text section
const Text = styled.div`
  grid-column: var(--gridSection-SM);
  padding-bottom: var(--padding);
`;
// caption
export const Caption = styled.p`
  font-size: 1.2rem;
  grid-column: var(--gridSection-LG);
  text-align: center;
  padding-bottom: var(--padding);
  ${media.sm`
    font-size: 14px;
  `}
`;

export class TextSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Text>
          <Reveal>
            <p>{this.props.children}</p>
          </Reveal>
        </Text>
      </React.Fragment>
    );
  }
};


/*
_ _  _ ____ ____ ____ ____
| |\/| |__| | __ |___ [__
| |  | |  | |__] |___ ___]
*/
// Regular Image Sections
const Image = styled.div`
  grid-column: var(--gridSection-LG);
  width: 100%;
  padding-bottom: 10px;
  & img {
    width: 100%;
  }
  ${media.sm`
    padding-bottom: 0px;
  `}
`;
const ImageSlim = styled(Image)`
  grid-column: var(--gridSection-MD);
`;
export class ImageSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Image>
          <Reveal>
            <img src={"img/" + this.props.folder + "/" + this.props.src} />
          </Reveal>
        </Image>
        <Caption> {this.props.caption} </Caption>
      </React.Fragment>
    );
  }
};
export class ImageSectionSlim extends React.Component {
  render() {
    return (
      <React.Fragment>
      <ImageSlim>
        <Reveal>
          <img src={"img/" + this.props.folder + "/" + this.props.src} />
        </Reveal>
      </ImageSlim>
        <Caption> {this.props.caption} </Caption>
      </React.Fragment>
    );
  }
};



/*
_  _ _ ___  ____ ____
|  | | |  \ |___ |  |
 \/  | |__/ |___ |__|
*/
const Video = styled.div`
  grid-column: var(--gridSection-LG);
  width: 100%;
  padding-bottom: 10px;
  ${media.sm`
    padding-bottom: 0px;
  `}
  & video {
    width: 100%;
  }

`;
const VideoSlim = styled(Video)`
  grid-column: var(--gridSection-MD);
`;

export class VideoSection extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Video>
        <Reveal>
          <video src={"img/" + this.props.folder + "/" + this.props.src} autoPlay muted playsInline loop />
        </Reveal>
      </Video>
        <Caption> {this.props.caption} </Caption>
      </React.Fragment>
    );
  }
};
export class VideoSectionSlim extends React.Component {
  render() {
    return (
      <React.Fragment>
        <VideoSlim>
          <Reveal>
            <video src={"img/" + this.props.folder + "/" + this.props.src} autoPlay muted playsInline loop />
          </Reveal>
        </VideoSlim>
        <Caption> {this.props.caption} </Caption>
      </React.Fragment>
    );
  }
};

export class VideoSectionSlimExternal extends React.Component {
  render() {
    return (
      <React.Fragment>
      <VideoSlim>
        <Reveal>
          <video src={this.props.src} autoPlay muted playsInline loop />
        </Reveal>
      </VideoSlim>
        <Caption> {this.props.caption} </Caption>
      </React.Fragment>
    );
  }
};
