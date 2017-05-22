import { connect } from 'react-redux';
import {
  actionQueueSong
 } from '../../actions/song_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = state => ({
  playlist: state.playlist
});

const mapDispatchToProps = dispatch => ({
  play: (song) => dispatch(actionQueueSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
