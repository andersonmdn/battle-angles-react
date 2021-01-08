import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import BattleAngles from "./pages/Games/BattleAngles";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
		<Route path="/Games/BattleAngles" exact component={BattleAngles} />
    </BrowserRouter>
  );
}

export default Routes;
