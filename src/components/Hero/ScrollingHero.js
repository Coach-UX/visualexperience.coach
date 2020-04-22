import React from "react";
import styled from "styled-components";
import ScrollMagic from "scrollmagic";
import {gsap, Power2} from "gsap";
import media from "../../Mixins";

// Parent Components
const Wrapper = styled.div`
  grid-column: var(--gridSection-LG);
  width: 100%;
  padding-bottom: 150px;
  z-index: 1;
  position: relative;
  ${media.portrait`
    padding-bottom: 100px;
 `}
  ${media.sm`
    padding-bottom: 100px;
  `}
`;
const Trigger = styled.div`
   position: relative;
   top: 0;
   ${media.sm`
   `}
 `;
 const Device = styled.img`
   position: relative;
   width: 92%;
   z-index: 2;
   left: 50%;
   margin-left: -46%;
 `;
 const ScreenMask = styled.div`
   width: 100vw;
   height: 50vh;
   background-color: white;
   position: relative;
   margin-top: -4vh;
   z-index: 1;
   ${media.portrait`
     margin-top: -2vh;
     height: 50vh;
   `}
 `;
export class ScrollingHeroWrapper extends React.Component {
  componentDidMount() {
    // desktop
    if (window.innerWidth > window.innerHeight) {
      var deviceScale = "2.19";
      var deviceTop = "4.5%";
      var screenTop = this.props.DesktopScreenTop;
      var screenMaskHeight = this.props.DesktopScreenMaskHeight
    }
    // mobile
    else {
      var deviceScale = this.props.MobileDeviceScale;
      var deviceTop = this.props.MobileDeviceTop;
      var screenTop = this.props.MobileScreenTop;
      var screenMaskHeight = this.props.MobileScreenMaskHeight
    }
    // initalize scrollmagic controller
    var controller = new ScrollMagic.Controller();
    // gsap timeline
    var tl2 = gsap.timeline({paused:true});
    tl2.to("#screen", 0.3, { scale: deviceScale, top: screenTop, ease:Power2.easeInOut }, 0)
      .to("#device", 0.3, { scale: deviceScale, marginTop: deviceTop, ease:Power2.easeInOut }, 0)
      .to("#screenMask", 0.2, { autoAlpha: 0, height: screenMaskHeight }, 0)
      .to("#introCopy", 0.2, { autoAlpha: 0 }, 0)
      .to("#device", 0.2, { autoAlpha: 0 }, 0);
      var scaleLaptop = new ScrollMagic.Scene({ triggerElement: "#trigger", triggerHook: "0.2" })
       .setTween(tl2)
       .addTo(controller);
    } // componentDidMount
   render() {
       return(
         <React.Fragment>
           <Wrapper>
             <Trigger id="trigger"></Trigger>
             <Device id="device" className="heroDesktop" src={this.props.DesktopDevice} />
             <Device id="device" className="heroMobile" src={this.props.MobileDevice} />
             {this.props.children}
             <ScreenMask id="screenMask"></ScreenMask>
         </Wrapper>
         </React.Fragment>
       );
   }
}




// Child Components
const ScreenLaptop = styled.video`
  position: absolute;
  width: 46%;
  z-index: 0;
  top: 2.5%;
  opacity: 1;
  left: 50%;
  margin-left: -23%;
    ${media.portrait`
     width: 70%;
     top: 1.5%;
     margin-left: -35%;
   `}
`;
const ScreenPhone = styled.video`
  position: absolute;
  z-index: 0;
  opacity: 1;
  left: 50%;
  width: 32%;
  top: 5.5%;
  margin-left: -16%;
    &.adjustTop {
      top: 2.5%;
    }
`;


// laptop on desktop & mobile
export class ScrollingHeroLaptop extends React.Component {
  render() {
    return (
      <ScrollingHeroWrapper
        DesktopScreenTop={this.props.DesktopScreenTop} // 21.5%
        DesktopScreenMaskHeight={this.props.DesktopScreenMaskHeight} // 150vw
        MobileDeviceScale="1.43"
        MobileDeviceTop={this.props.MobileDeviceTop} // -28.5%
        MobileScreenTop={this.props.MobileScreenTop} // -5%
        MobileScreenMaskHeight={this.props.MobileScreenMaskHeight} // 129vw
        DesktopDevice="img/global/heroLaptop.png"
        MobileDevice="img/global/heroLaptop-mobile.png"
      >
        <ScreenLaptop id="screen" src={this.props.src} autoPlay muted playsInline loop />
      </ScrollingHeroWrapper>
    );
  }
}


// Laptop on desktop, phone on mobile
export class ScrollingHeroFlex extends React.Component {
  render() {
    return (
      <ScrollingHeroWrapper
        DesktopScreenTop={this.props.DesktopScreenTop}
        DesktopScreenMaskHeight={this.props.DesktopScreenMaskHeight}
        MobileDeviceScale="3.2"
        MobileDeviceTop={this.props.MobileDeviceTop}
        MobileScreenTop={this.props.MobileScreenTop}
        MobileScreenMaskHeight={this.props.MobileScreenMaskHeight}
        DesktopDevice="img/global/heroLaptop.png"
        MobileDevice="img/global/heroPhone-mobile.png"
      >
          <ScreenLaptop id="screen" className="screenDesktop"  src={this.props.desktop} autoPlay muted playsInline loop />
          <ScreenPhone id="screen" className={"screenMobile " + this.props.adjustmentClass} src={this.props.mobile} poster={this.props.poster} autoPlay muted playsInline loop />
      </ScrollingHeroWrapper>
    );
  }
}
