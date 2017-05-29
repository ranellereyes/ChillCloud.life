import { SEARCH, CLEAR } from '../actions/search_actions';

const SearchReducer = function(state = [], action){
  switch(action.type){
    case SEARCH:
      return action.search;
    case CLEAR:
      return [];
    default:
      return state;
  }
};

export default SearchReducer;
