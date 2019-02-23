import { connect } from 'react-redux';
import { bindActionCreators } from '../../node_modules/redux';
import { login, isLoggedInOnLogin } from '../store/actions/authActions';
import Login from '../components/login';

const mapStateToProps = state => {
  return {
    state: {
      auth: state.auth,
    }
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      login,
      isLoggedInOnLogin,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
