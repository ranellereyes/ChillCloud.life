import { connect } from 'react-redux';
import UserView from './user_view';
import { actionUserView, actionEditUser } from '../../actions/user_actions';
import React from 'react';
import {
  actionPlaySong,
  actionQueueSong
} from '../../actions/audio_player_actions';

const mapStateToProps = state => ({
  users: state.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getUser: (id) => dispatch(actionUserView(id)),
  edit: (user) => dispatch(actionEditUser(user)),
  play: (song) => dispatch(actionPlaySong(song)),
  queue: (song) => dispatch(actionQueueSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserView);
