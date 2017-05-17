import React from 'react';
import SessionForm from '../session_forms/session_form_container';
import { Route, Switch } from 'react-router-dom';
import NavContainer from '../navbar/nav_container';
// TEST
import {AuthRoute, ProtectedRoute} from '../../util/route_util';
import GreetingContainer from '../greeting/greeting_container';

const App = ({current_user}) => {
  return (
    <div>
      <header>
        <NavContainer />
          <div className="splash-image">
            <div className="splash">
              <img src="assets/splash_image.jpeg" />
              <p className="imageTitle">ChillCloud</p>
              <p className="image-caption">listen & chill</p>
            </div>
          </div>
      </header>
    </div>
  );
};

// TESTING
// <Switch>
//   <AuthRoute path="/login" component={SessionForm} />
//   <ProtectedRoute path="/" component={GreetingContainer} />
// </Switch>

export default App;
