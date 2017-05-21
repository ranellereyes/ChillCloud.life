import { RANDOM_USERS } from '../actions/user_actions';
import { merge } from 'lodash';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case RANDOM_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UserReducer;
