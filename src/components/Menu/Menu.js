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
    menuBtnAnim.to("#menu", .1, {width: "100%", backgroundColor: "" + theColorIs + "", ease: Power2.easeIn})
               .to(".menuItems", .5, {autoAlpha: 0, ease: Power2.easeInOut});
    menuBtnAnim.play();
    $('input[type="checkbox"]').prop('checked', false);

}

export default class Menu extends React.Component {
  componentDidMount() {
    $(".menuBtn").click(function(){
      $("#menu").animate({ width: "toggle" });
      $(".menuOverlay").fadeToggle(500);
      $(".menuItems").children().fadeToggle(500);
      $("#menu").css('transition', 'width 0s ease');
    });
    // close menu by clicking outside of menu
    $(".menuOverlay").click(function(){
        $(".menuBtn").click();
        $('input[type="checkbox"]').prop('checked', false);
    });
    // when menu item is hovered, open child menu
    $(".menuYear").hover(function() {
      $(this).children(".menuProject").slideDown(0);
      $("#menu").css('transition', 'width .3s ease');
      $("#menu").css('width', '60%');
    }, function() {
      $(this).children(".menuProject").slideUp(0);
      $("#menu").css('width', '17%');
    });
  }
  render() {
    return (
      <React.Fragment>
      <div id="menu">
        <ul className="menuItems">
          <p>Projects</p>
            <li className="menuYear">
              2019
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
                <li className="citysole">
                  <DelayLink to="/" delay={500} clickAction={menuTransition}> CitySole  </DelayLink>
                </li>
                  <div className="menuBackground" />
              </ul>
            </li>
            <li className="menuYear">
              2018
              <ul className="menuProject">
                <li className="scenestealers">
                  <DelayLink to="/scenestealers" delay={500} clickAction={menuTransition}> Scene Stealers  </DelayLink>
                </li>
                  <div className="menuBackground" />
              </ul>
            </li>
            <li className="menuYear">
              2017
              <ul className="menuProject">
                <li className="arcade">
                  <DelayLink to="/arcade" delay={500} clickAction={menuTransition}> The Arcade  </DelayLink>
                </li>
                  <div className="menuBackground" />
              </ul>
            </li>
          <img src="img/logo.svg" />
        </ul>
      </div>
      <div className="menuOverlay"></div>
      </React.Fragment>
    );
  }
}
