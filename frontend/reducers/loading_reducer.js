import { LOADING_SCREEN } from "../actions/song_actions";

const LoadingReducer = function(state = false , action) {
  switch (action.type) {
    case LOADING_SCREEN:
      return true;
    default:
      return false;
  }
};

export default LoadingReducer;
