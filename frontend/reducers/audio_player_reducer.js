import {
  QUEUE_SONG
} from '../actions/audio_player_actions';
import { merge } from 'lodash';

const AudioPlayerReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
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
