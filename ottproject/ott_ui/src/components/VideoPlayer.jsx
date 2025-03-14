import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [brightness, setBrightness] = useState(100);
  const [quality, setQuality] = useState("720p"); // Default quality
  const [currentTime, setCurrentTime] = useState(0); // Track video time

  const videoSources = {
    "240p": "https://r5---sn-xmjpuxa-itqz.googlevideo.com/videoplayback?expire=1741879387&ei=-6PSZ4vOCaG76dsPjeO1qA4&ip=176.1.211.216&id=o-AK4GmFAGAa2WLZH6W1auIHa_AMTlaFzjIzKdaxOuEIFo&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AUWDL3zSlfVHyeUrAIAFNnztMx8JYoEI4w_31iCcD9fE-EH0YbCf5z04G-CJzH97v4MPyqeqySrMtDjm&spc=RjZbSegtP1LsPqCuh_psxvnovbQCY-KVhqn5qLJAVJv2KAbKp6CE&vprv=1&svpuc=1&mime=video%2Fmp4&ns=xMEDDJP6syLdu_c_ieUkUAQQ&rqh=1&cnr=14&ratebypass=yes&dur=202.663&lmt=1664373819976782&fexp=51355912%2C51358316%2C51411872&c=WEB&sefc=1&txp=5538434&n=j1FVUM_fRxLuqA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgWbw9CUVpf5q0VhmPba2d13xOd5XDF5aYYZS2vT8WUAICIQDxpap06ZSjSSo0qoYSotuumwpxAZy80lkSKKYdm9qQcw%3D%3D&pot=MnR_CCIwBCHVyn80fJVrLmOp_RxA_TRGdS0x7k4b1pggtX3AKrBTCbesxQsR8D93jSS9oOOyEKO-jU6sHJ015IXlZgEduv4xj_ZlETF2TsOhYyVe1hYh7bXkOuR-_ufNXmQm32BYY5JizBhKzmQESgZJiE03Jw==&cms_redirect=yes&met=1741858271,&mh=rD&mip=139.5.250.105&mm=31&mn=sn-xmjpuxa-itqz&ms=au&mt=1741857664&mv=m&mvi=5&pcm2cms=yes&pl=24&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl,rms&lsig=AFVRHeAwRQIhAL_wERIcKj0JIy2G9bm4bbfBpkSBPc-1NicBZzDmFCHEAiBTCGT_6Q5AG2hF-HMG24MP3kM0KaGx5ZOKuCF3KU3qVA%3D%3D",
    "360p": "https://r5---sn-xmjpuxa-itqz.googlevideo.com/videoplayback?expire=1741879387&ei=-6PSZ4vOCaG76dsPjeO1qA4&ip=176.1.211.216&id=o-AK4GmFAGAa2WLZH6W1auIHa_AMTlaFzjIzKdaxOuEIFo&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AUWDL3zSlfVHyeUrAIAFNnztMx8JYoEI4w_31iCcD9fE-EH0YbCf5z04G-CJzH97v4MPyqeqySrMtDjm&spc=RjZbSegtP1LsPqCuh_psxvnovbQCY-KVhqn5qLJAVJv2KAbKp6CE&vprv=1&svpuc=1&mime=video%2Fmp4&ns=xMEDDJP6syLdu_c_ieUkUAQQ&rqh=1&cnr=14&ratebypass=yes&dur=202.663&lmt=1664373819976782&fexp=51355912%2C51358316%2C51411872&c=WEB&sefc=1&txp=5538434&n=j1FVUM_fRxLuqA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgWbw9CUVpf5q0VhmPba2d13xOd5XDF5aYYZS2vT8WUAICIQDxpap06ZSjSSo0qoYSotuumwpxAZy80lkSKKYdm9qQcw%3D%3D&pot=MnR_CCIwBCHVyn80fJVrLmOp_RxA_TRGdS0x7k4b1pggtX3AKrBTCbesxQsR8D93jSS9oOOyEKO-jU6sHJ015IXlZgEduv4xj_ZlETF2TsOhYyVe1hYh7bXkOuR-_ufNXmQm32BYY5JizBhKzmQESgZJiE03Jw==&cms_redirect=yes&met=1741858271,&mh=rD&mip=139.5.250.105&mm=31&mn=sn-xmjpuxa-itqz&ms=au&mt=1741857664&mv=m&mvi=5&pcm2cms=yes&pl=24&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl,rms&lsig=AFVRHeAwRQIhAL_wERIcKj0JIy2G9bm4bbfBpkSBPc-1NicBZzDmFCHEAiBTCGT_6Q5AG2hF-HMG24MP3kM0KaGx5ZOKuCF3KU3qVA%3D%3D",
    "720p": "https://r5---sn-xmjpuxa-itqz.googlevideo.com/videoplayback?expire=1741879387&ei=-6PSZ4vOCaG76dsPjeO1qA4&ip=176.1.211.216&id=o-AK4GmFAGAa2WLZH6W1auIHa_AMTlaFzjIzKdaxOuEIFo&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AUWDL3zSlfVHyeUrAIAFNnztMx8JYoEI4w_31iCcD9fE-EH0YbCf5z04G-CJzH97v4MPyqeqySrMtDjm&spc=RjZbSegtP1LsPqCuh_psxvnovbQCY-KVhqn5qLJAVJv2KAbKp6CE&vprv=1&svpuc=1&mime=video%2Fmp4&ns=xMEDDJP6syLdu_c_ieUkUAQQ&rqh=1&cnr=14&ratebypass=yes&dur=202.663&lmt=1664373819976782&fexp=51355912%2C51358316%2C51411872&c=WEB&sefc=1&txp=5538434&n=j1FVUM_fRxLuqA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgWbw9CUVpf5q0VhmPba2d13xOd5XDF5aYYZS2vT8WUAICIQDxpap06ZSjSSo0qoYSotuumwpxAZy80lkSKKYdm9qQcw%3D%3D&pot=MnR_CCIwBCHVyn80fJVrLmOp_RxA_TRGdS0x7k4b1pggtX3AKrBTCbesxQsR8D93jSS9oOOyEKO-jU6sHJ015IXlZgEduv4xj_ZlETF2TsOhYyVe1hYh7bXkOuR-_ufNXmQm32BYY5JizBhKzmQESgZJiE03Jw==&cms_redirect=yes&met=1741858271,&mh=rD&mip=139.5.250.105&mm=31&mn=sn-xmjpuxa-itqz&ms=au&mt=1741857664&mv=m&mvi=5&pcm2cms=yes&pl=24&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl,rms&lsig=AFVRHeAwRQIhAL_wERIcKj0JIy2G9bm4bbfBpkSBPc-1NicBZzDmFCHEAiBTCGT_6Q5AG2hF-HMG24MP3kM0KaGx5ZOKuCF3KU3qVA%3D%3D",
  };

  const changeQuality = (event) => {
    setQuality(event.target.value);
    videoRef.current.load();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10; // Skip forward by 10 seconds
  };

  const handleBackward = () => {
    videoRef.current.currentTime -= 10; // Skip backward by 10 seconds
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  return (
    <div style={containerStyle}>
      <Link to="/Home" style={backButtonStyle}>
        <FaArrowLeft />
      </Link>
      <div style={{ ...videoWrapperStyle, filter: `brightness(${brightness}%)` }}>
        <video
          ref={videoRef}
          style={videoStyle}
          controls
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={videoSources[quality]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={controlsStyle}>
          <select onChange={changeQuality} value={quality} style={dropdownStyle}>
            <option value="240p">240p</option>
            <option value="360p">360p</option>
            <option value="720p">720p</option>
          </select>
        </div>
        <div style={brightnessControlStyle}>
          <label>Brightness: </label>
          <input
            type="range"
            min="50"
            max="200"
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
            style={sliderStyle}
          />
        </div>
        <div style={controlsStyle}>
          <button onClick={handleBackward} style={buttonStyle}>
            Rewind
          </button>
          <button onClick={handleForward} style={buttonStyle}>
            Forward
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#000",
  color: "white",
};

const backButtonStyle = {
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
  fontSize: "24px",
  textDecoration: "none",
};

const videoWrapperStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const videoStyle = {
  width: "800px",
  borderRadius: "10px",
};

const controlsStyle = {
  marginTop: "10px",
};

const dropdownStyle = {
  padding: "5px",
  borderRadius: "5px",
  cursor: "pointer",
};

const brightnessControlStyle = {
  marginTop: "10px",
};

const sliderStyle = {
  width: "150px",
  marginLeft: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "5px",
};

export default VideoPlayer;
