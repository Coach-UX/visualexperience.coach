// packages
import React from "react";
import ReactDOM from "react-dom";
import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

// css
import "../src/style.scss";

// pages
import RexyRace from "./pages/rexyrace";
import LifeCoach from "./pages/lifecoach";
import SceneStealers from "./pages/scenestealers";
import NewYorkDrive from "./pages/newyorkdrive";
import RainbowHockey from "./pages/rainbowhockey";


ScrollMagicPluginGsap(ScrollMagic, gsap);


const App = () => (
  <React.Fragment>
    <Router>
      <ScrollToTop />

      <Route exact path="/" component={RexyRace} />
      <Route path="/lifecoach" component={LifeCoach}/>
      <Route path="/scenestealers" component={SceneStealers}/>
      <Route path="/newyorkdrive" component={NewYorkDrive}/>
      <Route path="/rainbowhockey" component={RainbowHockey}/>

    </Router>
  </React.Fragment>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
