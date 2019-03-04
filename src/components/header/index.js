import React from 'react';
import './header.css';
import HeaderView from './HeaderView';

class Header extends React.Component {
  render() {
    return <HeaderView
            genre={this.props.state.genre}
            isLoggedIn={this.props.state.auth}
            page={this.props.state.nav}
            getPlaylist={this.props.getPlaylist}
            setPlaylistGenre={this.props.setPlaylistGenre}
            goHome={() => this.props.history.push('/')}
            />;
  }
}

export default Header;
