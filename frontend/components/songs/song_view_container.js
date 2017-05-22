import { connect } from 'react-redux';
import {
  actionGetSong,
  actionDeleteSong
 } from '../../actions/song_actions';
import SongView from './song_view';

const mapStateToProps = state => {
return ({
  currentUser: state.session.currentUser,
  songs: state.songs
});
};
const mapDispatchToProps = dispatch => ({
  getSong: (id) => dispatch(actionGetSong(id)),
  deleteSong: (id) => dispatch(actionDeleteSong(id))
});

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(SongView);
