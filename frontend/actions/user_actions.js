import * as APIUtil from '../util/user_util';
import { errorHandle } from './errors_actions';

export const RANDOM_USERS = "RANDOM_USERS";
export const SINGLE_USER = "SINGLE_USER";

export const receiveRandomUsers = (users) => ({
  type: RANDOM_USERS,
  users
});

export const receiveUser = (user) => ({
  type: SINGLE_USER,
  user
});

export const actionFeaturedUsers = () => dispatch => {
  return APIUtil.randomUsersRequest().then(
    users => dispatch(receiveRandomUsers(users)),
    e => errorHandle(e, dispatch)
  );
};

export const actionUserView = (id) => dispatch => {
  return APIUtil.singleUserRequest(id).then(
    user => dispatch(receiveUser(user)),
    e => errorHandle(e, dispatch)
  );
};

export const actionEditUser = (user, id) => dispatch => {
  return APIUtil.editUserRequest(user, id).then(
    res => dispatch(receiveUser(res)),
    e => errorHandle(e, dispatch)
  );
};
