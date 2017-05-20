import { connect } from 'react-redux';
import {
  actionGetSong
 } from '../../actions/song_actions';
import SongView from './song_view';

const mapStateToProps = state => ({
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  getSong: (id) => dispatch(actionGetSong(id))
});

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(SongView);
