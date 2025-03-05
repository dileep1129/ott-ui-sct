import React, { useRef, useState } from "react";
 
const Viode = () => {
  const videoRef = useRef(null);
  const [brightness, setBrightness] = useState(100);
 
  // Play Video
  const playVideo = () => videoRef.current.play();
 
  // Pause Video
  const pauseVideo = () => videoRef.current.pause();
 
  // Forward 5 sec
  const forwardVideo = () => (videoRef.current.currentTime += 5);
 
  // Backward 5 sec
  const backwardVideo = () => (videoRef.current.currentTime -= 5);
 
  // Adjust Brightness
  const handleBrightness = (e) => setBrightness(e.target.value);
 
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div style={{ filter: `brightness(${brightness}%)` }}>
        <video ref={videoRef} width="600" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
 
      {/* Controls */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={playVideo}>▶ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={backwardVideo}>⏪ Backward</button>
        <button onClick={forwardVideo}>⏩ Forward</button>
      </div>
 
      {/* Brightness Control */}
      <div style={{ marginTop: "10px" }}>
        <label>Brightness: </label>
        <input
          type="range"
          min="50"
          max="200"
          value={brightness}
          onChange={handleBrightness}
        />
      </div>
    </div>
  );
};
 
export default Viode