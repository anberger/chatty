import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layout
import DefaultLayout from '../../ui/layout/Default';
import UserLayout from '../../ui/layout/User';

// Pages
import NotFoundPage from '../../ui/pages/default/NotFound';
import ChatPage from '../../ui/pages/user/Chat';
import ForgotPasswordPage from '../../ui/pages/authentication/ForgotPassword';
import LoginPage from '../../ui/pages/authentication/Login';
import LogoutPage from '../../ui/pages/authentication/Logout';
import RegisterPage from '../../ui/pages/authentication/Register';

const Auth = (nextState, replace) => {
  if(!Meteor.userId()) {
    replace({ pathname: '/login/', query: { redirect: nextState.location.pathname }});
  }
}

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={DefaultLayout}>
      <IndexRoute component={LoginPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/forgot" component={ForgotPasswordPage}/>
    </Route>

    <Route path="/user" component={UserLayout} onEnter={Auth}>
      <IndexRoute component={ChatPage}/>
      <Route path="/chat" component={ChatPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>

    <Route path="*" component={NotFoundPage}/>
  </Router>
);