import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default props => {
  const genres = [
    { text: 'All genres', value: 'all' },
    { text: 'Hip hop', value: 'hiphop' },
    { text: 'Pop', value: 'pop' },
  ];

  const getPlaylist = (e, data) => {
    props.getPlaylist(data.value);
  };

  const renderGenre = () => {
    if(props.page === 'play') {
      return <div className="header-genre">{props.genre.display}</div>;
    }
    if(props.page === 'playlist' && props.isLoggedIn) {
      return <Dropdown
              inline options={genres}
              defaultValue={genres[0].value}
              compact
              className="playlist-dropdown"
              onChange={getPlaylist}
            />
    }
  };

  return (
    <nav>
      <nav className="navbar">
        <div className="nav-logo"><i className="fas fa-music"></i> Airsity</div>
        {renderGenre()}
      </nav>
    </nav>
  );
};
