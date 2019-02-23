import React from 'react';

export default props => {
  return (
    <div className="footer-container" style={{ color: props.page === 'genre' ? '#E81C62': '#e0e0e0' }}>
      <div onClick={() => props.navigateTo('genres')}>
        <i className="fas fa-stream fa-2x"></i>
        <div>Genre</div>
      </div>

      <div onClick={() => props.navigateTo('discover')} style={{ color: props.page === 'play' ? '#E81C62': '#e0e0e0' }}>
        <i className="fas fa-play-circle fa-2x"></i>
        <div>Play</div>
      </div>

      <div onClick={() => props.navigateTo('playlist')} style={{ color: props.page === 'playlist' ? '#E81C62': '#e0e0e0' }}>
        <i className="fas fa-th-list fa-2x"></i>
        <div>Playlist</div>
      </div>

      <div onClick={() => props.navigateTo('account')} style={{ color: props.page === 'account' ? '#E81C62': '#e0e0e0' }}>
        <i className="fas fa-user fa-2x"></i>
        <div>Account</div>
      </div>

    </div>
  );
};
