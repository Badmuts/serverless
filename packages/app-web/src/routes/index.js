import React from 'react';
import { Route } from 'react-router-dom';

import LoginScreen from '../screens/LoginScreen';
import { SignupContainer } from '../containers/SignupContainer';
import PrivateRoute from './PrivateRoute';
import DashboardScreen from '../screens/DashboardScreen';

export default (
    <div>
        <PrivateRoute exact path="/" component={DashboardScreen} />
        <Route path="/auth/login" component={LoginScreen} />
        <Route path="/auth/signup" component={SignupContainer} />
    </div>
)
