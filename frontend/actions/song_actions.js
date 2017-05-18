// API UTIL
import * as APIUtil from '../util/song_util';
import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveErrors,
  clearErrors
} from './errors_actions';

// CONSTANTS

export const RECEIVE_SONG = "RECEIVE_SONG";

// ASYNC ACTIONS

export const actionGetSong = (song) => dispatch => {
  return APIUtil.songRequest(song).then(
    respSong => dispatch(receiveSong(respSong)),
    error => {
      return dispatch(receiveErrors(error.responseJSON));
    }
  );
};

// // SYNC ACTIONS

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});
