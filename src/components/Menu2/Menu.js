import React from "react";
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import {gsap, Linear, Power2} from "gsap";
import $ from 'jquery';

// css
import "./Menu.scss";


function menuTransition() {
  var theColorIs = $('.menuBackground').css("backgroundColor");
  var menuBtnAnim = gsap.timeline();
    menuBtnAnim.to("#menu", .3, {width: "100%", ease: Power2.easeIn})
               .to("#menu", 0, {backgroundColor: "" + theColorIs + ""}, 0)
               .to("li", 0, {pointerEvents: "none", opacity: ".3"}, 0)
               .to(".menuItems", .5, {autoAlpha: 0, ease: Power2.easeInOut}, 0);
    menuBtnAnim.play();
    $('input[type="checkbox"]').prop('checked', false);


}

export default class Menu extends React.Component {
  componentDidMount() {
    $(".menuBtn").click(function(){
      $("#menu").animate({ width: "toggle" });
      $(".menuOverlay").fadeToggle(500);
      $("#menu").css('transition', 'width 0s ease');
    });
    // close menu by clicking outside of menu
    $(".menuOverlay").click(function(){
        $(".menuBtn").click();
        $('input[type="checkbox"]').prop('checked', false);
    });
  }
  render() {
    return (
      <React.Fragment>
      <div id="menu">
        <ul className="menuItems">
          <p>Projects</p>
              <ul className="menuProject">
                <li className="rexyrace">
                  <DelayLink to="/" delay={500} clickAction={menuTransition} >  Rexy's Holiday Race </DelayLink>
                </li>
                <li className="lifecoach">
                  <DelayLink to="/lifecoach" delay={500} clickAction={menuTransition}>  Life Coach  </DelayLink>
                </li>
                <li className="mbj">
                  <DelayLink to="/" delay={500} clickAction={menuTransition}> Coach x MBJ </DelayLink>
                </li>
                <li className="scenestealers">
                  <DelayLink to="/scenestealers" delay={500} clickAction={menuTransition}> Scene Stealers  </DelayLink>
                </li>
                <li className="arcade">
                  <DelayLink to="/arcade" delay={500} clickAction={menuTransition}> The Arcade  </DelayLink>
                </li>
                  <div className="menuBackground" />
              </ul>
        </ul>
      </div>
      <div className="menuOverlay"></div>
      </React.Fragment>
    );
  }
}
