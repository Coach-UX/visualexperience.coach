import React from "react";
import Flickity from "react-flickity-component";
import styled from 'styled-components';
import {Caption} from '../../components/Sections';
import media from '../../Mixins.js';

// css
import "./Carousel.scss";

// styled components
const CarouselCaption = styled(Caption)`
  padding-top: 65px;
  ${media.sm`
      padding-top: 45px;
  `}

`;

class CarouselImage extends React.Component {
  render() {
    const { src } = this.props;
    return <img className="carousel-cell" src={src} />;
  }
};
class CarouselVideo extends React.Component {
  render() {
    const { src } = this.props;
    return <video className="carousel-cell" autoPlay muted playsInline loop src={src} />;
  }
};

const flickityOptions = {
  cellAlign: "center",
  contain: true,
  arrowShape:
    "M75.735105,40.438312 C76.344587,41.0492176 77.3339066,41.0503718 77.9448122,40.4408899 C78.5557179,39.8314079 78.556872,38.8420883 77.9473901,38.2311827 L40.3878808,0.583935367 C39.778737,-0.0266314187 38.7900863,-0.0281726181 38.1790418,0.580492027 L0.959803519,37.6547718 C0.348419891,38.2637743 0.346489573,39.2530927 0.955492033,39.8644763 C1.56449449,40.4758599 2.55381289,40.4777902 3.16519652,39.8687878 L39.278295,3.89633973 L75.735105,40.438312 Z"
};

class CarouselSection extends React.Component {
  render() {
    const { caption } = this.props;
    return (
      <div className="carouselSection">
        <Flickity
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
        >
        {this.props.children}
        </Flickity>
        <CarouselCaption> {caption} </CarouselCaption>
      </div>
    );
  }
}

export {CarouselSection, CarouselImage, CarouselVideo};
