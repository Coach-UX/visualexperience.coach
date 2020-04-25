// packages
import React from "react";
import ReactDOM from "react-dom";
import { gsap } from "gsap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

// css
import "../src/style.scss";

// pages
import MothersDay from "./pages/mothersday";
import RexyRace from "./pages/rexyrace";
import MBJ from "./pages/mbj";
import Signature from "./pages/signature";
import Isetan from "./pages/isetan";
import LifeCoach from "./pages/lifecoach";
import SceneStealers from "./pages/scenestealers";
import NewYorkDrive from "./pages/newyorkdrive";
import RainbowHockey from "./pages/rainbowhockey";




const App = () => (
  <React.Fragment>
    <Router>
      <ScrollToTop />

      <Route exact path="/" component={MothersDay} />
      <Route path="/rexyrace" component={RexyRace}/>
      <Route path="/mbj" component={MBJ}/>
      <Route path="/signature" component={Signature}/>
      <Route path="/isetan" component={Isetan}/>
      <Route path="/lifecoach" component={LifeCoach}/>
      <Route path="/scenestealers" component={SceneStealers}/>
      <Route path="/newyorkdrive" component={NewYorkDrive}/>
      <Route path="/rainbowhockey" component={RainbowHockey}/>

    </Router>
  </React.Fragment>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
