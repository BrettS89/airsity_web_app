import { connect } from 'react-redux';
import Footer from '../components/footer';

const mapStateToProps = state => {
  return {
    state: {
      nav: state.nav,
    },
  };
};

export default connect(mapStateToProps)(Footer);
