// packages
import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from 'history'
import { Router, Route, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';

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


// initialize google anlaytics
ReactGA.initialize('UA-165732853-1');
ReactGA.pageview(window.location.pathname + window.location.search);


// scroll to top of page on page load
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const history = createBrowserHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const App = () => (
  <React.Fragment>
    <Router history={history}>
      <ScrollToTop />
      <Route path="/mothersday" component={MothersDay} />
      <Route exact path="/" component={RexyRace}/>
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
