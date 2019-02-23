import React from 'react';

export default props => {
  return (
    <div className="genres-page">
      <div className="genres-content">
        <h2>Choose a genre</h2>

        <div>
          <div
            className="genre-content" 
            onClick={() => props.setGenre({ value: 'hiphop', display: 'hip hop' })}
          >
            <span>Hip hop</span>
            <i className="fas fa-chevron-right"></i>
          </div>

          <div 
            className="genre-content" 
            onClick={() => props.setGenre({ value: 'pop', display: 'pop' })}
          >
            <span>Pop</span>
            <i className="fas fa-chevron-right"></i>
          </div>

          <div 
            className="genre-content" 
            onClick={() => props.setGenre({ value: 'edm', display: 'edm' })}
          >
            <span>EDM</span>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>

      </div>
    </div>
  );
};
