import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import NotFoundPage from "../shared/NotFoundPage/NotFoundPage";

export default () => (
    <div className="auth-container">
      <Switch>
        <Route path="/auth/login" component={Login}/>
        <Route path="/auth/sign-up" component={SignUp}/>
        <Route path="/auth" exact render={() => <Redirect to="/auth/login" /> }/>
        <Route path="/*" component={NotFoundPage} />
      </Switch>
    </div>
);
