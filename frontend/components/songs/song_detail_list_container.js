import { connect } from 'react-redux';
import {
  actionSongIndex
 } from '../../actions/song_actions';
import {
  actionPlaySong,
  actionPauseSong
} from '../../actions/audio_player_actions';
import SongDetailList from './song_detail_list';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  songs: state.songs
});
const mapDispatchToProps = dispatch => ({
  getAllSongs: () => dispatch(actionSongIndex()),
  play: (song) => dispatch(actionPlaySong(song)),
  pause: () => dispatch(actionPauseSong())
});

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(SongDetailList);
