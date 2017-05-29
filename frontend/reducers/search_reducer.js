import { SEARCH } from '../actions/search_actions';


const SearchReducer = function(state = [], action){
  switch(action.type){
    case SEARCH:
      return action.search;
    default:
      return state;
  }
};

export default SearchReducer;
