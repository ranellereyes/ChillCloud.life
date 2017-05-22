import { connect } from 'react-redux';
import {
  actionQueueSong,
  actionPlaySong
 } from '../../actions/song_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = state => ({
  playlist: state.playlist
});

const mapDispatchToProps = dispatch => ({
  queue: (song) => dispatch(actionQueueSong(song)),
  play: (song) => dispatch(actionPlaySong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
