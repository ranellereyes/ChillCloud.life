import { connect } from 'react-redux';
import {
  actionPlaySong,
  actionPauseSong
 } from '../../actions/song_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = state => {

return ({
  currentSong: state.currentSong
});
};

const mapDispatchToProps = dispatch => ({
  play: (song) => dispatch(actionPlaySong(song)),
  pause: () => dispatch(actionPauseSong())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
