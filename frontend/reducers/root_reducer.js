import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import SongReducer from './song_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  songs: SongReducer
});
