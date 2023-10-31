import React from "react";
import routes from "../routes";
// import { Helmet } from "react-helmet";
// import { SideBar, Player, Header } from "../components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import config from "../config";

import "../theme/styles.scss";
import "./styles.scss";
function App() {
  return (
    <div className="App">
      {/* <Helmet {...config.APP} />
      <div className="side_bar">
        <SideBar />
      </div>
      <div className="main_page">
        <Header />
        <BrowserRouter>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
      <div className="player">
        <Player />
      </div> */}
    </div>
  );
}

export default App;
