import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './../components/Header';
import Login from './../components/Login';
import SignUp from './../components/SignUp';
import LandingPage from './../components/LandingPage';
import Dashboard from './../components/Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from './../components/NotFound';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory({
    basename: process.env.PUBLIC_URL
});

const AppRouter = () => {
    return (
        <Router
            history={history}
        >
            <div>
                <Header />
                <Switch>
                    <PublicRoute 
                        exact path="/"
                        component={LandingPage}
                    />
                    <PrivateRoute 
                        exact path="/dashboard"
                        component={Dashboard}
                    />
                    <PublicRoute 
                        exact path="/login"
                        component={Login}
                    />
                    <PublicRoute 
                        exact path="/signup"
                        component={SignUp}
                    />
                    <Route 
                        component={NotFound}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;