import React from "react";
import ScrollMagic from "scrollmagic";
import {gsap, Power3, Power2} from "gsap";
import DelayLink from 'react-delay-link';
import styled from "styled-components";
import media from "../Mixins";

const NextProject = styled.h2`
  width: 100%;
  height: 30px;
  text-align: center;
  padding: 50px 0;
  cursor: pointer;
  position: fixed;
  bottom: -145px;
  font-size: 25px;
  transition: padding .2s ease-in-out, bottom .3s ease-in-out;
  &:hover {
    padding: 70px 0;
    transition: padding .2s ease-in-out;
  }
  ${media.sm`
    bottom: -210px;
    padding: 40px 0;
    font-size: 20px;
  `}
  ${media.portrait`
    bottom: -210px;
    padding: 40px 0;
    font-size: 20px;
  `}
`;

// gsap animation that triggers when button is clicked
function nextProjectTransition() {
  var nextProjectAnim = gsap.timeline();
  {/* if (window.innerWidth > window.innerHeight) {
    nextProjectAnim.to("#nextProject", .5, {whiteSpace: "pre-wrap", lineHeight: "7.5vw", fontSize:"8vw", padding: "19vh 0 77.8vh", ease:Power2.easeInOut});
  }
  else {
    nextProjectAnim.to("#nextProject", .5, {whiteSpace: "pre-wrap", lineHeight: "48px", fontSize:"50px", padding: "22vh 0 74.3vh", ease:Power2.easeInOut});
  } */}
  nextProjectAnim.to("#nextProject", 0, {transition: "all 0s", ease:Power2.easeInOut}, 0)
                 .to("#nextProject", .2, {color: "rgba(0,0,0,0)", ease:Power2.easeInOut},0)
                 .to("#nextProject", .3, {padding: "19vh 0 77.8vh", ease:Power2.easeInOut});
  nextProjectAnim.play();
}

// when to trigger next project button to show
if (window.innerWidth > window.innerHeight) {
  var nextProjectTriggerHook = "0.5"; // desktop
}
else {
  var nextProjectTriggerHook = "0.7"; // mobile
}

export default class NextProjectButton extends React.Component {
  componentDidMount() {
    // make button only appear once user reaches the end of the page
    var controller = new ScrollMagic.Controller();
    var nextProject = new ScrollMagic.Scene({triggerElement: ".footer", triggerHook: nextProjectTriggerHook})
    .setTween(gsap.to("#nextProject", 0.3, {
      bottom: 0,
      ease:Power3.easeInOut
    }))
    .addTo(controller);
 }
  render() {
    const { nextProjectName } = this.props;
    const { nextProjectLink } = this.props;
    const { nextProjectColor } = this.props;
    return (
        <DelayLink id="nextProjectBtn" to={nextProjectLink} delay={500} clickAction={nextProjectTransition} replace={false}>
          <NextProject id="nextProject" className={nextProjectColor}>
          {nextProjectName}
          </NextProject>
       </DelayLink>
    );
  }
}
