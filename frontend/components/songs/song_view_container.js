import { connect } from 'react-redux';
import {
  actionGetSong,
  actionDeleteSong,
  actionAddComment,
  actionDeleteComment
 } from '../../actions/song_actions';
import {
  actionPlaySong,
  actionQueueSong
} from '../../actions/audio_player_actions';
import SongView from './song_view';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  songs: state.songs,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  getSong: (id) => dispatch(actionGetSong(id)),
  deleteSong: (id) => dispatch(actionDeleteSong(id)),
  play: (song) => dispatch(actionPlaySong(song)),
  queue: (song) => dispatch(actionQueueSong(song)),
  comment: (comment) => dispatch(actionAddComment(comment)),
  deleteComment: (id) => dispatch(actionDeleteComment(id))
});

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(SongView);
