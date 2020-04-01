import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './pages/Main'

import { istAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            istAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
