import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/errors_actions';

const ErrorReducer = function(state = [], action){
  switch(action.type){
    case RECEIVE_ERRORS:
      const errors = action.errors || [];
      return errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorReducer;
