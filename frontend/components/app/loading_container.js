import { connect } from 'react-redux';
import LoadingScreen from './loading_screen';

const mapStateToProps = state => ({
  loading: state.loading
});
//
// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(actionLogout())
// });

export default connect(
  mapStateToProps,
  null
)(LoadingScreen);
