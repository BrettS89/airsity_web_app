import React from 'react';

export default props => {
  return (
    <div className="song-card">
      <div className="song-card-content">
        <img src={props.song.photo} alt=""/>
        <div>
          <div className="song-card-title">{props.song.title}</div>
          <div className="song-card-artist">{props.song.artist}</div>
          <div className="song-card-year">{props.song.year}</div>
        </div>
      </div>
    </div>
  );
};
