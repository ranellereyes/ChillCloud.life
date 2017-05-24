import { connect } from 'react-redux';
import {
  actionQueueSong,
  actionPlaySong,
  NEXT_SONG,
  CLEAR_PLAYLIST
 } from '../../actions/song_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = state => ({
  playlist: state.playlist,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  queue: (song) => dispatch(actionQueueSong(song)),
  play: (song) => dispatch(actionPlaySong(song)),
  next: () => dispatch({type: "NEXT_SONG"}),
  clear: () => dispatch({type: "CLEAR_PLAYLIST"})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
