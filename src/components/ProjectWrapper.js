import React from 'react';
import Styled from 'styled-components';
import { ScrollScene } from 'scrollscene'
import media from "../mixins/mixins.js";
import {gsap, Linear} from "gsap";

import Menu from "../components/Menu/Menu";
import Nav from "../components/Nav/Nav";
import NextProjectButton from "../components/NextProjectButton2";
import ProgressBar from "react-scroll-progress-bar";

const Grid = Styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-gap: 10px;
  overflow-x: hidden;
  padding-bottom: 39vh;
    ${media.portrait`
      padding-bottom: 14vh;
    `}
  & a {
    grid-column: 7 / 10;
    padding-bottom: var(--padding);
  }
`;
const BackgroundColor = Styled.span`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  &.lifecoach {
    height: 120%;
  }
  &.mbj {
    height: 120%;
  }
`;
const NextProjectTrigger = Styled.span`
    width: 100%;
    height: 1vh;
    grid-column: var(--gridSection-SM);
    visibility: hidden;
    bottom: 0;
    left: 0;
    ${media.portrait`
      transform: translateY(-10vh);
    `}
`;



export default class ProjectWrapper extends React.Component {
  componentDidMount() {
    const trigger = document.querySelector('#backgroundColor')
    const parallax = gsap.timeline({paused:true});
    parallax.to("#backgroundColor", 1, { transform: "translateY(-20%)", ease: Linear.easeNone })
    const parallaxIntro = new ScrollScene({
      triggerElement: trigger, triggerHook: "0",
      duration: window.innerHeight,
      gsap: {
        timeline: parallax,
      },
    })
    {/*const section = document.querySelector("#grid")
    let currentPixel = window.pageYOffset

    const looper = function () {
      const newPixel = window.pageYOffset
      const diff = newPixel - currentPixel
      const speed = diff * .005

      section.style.transform = "skewY(" + speed + "deg)"

      currentPixel = newPixel

      requestAnimationFrame(looper)
    }
    looper()*/}

  }
  render() {
  return (
    <React.Fragment>
    <section className={this.props.projectClass}>
    <div id="progressBar">
      <ProgressBar bgcolor={"var(--" + this.props.projectClass + ")"} height=".5vh"/>
    </div>
      <Menu />
      <Nav projectName={this.props.projectName} projectYear={this.props.projectYear} />
      <BackgroundColor id="backgroundColor" className={this.props.projectClass} />

      <Grid id="grid">

        {this.props.children}

        <NextProjectTrigger id="nextProjectTrigger" />
      </Grid>
      <NextProjectButton nextProjectLink={this.props.nextProjectLink} nextProjectName={this.props.nextProjectName}  nextProjectColor={this.props.nextProjectClass}/>
    </section>
    </React.Fragment>
  );
  }
}
