import React from "react";
import $ from 'jquery';
import {MenuLink, MenuLinkGradient} from './MenuLink.js'
import {RevealCascade} from "../Animate";

// css
import "./Menu.scss";


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
          <RevealCascade> <p>Projects</p></RevealCascade>
          <ul className="menuProject">
              <li className="mothersday">
                <MenuLink to="/" linktext="Mother's Day AR" />
              </li>
              <li className="rexyrace">
                <MenuLink to="/rexyrace" linktext="Rexy's Holiday Race" />
              </li>
              <li className="mbj">
               <MenuLink to="/mbj" linktext="Coach x Michael B Jordan" />
              </li>
              <li className="signature">
                <MenuLink to="/signature" linktext="Art of Signature" />
              </li>
              <li className="isetan">
                <MenuLink to="/isetan" linktext='Isetan "The Stage"' />
              </li>
              <li className="lifecoach">
                <MenuLink to="/lifecoach" linktext="Life Coach" />
              </li>
              <li className="scenestealers">
                <MenuLink to="/scenestealers" linktext="Scene Stealers" />
              </li>
              <li className="newyorkdrive">
                <MenuLinkGradient to="/newyorkdrive" linktext="New York Drive" />
              </li>
              <li className="rainbowhockey">
                <MenuLinkGradient to="/rainbowhockey" linktext="Rainbow Hockey" />
              </li>
            <div className="menuBackground" />
          </ul>
          <RevealCascade>
            <img id="logo" src="img/global/logo.svg" alt="COACH logo"/>
          </RevealCascade>
        </ul>
      </div>
      <div className="menuOverlay"></div>
      </React.Fragment>
    );
  }
}
