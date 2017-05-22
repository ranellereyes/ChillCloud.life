import { connect } from 'react-redux';
import {
  actionSongIndex
 } from '../../actions/song_actions';
import SongDetailList from './song_detail_list';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  songs: state.songs
});
const mapDispatchToProps = dispatch => ({
  getAllSongs: () => dispatch(actionSongIndex())
});

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(SongDetailList);
