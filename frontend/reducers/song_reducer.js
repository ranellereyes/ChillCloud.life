import {
  RECEIVE_SONG,
  RECEIVE_SONGS,
  REDIRECT
  // EDIT_SONG
} from '../actions/song_actions';
import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/errors_actions';

import merge from 'lodash/merge';

// const _defaultSong = {
//   image_url: 'http://i.imgur.com/l7TtZHS.jpg',
//   genre: '',
//   length: ''
// };

const SongReducer = function(state = {}, action){
  switch(action.type){
    case REDIRECT:
      return { redirect: action.song };
    case RECEIVE_SONG:
      return action.song;
    case RECEIVE_SONGS:
      return action.song;
    default:
      return state;
  }
};

export default SongReducer;
