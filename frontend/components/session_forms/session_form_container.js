import { connect } from 'react-redux';
import SessionForm from './session_form';
import { actionLogin, actionSignup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user, type) => {
      const processForm = (type === 'login') ? actionLogin : actionSignup;
      dispatch(processForm(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
