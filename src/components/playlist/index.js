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
      hasMore: true,
      isLoading: false,
    };
    this.audio = React.createRef();

    window.onscroll = async () => {
      const {
        state: { hasMore, isLoading },
        props: { state: { playlist: { playlist, genre } } },
      } = this;

      if (isLoading || !hasMore) return;

      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.scrollHeight
      ) {
        await this.setState({ isLoading: true });
        await this.props.getPlaylistScroll({ 
          genre, 
          date: playlist[playlist.length - 1].date 
        });
        this.setState({ isLoading: false });
      }
    };
  }

  async componentDidMount() {
    const { status } = await apiIsLoggedIn();
    const { genre } = this.props.state.playlist;
    this.props.setPage('playlist');
    if (status) {
      this.props.getPlaylist({ genre, date: Date.now() });
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
    return this.props.state.playlist.playlist.map(song => {
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
