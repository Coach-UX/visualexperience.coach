import React from "react";
import $ from 'jquery';
import {MenuLink, MenuLinkGradient} from './MenuLink.js'

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
          <p>Projects</p>
              <ul className="menuProject">
                <li className="rexyrace">
                  <MenuLink to="/" linktext="Rexy's Holiday Race" />
                </li>
                <li className="mbj">
                  <MenuLink to="/mbj" linktext="Coach x MBJ" />
                </li>
                <li className="lifecoach">
                  <MenuLink to="/lifecoach" linktext="Life Coach" />
                </li>
                <li className="scenestealers">
                  <MenuLink to="/scenestealers" linktext="Scene Stealers" />
                </li>
                <li className="arcade">
                  <MenuLinkGradient to="/arcade" linktext="The Arcade" />
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
