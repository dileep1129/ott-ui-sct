  import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [brightness, setBrightness] = useState(100);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const forwardVideo = () => (videoRef.current.currentTime += 5);
  const backwardVideo = () => (videoRef.current.currentTime -= 5);

  const handleBrightness = (e) => setBrightness(e.target.value);

  // Navigate back to Home
  const goBackToHome = () => {
    navigate("/Home"); // Assuming Home.jsx is mapped to the root path "/"
  };
 const styles={
    titleIcon: {
        fontWeight:'bold',
        color:'white',
        width:'50px',
        border:'2px solid grey',
        background:'transparent',
        marginTop:'-740px',
        marginLeft:'-40px'
        
    
        
      },
 }

  return (
    <div style={containerStyle}>
        <div>
       <p> <Link to='/Home'><FaArrowLeft style={styles.titleIcon}  /></Link></p>

        </div>
      <div
        style={{ ...videoWrapperStyle, filter: `brightness(${brightness}%)` }}
      >
        <video ref={videoRef} style={videoStyle} controls>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4" // You can replace with any video source
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div style={overlayStyle}>
          <button onClick={backwardVideo} style={buttonStyle}>
            ⏪
          </button>
          <button onClick={forwardVideo} style={buttonStyle}>
            ⏩
          </button>
        </div>
        <div style={brightnessControlStyle}>
          <input
            type="range"
            min="50"
            max="200"
            value={brightness}
            onChange={handleBrightness}
            style={brightnessSliderStyle}
          />
        </div>
        {/* <div style={backButtonContainerStyle}>
          <button onClick={goBackToHome} style={backButtonStyle}>
            ← Back to Home
          </button>
        </div> */}

      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#000",
};

const videoWrapperStyle = {
  position: "relative",
  width: "80%",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const videoStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const overlayStyle = {
  position: "absolute",
  top: "90%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  gap: "15px",
  padding: "10px",
  borderRadius: "10px",
  backdropFilter: "blur(5px)",
};

const buttonStyle = {
  border: "none",
  padding: "10px 15px",
  fontSize: "18px",
  color: "#fff",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "0.3s",
  backdropFilter: "blur(5px)",
};

const brightnessControlStyle = {
  position: "absolute",
  top: "50%",
  left: "20px",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  borderRadius: "10px",
  backdropFilter: "blur(5px)",
};

const brightnessSliderStyle = {
  transform: "rotate(-90deg)",
  width: "100px",
  accentColor: "white",
};

const backButtonContainerStyle = {
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translateX(-50%)",
};

const backButtonStyle = {
  background: "rgba(0, 0, 0, 0.7)",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  fontSize: "18px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "0.3s",
  backdropFilter: "blur(5px)",
};

export default VideoPlayer;
