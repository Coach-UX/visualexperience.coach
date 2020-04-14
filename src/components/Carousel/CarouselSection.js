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
      padding-top: 55px;
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
  wrapAround: "true",
  arrowShape:
    "M18.4827369,0.710118336 L34.6224202,16.8498017 C35.0146078,17.2419892 35.0147822,17.8776764 34.6212697,18.2711889 L34.0101666,18.882292 C33.6173437,19.2751149 32.9791226,19.2737856 32.5887794,18.8834425 L17.779,4.073 L2.74375914,19.1095345 C2.38344239,19.4698512 1.81191601,19.4987005 1.41715504,19.192041 L1.32237194,19.108384 L0.711268865,18.4972809 C0.317756375,18.1037684 0.317930808,17.4680812 0.710118336,17.0758937 L0.710118336,17.0758937 L16.3619282,1.42308149 C16.3887566,1.38808005 16.4181958,1.35442273 16.4502466,1.32237194 L17.0613497,0.711268865 C17.4541726,0.318445918 18.0923937,0.319775194 18.4827369,0.710118336 Z"
};


class CarouselSection extends React.Component {
  render() {
    const { caption } = this.props;
    return (
      <div className="carouselSection">
      <div className={this.props.color} id="prevBtn" />
      <div className={this.props.color} id="nextBtn" />
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
class CarouselSectionSlim extends React.Component {
  render() {
    const { caption } = this.props;
    return (
      <div className="carouselSectionSlim">
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

export {CarouselSection, CarouselSectionSlim, CarouselImage, CarouselVideo};
