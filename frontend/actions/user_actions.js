import * as APIUtil from '../util/user_util';
import { errorHandle } from './errors_actions';

export const RANDOM_USERS = "RANDOM_USERS";

export const receiveRandomUsers = (users) => ({
  type: RANDOM_USERS,
  users
});

export const actionPlaySong = () => dispatch => {
  return APIUtil.randomUsersRequest().then(
    users => dispatch(receiveRandomUsers(users)),
    e => errorHandle(e, dispatch)
  );
};
