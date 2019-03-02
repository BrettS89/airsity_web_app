import React from 'react';
import './playlist.css';
import { apiIsLoggedIn } from '../../lib/apiCalls';
import PlaylistView from './PlaylistView';
import SongCard from './subComponents/SongCard';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'all',
      isLoggedIn: false,
      playing: false,
      songPlaying: null,
    };
    this.audio = React.createRef();
  }

  async componentDidMount() {
    const { status } = await apiIsLoggedIn();
    console.log(status);
    // const { isLoggedIn } = this.props.state; 
    this.props.setPage('playlist');
    if (status) {
      this.props.getPlaylist(this.state.genre);
    }
  }

  playOrPause = async (action, song) => {
    this.audio.current.pause();
    if (action === 'play') {
      await this.setState({ playing: true, songPlaying: song });
      this.audio.current.play();
    } else {
      this.setState({ playing: false, songPlaying: song });
    }
  };

  renderPlaylist = () => {
      return this.props.state.playlist.map(song => {
        return <SongCard
                key={song._id}
                song={song.song}
                playing={this.state.playing}
                songPlaying={this.state.songPlaying}
                playOrPause={this.playOrPause}
                />;
      });
  };

  renderPlaylistNoAuth = () => {
    const playlist = JSON.parse(localStorage.getItem('songs'));
    if (playlist) {
      return playlist.map(song => {
        return <SongCard
                key={song._id}
                song={song}
                playing={this.state.playing}
                songPlaying={this.state.songPlaying}
                playOrPause={this.playOrPause}
                />;
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <PlaylistView
          renderPlaylist={this.renderPlaylist}
          renderPlaylistNoAuth={this.renderPlaylistNoAuth}
          isLoggedIn={this.props.state.isLoggedIn}
        />
        <audio ref={this.audio} src={this.state.songPlaying} loop />
      </React.Fragment>
    );
    
  }
}

export default Playlist;
