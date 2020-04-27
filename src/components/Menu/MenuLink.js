import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import {gsap, Power2} from "gsap";
import $ from 'jquery';
import {RevealCascade} from "../Animate";


function menuTransition() {
  var theColorIs = $('.menuBackground').css("backgroundColor");
  var menuBtnAnim = gsap.timeline();
    menuBtnAnim.to("#menu", .3, {width: "100%", ease: Power2.easeIn})
               .to("#menu", 0, {backgroundColor: "" + theColorIs + ""}, 0)
               .to("li", 0, {pointerEvents: "none", opacity: ".3"}, 0)
               .to(".menuItems", .3, {autoAlpha: 0, ease: Power2.easeInOut}, 0);
    menuBtnAnim.play();
    $('input[type="checkbox"]').prop('checked', false);
}
function menuTransition_gradient() {
  var theColorIs = $('.menuBackground').css("backgroundImage");
  var menuBtnAnim = gsap.timeline();
    menuBtnAnim.to("#menu", .3, {width: "100%", ease: Power2.easeIn})
               .to("#menu", 0, {backgroundImage: "" + theColorIs + ""}, 0)
               .to("li", 0, {pointerEvents: "none", opacity: ".3"}, 0)
               .to(".menuItems", .3, {autoAlpha: 0, ease: Power2.easeInOut}, 0);
    menuBtnAnim.play();
    $('input[type="checkbox"]').prop('checked', false);
}

class MenuLink_ extends Component {
    render() {
        if(this.props.history.location.pathname === this.props.to){
            return <span><RevealCascade>{this.props.linktext}</RevealCascade></span>
        }
        return <DelayLink delay={300} clickAction={menuTransition} to={this.props.to}><RevealCascade>{this.props.linktext}</RevealCascade></DelayLink>
    }
}

class MenuLink_Gradient extends Component {
  render() {
      if(this.props.history.location.pathname === this.props.to){
          return <span><RevealCascade>{this.props.linktext}</RevealCascade></span>
      }
      return <DelayLink delay={300} clickAction={menuTransition_gradient} to={this.props.to}><RevealCascade>{this.props.linktext}</RevealCascade></DelayLink>
  }
}

export const MenuLink = withRouter(MenuLink_);
export const MenuLinkGradient = withRouter(MenuLink_Gradient);
