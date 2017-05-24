import { RANDOM_USERS, SINGLE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_USER:
      return action.user;
    case RANDOM_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UserReducer;
