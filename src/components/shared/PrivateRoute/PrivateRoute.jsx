import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// TODO add real auth check
const PrivateRoute = ({ component: RenderedComponent, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            2 === 1 ? (
                <RenderedComponent {...props} />
            ) : (
                <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;
