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
      $("#menu").css('transition', 'width 0s ease');
      $(".menuOverlay").fadeToggle(500);
      $(".menu-label").toggleClass("menu-active");
      $("#progressBar div").toggleClass("hide-progress-bar");
      {/*$("#menu").toggleClass("menu-open");
      $(".menuBtn").toggleClass("hide-menuBtn");*/}

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
          <ul className="menuProject">
              {/*<RevealCascade> <p>Projects</p></RevealCascade>
*/}
              <li className="mothersday">
                <MenuLink to="/mothersday" linktext="Mother's Day AR" />
              </li>
              <li className="rexyrace">
                <MenuLink to="/" linktext="Rexy's Holiday Race" />
              </li>
              <li className="mbj">
               <MenuLink to="/mbj" linktext="Coach x MBJ" />
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
