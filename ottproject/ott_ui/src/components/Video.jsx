import React from 'react';
import './Video.scss';
 
const Video = () => {
  return (
    <div className="main">
      <div className="media-player">
        <header className="media-header">
          <h2>Movies</h2>
          <iframe className="movie-image" width="560" height="615" src="https://www.youtube.com/embed/tTsLt7JMLFw?si=irqvD8tUusIacLbz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          {/* <img src="images/hot2.avif" alt="Movie Poster" className="movie-image" /> */}
        </header>
 
        <div className="main-controls">
          <div className="brightness-control">
            <label htmlFor="brightness">Brightness</label>
            <input type="range" id="brightness" min="0" max="100" defaultValue="50" />
          </div>
 
          <button className="play-button">▶</button>
        </div>
 
        <div className="progress-section">
          <input type="range" className="progress-bar" min="0" max="100" defaultValue="55" />
          <span className="timestamp">55:45</span>
        </div>
 
        <div className="media-options">
          <button>Audio Subtitles</button>
          <button>Quality</button>
          <button>Speed (1X)</button>
        </div>
      </div>
    </div>
  );
};
 
export default Video;