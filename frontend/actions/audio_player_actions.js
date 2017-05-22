import * as APIUtil from '../util/song_util';
import { errorHandle } from './errors_actions';

export const QUEUE_SONG = "QUEUE_SONG";

export const actionQueueSong = (song) => ({
    type: QUEUE_SONG,
    song
});


// export const actionPlaySong = (id) => dispatch => {
//   return APIUtil.songRequest(id).then(
//     resp => dispatch(receivePlaySong(resp)),
//     e => errorHandle(e, dispatch)
//   );
// };
//
// export const actionPauseSong = () => dispatch => {
//   dispatch({ type: PAUSE_SONG });
// };
