import {
  QUEUE_SONG,
  PLAY_SONG,
  NEXT_SONG
} from '../actions/audio_player_actions';
import { merge } from 'lodash';

const AudioPlayerReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    // case PLAY_SONG:
    //   return [{
    //     name: action.song.title,
    //     src: action.song.song_details.source,
    //     img: action.song.image_url,
    //     artist: action.song.artist
    //   }];
    case QUEUE_SONG:
      const newSong = {
        name: action.song.title,
        src: action.song.song_details.source,
        img: action.song.image_url,
        artist: action.song.artist
      };
      let newState = state.concat([newSong]);
      return newState;
    case NEXT_SONG:
      return state.slice(1);
    default:
      return state;
  }
};

export default AudioPlayerReducer;
