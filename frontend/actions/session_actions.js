// API UTIL
import * as APIUtil from '../util/session_api_util';
import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveErrors,
  clearErrors
} from './errors_actions';


// CONSTANTS
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_LOGOUT_SUCCESS = "RECEIVE_LOGOUT_SUCCESS";


// ASYNC ACTIONS
export const actionSignup = user => dispatch => {
  return APIUtil.signupRequest(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => {
      return dispatch(receiveErrors(error.responseJSON));}
  );
};

export const actionLogin = user => dispatch => {
  return APIUtil.loginRequest(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const actionLogout = () => dispatch => {
  return APIUtil.logoutRequest().then(
    () => dispatch(receiveLogoutSuccess())
  );
};

// // SYNC ACTIONS
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveLogoutSuccess = () => ({
  type: RECEIVE_LOGOUT_SUCCESS
});
