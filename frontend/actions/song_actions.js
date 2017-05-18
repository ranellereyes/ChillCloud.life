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
export const CREATE_NEW_SONG = "CREATE_NEW_SONG";
export const DELETE_SONG = "DELETE_SONG";
export const EDIT_SONG = "EDIT_SONG";

// ASYNC ACTIONS

export const actionGetSong = (song) => dispatch => {
  return APIUtil.songRequest(song).then(
    respSong => dispatch(receiveSong(respSong)),
    errorHandle
  );
};

export const actionSongIndex = () => dispatch => {
  return APIUtil.songsRequest().then(
    resp => dispatch(receiveSongs(resp)),
    errorHandle
  );
};

export const actionNewSong = (song) => dispatch => {
  return APIUtil.newSongRequest(song).then(
    resp => dispatch(createNewSong(resp)),
    errorHandle
  );
};

export const actionDeleteSong = (song) => dispatch => {
  return APIUtil.deleteSongRequest(song).then(
    resp => dispatch(deleteSong(resp)),
    errorHandle
  );
};

export const actionEditSong = (song) => dispatch => {
  return APIUtil.editSongRequest(song).then(
    resp => dispatch(editSong(resp)),
    errorHandle
  );
};

// // SYNC ACTIONS

export const receiveSongs = () => ({
  type: RECEIVE_SONGS
});

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const createNewSong = (song) => ({
  type: CREATE_NEW_SONG,
  song
});

export const deleteSong = (song) => ({
  type: DELETE_SONG,
  song
});

export const editSong = (song) => ({
  type: EDIT_SONG,
  song
});
