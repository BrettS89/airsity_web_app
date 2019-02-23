import { connect } from 'react-redux';
import { bindActionCreators } from '../../node_modules/redux';
import { getSongs, nextSong, getSongsLoggedOut } from '../store/actions/songActions';
import { addToPlaylist } from '../store/actions/playlistActions';
import { addToListened } from '../store/actions/listenedActions';
import { setPage } from '../store/actions/navActions';
import { isLoggedIn } from '../store/actions/authActions';
import Discover from '../components/discover';

const mapStateToProps = state => {
  return {
    state: {
      songs: state.songs,
      genre: state.genre,
      addedToPlaylist: state.addedToPlaylist,
      addedToListened: state.addedToListened,
      isLoggedIn: state.auth,
    }
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSongs,
      nextSong,
      addToPlaylist,
      addToListened,
      setPage,
      getSongsLoggedOut,
      isLoggedIn,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
