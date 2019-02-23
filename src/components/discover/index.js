import React from 'react';
import './discover.css';
import DiscoverView from './DiscoverView';
import { apiIsLoggedIn } from '../../lib/apiCalls';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: 0,
      playing: false,
      fetching: true,
      noMoreSongs: false,
      isLoggedIn: false,
    };
    this.audio = React.createRef();
  }

  async componentDidMount() {
    this.props.setPage('play');
    if (this.props.state.isLoggedIn) {
      await this.props.getSongs(this.props.state.genre.value);
    } else {
      await this.props.getSongsLoggedOut(this.props.state.genre.value);
    }
  }

  fetchNextSongs = async () => {
    this.setState({ fetching: true });
    await this.props.getSongs(this.props.state.genre.value);
    await this.setState({ playing: true });
    return this.audio.current.play();
  };

  likeSong = async () => {
    if (this.props.state.isLoggedIn) {
      await this.loggedInLikeSong();
    } else {
      this.loggedOutLikeSong();
    }
  };

  dismissSong = async () => {
    if (this.props.state.isLoggedIn) {
      await this.loggedInDismissSong();
    } else {
      this.loggedOutDismissSong();
    }
  };

  loggedInDismissSong = async () => {
    this.props.addToListened({
      song: this.props.state.songs[0]._id,
      date: Date.now(),
    });
    this.audio.current.pause();

    if (this.props.state.songs.length === 1) {
      return this.fetchNextSongs();
    }
    this.props.nextSong();
    await this.setState({ playing: true });
    this.audio.current.play();
  };

  loggedInLikeSong = async () => {
    this.props.addToPlaylist({
      song: this.props.state.songs[0]._id,
      genre: this.props.state.songs[0].genre,
      date: Date.now(),
    });
    this.audio.current.pause();

    if (this.props.state.songs.length === 1) {
      return this.fetchNextSongs();
    }
    this.props.nextSong();
    await this.setState({ playing: true });
    this.audio.current.play();
  };

  loggedOutDismissSong = async () => {
    this.audio.current.pause();
    if (this.props.state.songs.length === 1) {
      return this.props.history.push('signup');
    }
    this.props.nextSong();
    await this.setState({ playing: true });
    this.audio.current.play();
  };

  loggedOutLikeSong = async () => {
    this.audio.current.pause();
    if (this.props.state.songs.length === 1) {
      return this.props.history.push('signup');
    }
    let songs = JSON.parse(localStorage.getItem('songs'));
    if (songs) {
      songs.unshift(this.props.state.songs[0]);
    } else {
      songs = [this.props.state.songs[0]];
    }
    localStorage.setItem('songs', JSON.stringify(songs));
    this.props.nextSong();
    await this.setState({ playing: true });
    this.audio.current.play();
  };

  playOrPause = () => {
    if (!this.state.playing) {
      this.setState({ playing: true });
      this.audio.current.play();
    } else {
      this.setState({ playing: false });
      this.audio.current.pause();
    }
  };

  renderPlayOrPause = () => {
    if(this.state.playing) {
      return <i className="fas fa-pause"></i>;
    }
    return <i className="fas fa-play"></i>;
  }

  render() {
    console.log(this.props.state.songs);
    return <DiscoverView
            likeSong={this.likeSong}
            dismissSong={this.dismissSong}
            songs={this.props.state.songs}
            ref={this.audio}
            playOrPause={this.playOrPause}
            renderPlayOrPause={this.renderPlayOrPause}
            />
  }
}

export default Discover;
