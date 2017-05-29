import { connect } from 'react-redux';
import {
  actionLogout,
  actionLogin,
  actionSignup } from '../../actions/session_actions';
import { actionSearch } from '../../actions/search_actions';
import Nav from './nav';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionLogout()),
  login: (user) => dispatch(actionLogin(user)),
  signUp: (user) => dispatch(actionSignup(user)),
  query: (query) => dispatch(actionSearch(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
