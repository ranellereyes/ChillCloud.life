import {
  RECEIVE_CURRENT_USER,
  RECEIVE_LOGOUT_SUCCESS,
} from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullUser = {currentUser: null};

const SessionReducer = function(state = _nullUser, action){
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser};
    case RECEIVE_LOGOUT_SUCCESS:
      return merge({}, _nullUser);
    default:
      return state;
  }
};

export default SessionReducer;
