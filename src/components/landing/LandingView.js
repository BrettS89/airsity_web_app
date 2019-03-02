import React from 'react';

export default function LandingView() {
  return (
    <div style={{ display: 'flex',  justifyContent: 'center' }}>
      <div className="landing-container">
        <div className="header-tron">
          <div>
            <div style={{ fontSize: 38, marginRight: 10, marginBottom: 2 }} className="nav-logo"><i className="fas fa-music"></i> Airsity</div>
          </div>
          Discover Music Fast
          {/* <div className="header-button">
            Start Streaming
            <i class="fas fa-play"></i> */}
          {/* </div> */}
        </div>
        <div className="sub-header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Labore et dolore magna aliqua.
        </div>
        <div className="start-header">Start discovering new music</div>
        <div className="discover-section">
          <i class="fas fa-headphones-alt"></i>
          <div className="click-headphones">Click the headphones!</div>
        </div>
      </div>
    </div>
    
  );
}
