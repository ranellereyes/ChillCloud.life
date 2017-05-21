import { connect } from 'react-redux';
import { actionFeaturedUsers } from '../../actions/user_actions';
import SideBar from './side_bar';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(actionFeaturedUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
