import React from 'react';
import styled from "styled-components";
import media from "../mixins/mixins.js";
import {Reveal, FadeIn} from "../components/Animate";
import { ScrollScene } from 'scrollscene';
import {gsap, Linear, Power2} from "gsap";
import Menu from "../components/Menu/Menu";
import "../components/Nav/Nav.scss";
import NextProjectButton from "../components/NextProjectButton";


const HomeH1 = styled.h1`
  position: relative;
  left: 60%;
  padding: 5% 0 0% 0;
  width: 65%;
  margin-left: -35%;
  color: black;
  font-size: 3.5vw;
  line-height: 4.25vw;
  mix-blend-mode: difference;
  pointer-events: none;
  ${media.sm`
    font-size: 1.5rem;
    line-height: 2.75rem;
  `}
`;
const Links = styled.div`
  position: fixed;
  left: 6.5%;
  bottom: 5%;
  width: 20%;
  color: black;
  & a {
    font-size: 1vw;
    line-height: 2vw;
    display: block;
    text-align: left;
    cursor: pointer;
    mix-blend-mode: difference;
    &:hover {
      color: grey;
    }
  }
`;
const Logo = styled.img`
  width: 15%;
  margin-bottom: 5%;
  ${media.sm`
    width: 35%;
    margin-bottom: 10%;
  `}
`;


var projectName = 'About',
    projectClass = "about",
    projectYear = "2020",

    nextProjectName="Mother's Day AR",
    nextProjectClass="mothersday",
    nextProjectLink="/";




export default class Home extends React.Component {
  componentDidMount() {
    const canvasTag = document.querySelector("canvas")

    canvasTag.width = window.innerWidth * 2
    canvasTag.height = window.innerHeight * 2

    canvasTag.style.width = window.innerWidth + "px"
    canvasTag.style.height = window.innerHeight + "px"

    const context = canvasTag.getContext("2d")
    context.scale(3.5, 3.5)

    let aimX = null
    let aimY = null
    let currentX = null
    let currentY = null

    let i = 0
    const images = ["img/global/image2.svg", "img/global/image3.svg", "img/global/image1.svg"].map(src => {
      const image = document.createElement("img")
      image.src = src
      return image
    })

    document.addEventListener("mousemove", function (event) {
      aimX = event.pageX
      aimY = event.pageY
      if (currentX === null) {
        currentX = event.pageX
        currentY = event.pageY
      }

    })

    canvasTag.addEventListener("click", function () {
      i = i + 1
      if (i >= images.length) {
        i = 0
      }
    })

    const draw = function () {
      if (currentX) {
        if (images[i].complete) {
        	context.drawImage(images[i], currentX - 200, currentY - 200)
      	}

        currentX = currentX + (aimX - currentX) * 0.02
        currentY = currentY + (aimY - currentY) * 0.02
      }

      requestAnimationFrame(draw)
    }
    draw()
  }
  render() {
    return (
      <React.Fragment>
       <canvas />
        <div id="fixed">
        <div id="scroll">
        <div id="navGrid">
          <div id="nav">
            <div className="navItems">

            <h1 className="title">
              <FadeIn>
                {projectName}
              </FadeIn>
            </h1>

            <h1 className="year">
              <FadeIn>
                {projectYear}
              </FadeIn>
            </h1>

            </div>
          </div>
        </div>
          <HomeH1><Reveal>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandi.</Reveal></HomeH1>

                <HomeH1><Reveal>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem</Reveal></HomeH1>

          <HomeH1 className="footer"><Reveal>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem</Reveal></HomeH1>
        </div>
      </div>

      <Links>
        <a>Github</a>
        <a>Dribbble</a>
        <a>CodePen</a>
        <a>LinkedIn</a>
      </Links>

      <div id="navGrid">
        <div id="nav">
          <div className="navItems">
            <div className="menuBtn">
            <FadeIn>  <input type="checkbox" />
                <span />
                <span /></FadeIn>
            </div>
          </div>
        </div>
      </div>
          <NextProjectButton nextProjectLink={nextProjectLink} nextProjectName={nextProjectName}  nextProjectColor={nextProjectClass}/>

        <Menu/>
      </React.Fragment>
    );
  }
}
