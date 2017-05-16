import { connect } from 'react-redux';
import { actionLogout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
