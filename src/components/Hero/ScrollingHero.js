import React from "react";
import styled from "styled-components";
import { ScrollScene } from 'scrollscene'
import {gsap, Power2} from "gsap";
import media from "../../mixins/mixins.js";
import {FadeIn} from "../Animate";


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
      var scale = this.props.Desktop_Scale;
      var screenTop = this.props.Desktop_ScreenTop;
      var maskHeight = this.props.Desktop_MaskHeight
    }
    // mobile
    else {
      var scale = this.props.Mobile_Scale;
      var screenTop = this.props.Mobile_ScreenTop;
      var maskHeight = this.props.Mobile_MaskHeight
    }
    // gsap timeline
    const trigger = document.querySelector('#trigger')
    const tl1 = gsap.timeline({paused:true});
    tl1.to("#screen", 0.3, { scale: scale, top: screenTop, ease:Power2.easeInOut }, 0)
      .to("#device", 0.3, { scale: scale, ease:Power2.easeInOut }, 0)
      .to("#screenMask", 0.2, { autoAlpha: 0, height: maskHeight }, 0)
      .to("#introCopy", 0.2, { autoAlpha: 0 }, 0)
      .to("#device", 0.2, { autoAlpha: 0 }, 0);
     const scaleLaptop = new ScrollScene({
       triggerElement: trigger, triggerHook: "0.2",
       gsap: {
         timeline: tl1,
       },
     })

    } // componentDidMount
   render() {
       return(
         <React.Fragment>
           <Wrapper id={this.props.id}>
             <FadeIn>
               <Trigger id="trigger"></Trigger>
               <Device id="device" className="heroDesktop" src={this.props.DesktopDevice} />
               <Device id="device" className="heroMobile" src={this.props.MobileDevice} />
               {this.props.children}
               <ScreenMask id="screenMask"></ScreenMask>
             </FadeIn>
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
  width:18.5%;
  top: 2.5vw;
  margin-left:-9.25%;
    &.adjustTop {
      top: 2.5%;
    }
    ${media.portrait`
      width: 32%;
      top: 5%;
      margin-left: -15.9%;
   `}
`;


// phone on desktop & mobile
export class ScrollingHeroPhone extends React.Component {
  render() {
    return (
      <ScrollingHeroWrapper
        Mobile_Scale="3.2"
        Mobile_ScreenTop={this.props.Mobile_ScreenTop}
        Mobile_MaskHeight={this.props.Mobile_MaskHeight}
        DesktopDevice={"img/" + this.props.folder + "/hero.png"}
        MobileDevice={"img/" + this.props.folder + "/hero-mobile.png"}
        id={this.props.id}
      >
        <ScreenPhone id="screen" src={this.props.src} autoPlay muted playsInline loop />
      </ScrollingHeroWrapper>
    );
  }
}

// laptop on desktop & mobile
export class ScrollingHeroLaptop extends React.Component {
  render() {
    return (
      <ScrollingHeroWrapper
        Desktop_Scale="2.19"
        Desktop_ScreenTop={this.props.Desktop_ScreenTop} // 21.5%
        Desktop_MaskHeight={this.props.Desktop_MaskHeight} // 150vw
        Mobile_Scale="1.43"
        Mobile_ScreenTop={this.props.Mobile_ScreenTop} // -5%
        Mobile_MaskHeight={this.props.Mobile_MaskHeight} // 129vw
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
        Desktop_Scale="2.19"
        Desktop_ScreenTop={this.props.Desktop_ScreenTop}
        Desktop_MaskHeight={this.props.Desktop_MaskHeight}
        Mobile_Scale="3.2"
        Mobile_ScreenTop={this.props.Mobile_ScreenTop}
        Mobile_MaskHeight={this.props.Mobile_MaskHeight}
        DesktopDevice="img/global/heroLaptop.png"
        MobileDevice="img/global/heroPhoneWeb-mobile.png"
      >
          <ScreenLaptop id="screen" className="screenDesktop"  src={this.props.desktop} autoPlay muted playsInline loop />
          <ScreenPhone id="screen" className={"screenMobile " + this.props.adjustmentClass} src={this.props.mobile} poster={this.props.poster} autoPlay muted playsInline loop />
      </ScrollingHeroWrapper>
    );
  }
}








// iframe Components
const Iframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 110vh;
  left: .1%;
  transform: scale(.48);
  z-index: 0;
  top: -21%;
  opacity: 1;
  border: unset;
    ${media.portrait`
      height: 90vh;
      transform: scale(.32);
      top: -26%;
   `}
`;
export class ScrollingHeroWrapperiframe extends React.Component {
  componentDidMount() {
    // desktop
    if (window.innerWidth > window.innerHeight) {
      var scale = this.props.Desktop_Scale;
      var screenTop = this.props.Desktop_ScreenTop;
      var maskHeight = this.props.Desktop_MaskHeight
    }
    // mobile
    else {
      var scale = this.props.Mobile_Scale;
      var screenTop = this.props.Mobile_ScreenTop;
      var maskHeight = this.props.Mobile_MaskHeight
    }
     const trigger = document.querySelector('#trigger')
     const tl2 = gsap.timeline({paused:true});
     tl2.to("#screen", 0.3, {scale: "1", top: screenTop, ease:Power2.easeInOut }, 0)
       .to("#device", 0.3, { scale: scale, ease:Power2.easeInOut }, 0)
       .to("#screenMask", 0.2, { autoAlpha: 0, height: maskHeight }, 0)
       .to("#introCopy", 0.2, { autoAlpha: 0 }, 0)
       .to("#device", 0.2, { autoAlpha: 0 }, 0);

      const scaleLaptop = new ScrollScene({
        triggerElement: trigger, triggerHook: "0.3",
        gsap: {
          timeline: tl2,
        },
      })
    } // componentDidMount
   render() {
       return(
         <React.Fragment>
          <Wrapper>
            <FadeIn>
               <Trigger id="trigger"></Trigger>
               <Device id="device" className="heroDesktop" src={this.props.DesktopDevice} />
               <Device id="device" className="heroMobile" src={this.props.MobileDevice} />
               {this.props.children}
               <ScreenMask id="screenMask"></ScreenMask>
             </FadeIn>
          </Wrapper>
         </React.Fragment>
       );
   }
}


export class ScrollingHeroiframe extends React.Component {
  render() {
    return (
      <ScrollingHeroWrapperiframe
        Desktop_Scale="2.19"
        Desktop_ScreenTop={this.props.Desktop_ScreenTop}
        Desktop_MaskHeight={this.props.Desktop_MaskHeight}
        Mobile_Scale="3.2"
        Mobile_ScreenTop={this.props.Mobile_ScreenTop}
        Mobile_MaskHeight={this.props.Mobile_MaskHeight}
        DesktopDevice="img/global/heroLaptop.png"
        MobileDevice="img/global/heroPhoneWeb-mobile.png"
      >
      <Iframe id="screen" src={this.props.src} scrolling="no" />
      </ScrollingHeroWrapperiframe>
    );
  }
}
