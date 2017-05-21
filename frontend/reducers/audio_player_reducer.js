import {
  PLAY_SONG,
  PAUSE_SONG
} from '../actions/audio_player_actions';
import { merge } from 'lodash';


const defaultState = {
  isPlaying: false,
  currentSong: null
};

const AudioPlayerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return { isPlaying: true, currentSong: action.song };
    case PAUSE_SONG:
      return merge({}, state, { isPlaying: false });
    default:
      return state;
  }
};

export default AudioPlayerReducer;
