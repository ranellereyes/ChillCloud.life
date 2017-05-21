// API UTIL
import * as APIUtil from '../util/song_util';
import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveErrors,
  clearErrors,
  errorHandle
} from './errors_actions';

// CONSTANTS

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const LOADING_SCREEN = "LOADING_SCREEN";
// export const CREATE_NEW_SONG = "CREATE_NEW_SONG";
// export const DELETE_SONG = "DELETE_SONG";
// export const EDIT_SONG = "EDIT_SONG";

// ASYNC ACTIONS

export const actionGetSong = (id) => dispatch => {
  return APIUtil.songRequest(id).then(
    respSong => dispatch(receiveSong(respSong)),
    e => errorHandle(e, dispatch)
  );
};

export const actionSongIndex = () => dispatch => {
  return APIUtil.songsRequest().then(
    resp => dispatch(receiveSongs(resp)),
    e => errorHandle(e, dispatch)
  );
};

export const actionNewSong = (song) => dispatch => {
  dispatch({ type: LOADING_SCREEN });
  return APIUtil.newSongRequest(song).then(
    resp => dispatch(receiveSong(resp)),
    e => errorHandle(e, dispatch)
  );
};
//
// export const actionDeleteSong = (song) => dispatch => {
//   return APIUtil.deleteSongRequest(song).then(
//     resp => dispatch(deleteSong(resp)),
//     errorHandle
//   );
// };
//
// export const actionEditSong = (song) => dispatch => {
//   return APIUtil.editSongRequest(song).then(
//     resp => dispatch(editSong(resp)),
//     errorHandle
//   );
// };

// // SYNC ACTIONS

export const receiveSongs = (song) => ({
  type: RECEIVE_SONGS,
  song
});

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});
//
// export const createNewSong = (song) => ({
//   type: CREATE_NEW_SONG,
//   song
// });
//
// export const deleteSong = (song) => ({
//   type: DELETE_SONG,
//   song
// });
//
// export const editSong = (song) => ({
//   type: EDIT_SONG,
//   song
// });
