import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import appRoutes from "./constants/appRoutes";
import EventPage from './components/EventPage/EventPage'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={appRoutes.index} exact={true} component={LandingPage} />
        <Route
          path={appRoutes.events}
          exact={true}
          component={EventPage}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
