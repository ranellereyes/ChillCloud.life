import {
  RECEIVE_SONG
} from '../actions/song_actions';
import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/errors_actions';

import merge from 'lodash/merge';

const _defaultSong = {
  image_url: 'http://i.imgur.com/l7TtZHS.jpg',
  genre: '',
  length: ''
};

const SongReducer = function(state = _defaultSong, action){
  switch(action.type){
    case RECEIVE_SONG:
      return {
        song: merge({}, state, action.song)
      };
    default:
      return state;
  }
};

export default SongReducer;
