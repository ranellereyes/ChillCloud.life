import React from 'react';
import SessionForm from '../session_forms/session_form_container';
import { Route, Switch } from 'react-router-dom';
import NavContainer from '../navbar/nav_container';
import Splash from "../splash/splash";
import Stream from "../stream/stream";
import SongDetailListContainer from "../songs/song_detail_list_container";
import SongViewContainer from "../songs/song_view_container";
import {AuthRoute, ProtectedRoute} from '../../util/route_util';
import LoadingContainer from './loading_container';
// TEST
import GreetingContainer from '../greeting/greeting_container';

const App = ({current_user}) => {
  return (
    <div className="App">
      <header>
        <NavContainer />
      </header>
      <main>
        <LoadingContainer />
        <Switch>
          <AuthRoute exact path="/" component={Splash} />
          <ProtectedRoute path="/stream" component={Stream} />
          <ProtectedRoute path="/songs/:song_id" component={SongViewContainer} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
