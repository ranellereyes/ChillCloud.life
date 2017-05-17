import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

//functional component
// the props below are passed in from Route
const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
        ):(
          <Redirect to="/stream"/>
        )
      )} />
  );

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
        ):(
          <Redirect to="/"/>
        )
      )} />
  );

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected));
