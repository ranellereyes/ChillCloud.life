import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { actionNewSong } from '../../actions/song_actions';
import { clearErrors } from '../../actions/errors_actions';
import React from 'react';
import { Redirect } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  currentUser: state.session.currentUser.id,
  closeModal: ownProps.closeModal,
  songs: state.songs
});

const mapDispatchToProps = dispatch => {
  return {
    actionNewSong: (song) => {
      dispatch(actionNewSong(song));
    },
    errorClear: () => {
      dispatch(clearErrors());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
