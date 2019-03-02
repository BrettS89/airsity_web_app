import React from 'react';

export default props => {
  const renderIcon = () => {
    return props.playing && props.songPlaying === props.song.audio
      ? <i className="far fa-pause-circle" style={{ position: 'absolute' }} onClick={() => props.playOrPause('pause', props.song.audio)}></i>
      : <i className="far fa-play-circle" style={{ position: 'absolute' }} onClick={() => props.playOrPause('play', props.song.audio)}></i>;
  };

  return (
    <div className="song-card">
      <div className="song-card-content">
        <div
          className="playlist-img"
          style={{ backgroundImage: "url(" + props.song.photo + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        >
          <div style={{ backgroundColor: '#000', height: '100%', width: '100%', opacity: '0.3' }}></div>
          {renderIcon()}
        </div>
        <div>
          <div className="song-card-title">{props.song.title}</div>
          <div className="song-card-artist">{props.song.artist}</div>
          <div className="song-card-year">{props.song.year}</div>
        </div>
      </div>
    </div>
  );
};
