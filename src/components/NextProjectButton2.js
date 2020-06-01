import React from "react";
import { ScrollScene } from 'scrollscene'
import {gsap, Power3, Power2, Linear} from "gsap";
import DelayLink from 'react-delay-link';
import styled from "styled-components";
import media from "../mixins/mixins.js";
import $ from "jquery";


const NextProject = styled.div`
  width: 100%;
  text-align: center;
  line-height: 1rem;
  height: 0;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  #wrapper {
    position: absolute;
    bottom: 37%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    transition: bottom .3s ease;
    cursor: pointer;
    &:hover {
       bottom: 34%;
    }
    ${media.portrait`
      bottom: 32%;
      &:hover {
         bottom: 32%;
      }
    `}
    ${media.sm`
      bottom: 35%;
      &:hover {
         bottom: 35%;
      }
    `}
  }
  li {
    width: 100%;
    text-align: center;
    line-height: 2.75rem;
    ${media.sm`
      line-height: 30px;
    `}
  }
  p {
    margin-bottom: 20px;
    ${media.sm`
      margin-bottom: 10px;
    `}
  }
`;
// gsap animation that triggers when button is clicked
function nextProjectTransition() {
  var nextProjectAnim = gsap.timeline({paused:true});
  nextProjectAnim.to("#nextProject", 0, {overflow: "hidden"},0)
                  .to("#nextProjectLabel", .2, {opacity: "0", ease:Power2.easeInOut},0)
                  .to("#progressBar", .2, {opacity: 0, ease:Power3.easeInOut},0)
                  .to("#wrapper", .3, {top: top, ease: Power2.easeInOut, delay: .2}, 0)
                  .to("#wrapper li", .2, {fontSize: fontSize, ease:Power2.easeInOut, delay: .2}, 0)
                  .to("#nextProject", .3, {height: "100vh", ease:Power2.easeInOut, delay: .2}, 0);
  nextProjectAnim.play();
}

// when to trigger next project button to show
// portrait
if (window.innerWidth < window.innerHeight) {
  var height = "25vh";
  var triggerHook = 1;
  var top = "17px";
  var fontSize = "1.5rem";
  var duration = "25%";
}
// mobile
if ($(window).width() < 480) {
  var height = "25vh";
  var triggerHook = 1;
  var top = "4px";
  var fontSize = "18px";
  var duration = "25%";
}
// desktop
if (window.innerWidth > window.innerHeight) {
  var height = "40vh";
  var triggerHook = 1;
  var top = "17px";
  var fontSize = "1.5rem";
  var duration = "40%";
}

export default class NextProjectButton extends React.Component {
  componentDidMount() {
    // make button appear once user reaches the end of the page
    const trigger = document.querySelector('#nextProjectTrigger')
    const nextProjectTimeline = gsap.timeline({paused:true});
    nextProjectTimeline.to("#nextProject", 1, {height: height, pointerEvents: "all", ease:Linear.easeNone},0)

    const nextProject = new ScrollScene({
      triggerElement: trigger, triggerHook: triggerHook,
      duration: duration,
      gsap: {
        timeline: nextProjectTimeline,
      },
    })
 }
  render() {
    return (
        <DelayLink id="nextProjectBtn" to={this.props.nextProjectLink} delay={500} clickAction={nextProjectTransition} replace={false}>
          <NextProject id="nextProject" className={this.props.nextProjectColor}>
          <div id="wrapper">
            <p id="nextProjectLabel"> Next Project</p>
            <li>
            {this.props.nextProjectName}
            </li>
          </div>
          </NextProject>
       </DelayLink>
    );
  }
}
