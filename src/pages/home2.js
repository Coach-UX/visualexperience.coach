import React from 'react';
import styled from "styled-components";
import media from "../mixins/mixins.js";
import {Reveal} from "../components/Animate";
import { ScrollScene } from 'scrollscene';
import {gsap, Linear, Power2} from "gsap";



// components
import MothersDay from "./mothersday";


const HomeSection = styled.div`
  position: grid;
  width: 100vw;
  height: 0vh;
  ${media.sm`
    height: 0vh;
  `}
`;
const HomeBackground = styled.span`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: white;
`;
const HomeH1 = styled.h1`
  width: 100%;
  color: black;
  font-size: 3.5rem;
  line-height: 4.75rem;
  ${media.sm`
    font-size: 1.5rem;
    line-height: 2.75rem;
  `}
`;
const Logo = styled.img`
  width: 15%;
  margin-bottom: 5%;
  ${media.sm`
    width: 35%;
    margin-bottom: 10%;
  `}
`;
const Trigger = styled.div`
  position: absolute;
  top: 1vh;
  width: 100%;
  height: 1px;
  /* background: red; */
  z-index: 2;
`;
const BackgroundColor = styled.span`
  position: absolute;
  top: 0vh;
  width: 100%;
  height: 125%;
  z-index: -1;
  background: #DB5973;
  ${media.sm`
    height: 110%;
  `}
`;


export default class Home extends React.Component {
  componentDidMount() {
// v1
    const trigger1 = document.querySelector('#trigger2')
    const home = gsap.timeline({paused:true});
    // home.to("#homeBackground", .3, { height: "0vh", ease: Power2.easeInOut },0)
    //     .to("#homeWrapper", .1, { opacity: "0"},0)
    //     .from("#navGrid",.3, {autoAlpha: 0},0)
    //     .from("#grid",.3, {autoAlpha: 0},0);

    home.to("#homeBackground", .2, {height: "0", ease: Power2.easeInOut },0)
        .to("#homeWrapper", .1, { autoAlpha: 0},0)
        .from("#navGrid",.2, {autoAlpha: 0},0)
        .from("#grid",.2, {autoAlpha: 0},0);

    const homeTransition = new ScrollScene({
      triggerElement: trigger1, triggerHook: "0",
      // scene: {reverse: false,},

      // duration: "20%",
      gsap: {
        timeline: home,
      },
    })
// v2
    // const trigger1 = document.querySelector('#trigger')
    // const home = gsap.timeline({paused:true});
    // home.to("#homeBackground", 1, { opacity: 0},0)
    //     .from("#navGrid",.1, {autoAlpha: 0},1)
    //     .from("#grid",.1, {autoAlpha: 0},1);
    //
    // const homeTransition = new ScrollScene({
    //   triggerElement: trigger1, triggerHook: "0",
    //   // scene: {reverse: false,},
    //
    //   duration: "10%",
    //   gsap: {
    //     timeline: home,
    //   },
    // })

//v3
    // const trigger0 = document.querySelector('#trigger')
    // const home = gsap.timeline({paused:true});
    // home.to("#homeBackground", .3, { height: "0vh", ease:Power2.easeIn },0)
    //     .to("#homeWrapper", .1, { opacity: "0"},0);
    //
    // const homeTransition = new ScrollScene({
    //   triggerElement: trigger0, triggerHook: "0",
    //   gsap: {
    //     timeline: home,
    //   },
    // })
    // const trigger1 = document.querySelector('#trigger')
    // const project = gsap.timeline({paused:true});
    // project.from("#navGrid",1, {autoAlpha: 0},0)
    //     .from("#grid",1, {autoAlpha: 0},0);
    //
    // const projectTransition = new ScrollScene({
    //   triggerElement: trigger1, triggerHook: "0",
    //   duration: "10%",
    //   offset: -100,
    //   gsap: {
    //     timeline: project,
    //   },
    // })


    const trigger2 = document.querySelector('#projectBackground')
    const parallax = gsap.timeline({paused:true});
    parallax.to("#projectBackground", 1, { transform: "translateY(-20%)", ease: Linear.easeNone })
    const parallaxIntro = new ScrollScene({
      triggerElement: trigger2, triggerHook: "0",
      duration: "125%",
      gsap: {
        timeline: parallax,
      },
    })

  }
  render() {
    return (
      <React.Fragment>
      <div id="home">
        <HomeSection id="homeSection" />
        <div id="project">
        <Reveal>
          <MothersDay />
        </Reveal>
        </div>
        <HomeBackground id="homeBackground">
          <div id="homeWrapper">
          <Logo src="img/global/logo.svg"/>
          <HomeH1>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandi.</HomeH1>
          </div>
        </HomeBackground>
        <BackgroundColor id="projectBackground"/>
        <Trigger id="trigger2"/>


      </div>
      </React.Fragment>
  );
  }
}
