import { connect } from 'react-redux';
import { bindActionCreators } from '../../node_modules/redux';
import { signup, isLoggedInOnLogin } from '../store/actions/authActions';
import Signup from '../components/signup';

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
      signup,
      isLoggedInOnLogin,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
