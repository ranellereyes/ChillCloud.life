import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { actionNewSong, actionEditSong } from '../../actions/song_actions';
import { clearErrors } from '../../actions/errors_actions';
import React from 'react';
import { Redirect } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  currentUser: state.session.currentUser.id,
  closeModal: ownProps.closeModal,
  songs: state.songs,
  type: ownProps.type
});

const mapDispatchToProps = dispatch => {
  return {
    actionNewSong: (song) => {
      dispatch(actionNewSong(song));
    },
    errorClear: () => {
      dispatch(clearErrors());
    },
    actionEditSong: (song, id) => {
      dispatch(actionEditSong(song, id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
