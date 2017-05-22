import * as APIUtil from '../util/song_util';
import { errorHandle } from './errors_actions';

export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";

export const actionPlaySong = (song) => dispatch => {
  dispatch({
    type: PLAY_SONG,
    song
  });
};

// export const actionPlaySong = (id) => dispatch => {
//   return APIUtil.songRequest(id).then(
//     resp => dispatch(receivePlaySong(resp)),
//     e => errorHandle(e, dispatch)
//   );
// };

export const actionPauseSong = () => dispatch => {
  dispatch({ type: PAUSE_SONG });
};
