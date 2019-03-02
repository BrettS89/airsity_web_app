import React from 'react';
import { MASCOT } from '../../assets/images';

export default React.forwardRef((props, ref) => {

  const displayText = (content, limit) => {
    let newContent = content;
    if(content.length > limit) newContent = `${content.substring(0, limit)}...`;
    return newContent;
  };

  return (
    <div className="discover-page">
      <div className="track-info">
        <div className="img-container">
          <img src={props.songs.length > 0 ? props.songs[0].photo || MASCOT : MASCOT} alt=""/>
        </div>
        
        <div className="discover-title">{props.songs.length > 0 ? displayText(props.songs[0].title, 25) : ''}</div>
        <div className="discover-artist">{props.songs.length > 0 ? displayText(props.songs[0].artist, 35) : ''}</div>
      </div>
      
      <div className="discover-actions">
        <div className="trigger" onClick={props.dismissSong}>
          <i className="fas fa-times"></i>
        </div>
        <div className="playpause" onClick={props.playOrPause}>
          {props.renderPlayOrPause()}
        </div>
        <div className="trigger" onClick={props.likeSong}>
          <i className="fas fa-heart"></i>
        </div>
      </div>
      
      <audio ref={ref} src={props.songs.length > 0 ? props.songs[0].audio : ''} loop />

    </div>
  );
});