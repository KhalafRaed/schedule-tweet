import React from "react";
import {connect} from 'react-redux';

import './App.scss';
import {Redirect, Route, Switch} from "react-router-dom";
import PrivateRoute from "components/shared/PrivateRoute";
import Auth from "components/Auth";
import Dashboard from "components/Dashboard";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {clearMessage} from "./components/Dashboard/actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App({ errorMessage, messageType, clearMessage }) {
  return (
      <>
        <Switch>
          <PrivateRoute path="/Dashboard" component={Dashboard} />
          <Route path="/auth" component={Auth}/>
          <Route path="/*" render={() => <Redirect to="/auth/login" /> } />
        </Switch>
        <Snackbar onClose={() => clearMessage()} open={Boolean(errorMessage)} autoHideDuration={6000} >
          <Alert severity={messageType} onClose={() => clearMessage()}>
            {errorMessage}
          </Alert>
        </Snackbar>
      </>
  );
}

const mapStateToProps = state => ({
  errorMessage: state?.dashboard?.errorMessage,
  messageType: state?.dashboard?.messageType
});

export default connect(mapStateToProps, { clearMessage })(App);
