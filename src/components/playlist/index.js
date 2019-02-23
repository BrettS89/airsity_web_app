import React from 'react';
import './playlist.css';
import PlaylistView from './PlaylistView';
import SongCard from './subComponents/SongCard';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'all',
      isLoggedIn: false,
    };
  }

  async componentDidMount() {
    const { isLoggedIn } = this.props.state; 
    this.props.setPage('playlist');
    if (isLoggedIn) {
      this.props.getPlaylist(this.state.genre);
    }
  }

  // fetchPlaylist = async genre => {
  //   await this.setState({ genre });
  //   this.props.getPlaylist(this.state.genre);
  // };

  renderPlaylist = () => {
      return this.props.state.playlist.map(song => {
        return <SongCard key={song._id} song={song.song} />;
      });
  };

  renderPlaylistNoAuth = () => {
    const playlist = JSON.parse(localStorage.getItem('songs'));
    if (playlist) {
      return playlist.map(song => {
        return <SongCard key={song._id} song={song}/>
      });
    }
  };

  render() {
    return <PlaylistView
            renderPlaylist={this.renderPlaylist}
            renderPlaylistNoAuth={this.renderPlaylistNoAuth}
            // fetchPlaylist={this.fetchPlaylist}
            isLoggedIn={this.props.state.isLoggedIn}
            />;
  }
}

export default Playlist;
