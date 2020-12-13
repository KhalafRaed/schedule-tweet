import React from "react";

import './App.scss';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "components/shared/PrivateRoute";
import Auth from "components/Auth";
import Dashboard from "components/Dashboard";
import NotFoundPage from "components/shared/NotFoundPage";

function App() {
  return (
      <Switch>
        <PrivateRoute path="/Dashboard" component={Dashboard} />
        <Route path="/auth" component={Auth}/>
        <Route path="/*" component={NotFoundPage} />
      </Switch>
  );
}

export default App;
