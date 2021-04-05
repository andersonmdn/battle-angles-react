import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Games";
import BattleAngles from "./pages/BattleAngles";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
		<Route path="/Games" exact component={Game} />
		<Route path="/Games/BattleAngles" exact component={BattleAngles} />
    </BrowserRouter>
  );
}

export default Routes;
