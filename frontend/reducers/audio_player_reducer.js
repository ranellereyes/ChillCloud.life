import {
  QUEUE_SONG,
  PLAY_SONG,
  NEXT_SONG,
  CLEAR_PLAYLIST
} from '../actions/audio_player_actions';
import { merge } from 'lodash';

const AudioPlayerReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case PLAY_SONG:
      const nextSong = [{
        name: action.song.title,
        src: action.song.song_details.source,
        img: action.song.image_url,
        artist: action.song.artist
      }];

      return nextSong.concat(state);

    case QUEUE_SONG:
      const newSong = {
        name: action.song.title,
        src: action.song.song_details.source,
        img: action.song.image_url,
        artist: action.song.artist
      };

      // Prevent multiple instances of same song which breaks player

      if (state.length > 0 &&
        newSong.name === state.slice(-1)[0].name) {
        return state;
      } else {
        return state.concat([newSong]);
      }

    case NEXT_SONG:
      return state.slice(1);

    case CLEAR_PLAYLIST:
      return [];

    default:
      return state;
  }
};

export default AudioPlayerReducer;
