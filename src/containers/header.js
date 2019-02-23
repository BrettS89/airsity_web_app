import Header from '../components/header';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../node_modules/redux';
import { getPlaylist } from '../store/actions/playlistActions';

const mapStateToProps = state => {
  return {
    state: {
      genre: state.genre,
      nav: state.nav,
      auth: state.auth
    }
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getPlaylist,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
