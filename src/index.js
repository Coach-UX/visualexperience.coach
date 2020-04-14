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
import MBJ from "./pages/mbj";
import LifeCoach from "./pages/lifecoach";
import SceneStealers from "./pages/scenestealers";
import Arcade from "./pages/arcade";


ScrollMagicPluginGsap(ScrollMagic, gsap);


const App = () => (
  <React.Fragment>
    <Router>
      <ScrollToTop />

      <Route exact path="/" component={RexyRace} />
      <Route path="/mbj" component={MBJ}/>
      <Route path="/lifecoach" component={LifeCoach}/>
      <Route path="/scenestealers" component={SceneStealers}/>
      <Route path="/arcade" component={Arcade}/>

    </Router>
  </React.Fragment>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
