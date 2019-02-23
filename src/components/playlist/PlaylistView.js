import React from 'react';

export default ({ isLoggedIn, renderPlaylist, renderPlaylistNoAuth }) => {
  return (
    <div className="playlist-page">
      {isLoggedIn ? renderPlaylist() : renderPlaylistNoAuth()}
    </div>
  );
};
