import React from "react";
import { ScrollScene } from 'scrollscene'
import {gsap, Power3, Power2} from "gsap";
import DelayLink from 'react-delay-link';
import styled from "styled-components";
import media from "../mixins/mixins.js";

const NextProject = styled.h1`
  width: 100%;
  text-align: center;
  line-height: 1rem;
  padding: 30px 0 0 0;
  cursor: pointer;
  position: fixed;
  bottom: -145px;
  color: rgba(0,0,0,0);
  /* box-shadow: 0px 0px 30px rgba(0,0,0,0.1); */
  transition: all .1s ease-in-out, padding .2s ease-in-out, bottom .3s ease-in-out;
  & #nextProjectLabel {
    display: block;
    font-size: 1.2rem;
    color: rgba(0,0,0,1);
    opacity: 1;
    transition: opacity .2s ease-in-out, line-height .2s ease-in-out;
  }
   &:hover {
     padding: 100px 0 75px 0;
     line-height: 2rem;
     transition: all .2s ease-in-out, color .5s ease-out;
     color: rgba(0,0,0,1);
     & > #nextProjectLabel {
       opacity:0;
       line-height: 0rem;
       transition:  opacity .1s ease-in-out, line-height .2s ease-in-out;
     }
   }
   ${media.portrait`
     bottom: -20vh;
     padding: 5vh 0;
     & #nextProjectLabel {
       font-size: 1rem;
     }
  `}
  ${media.touch`
    line-height: 2rem;
    color: rgba(0,0,0,1);
    &:hover {
      padding: 5vh 0;
      transition: all .2s ease-in-out, color .5s ease-out, bottom 0s;
      & > #nextProjectLabel {
        opacity:1;
        line-height: 26px;
      }
    }
 `}
`;
// gsap animation that triggers when button is clicked
function nextProjectTransition() {
  var nextProjectAnim = gsap.timeline({paused:true});
  nextProjectAnim.to("#nextProject", 0, {transition: "all 0s", ease:Power2.easeInOut}, 0)
                  .to("#nextProject", .2, {color: "rgba(0,0,0,0)", ease:Power2.easeInOut},0)
                  .to("#nextProjectLabel", .2, {color: "rgba(0,0,0,0)", ease:Power2.easeInOut},0)
                  .to("#progressBar", .2, {opacity: 0, ease:Power3.easeInOut},0)
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
    // make button appear once user reaches the end of the page
    const trigger = document.querySelector('.footer')
    const nextProjectTimeline = gsap.timeline({paused:true});
    nextProjectTimeline.to("#nextProject", 0.3, {bottom: 0, ease:Power3.easeInOut},0)
    const nextProject = new ScrollScene({
      triggerElement: trigger, triggerHook: nextProjectTriggerHook,
      gsap: {
        timeline: nextProjectTimeline,
      },
    })
 }
  render() {
    return (
        <DelayLink id="nextProjectBtn" to={this.props.nextProjectLink} delay={500} clickAction={nextProjectTransition} replace={false}>
          <NextProject id="nextProject" className={this.props.nextProjectColor}>
          <p id="nextProjectLabel"> Next Project</p>
          {this.props.nextProjectName}
          </NextProject>
       </DelayLink>
    );
  }
}
