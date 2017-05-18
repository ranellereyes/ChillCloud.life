import { connect } from 'react-redux';
import SessionForm from './session_form';
import { actionLogin, actionSignup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';
import React from 'react';
import { Redirect } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  type: ownProps.type,
  closeModal: ownProps.closeModal
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user, type) => {
      const processForm = (type === 'login') ? actionLogin : actionSignup;
      return dispatch(processForm(user));
    },
    errorClear: () => {
      dispatch(clearErrors());
    },
    demoLogin: () => (
      dispatch(actionLogin({username: "username", password: "password"}))
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
