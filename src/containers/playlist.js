import { connect } from 'react-redux';
import { bindActionCreators } from '../../node_modules/redux';
import Playlist from '../components/playlist';
import { getPlaylist } from '../store/actions/playlistActions';
import { setPage } from '../store/actions/navActions';

const mapStateToProps = state => {
  return {
    state: {
      playlist: state.playlist,
      isLoggedIn: state.auth,
    }
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getPlaylist,
      setPage
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
