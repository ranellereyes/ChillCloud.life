import { connect } from 'react-redux';
import SessionForm from './session_form';
import { actionLogin, actionSignup, clearErrors } from '../../actions/session_actions';
import React from 'react';
import { Redirect } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  errors: state.session.errors,
  type: ownProps.type
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
