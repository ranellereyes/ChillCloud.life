import {
  QUEUE_SONG,
  PLAY_SONG
} from '../actions/audio_player_actions';
import { merge } from 'lodash';

const AudioPlayerReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case PLAY_SONG:
      return [{
        name: action.song.title,
        src: action.song.song_details.source,
        img: action.song.image_url
      }];
    case QUEUE_SONG:
      const newSong = {
        name: action.song.title,
        src: action.song.song_details.source,
        img: action.song.image_url
      };
      let newState = state.concat([newSong]);
      return newState;
    default:
      return state;
  }
};

export default AudioPlayerReducer;
