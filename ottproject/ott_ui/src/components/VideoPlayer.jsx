import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [brightness, setBrightness] = useState(100);
  const [quality, setQuality] = useState("720p"); // Default quality
  const [currentTime, setCurrentTime] = useState(0); // Track video time

  const videoSources = {
    "240p": "https://r5---sn-cvh7knzy.googlevideo.com/videoplayback?expire=1742655935&ei=X33eZ4qPBL-46dsPmdXA-AU&ip=176.1.218.30&id=o-AOFhHeemRzAxzegeniVEWV3F-oJ4KMpVvhl_ZNXOh9dD&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AccgBcNrSmAqKeLw8EApTJ89SiaiMoxhNQlGZNwsQYeqM7fkxxJQ9ohzcwPIkeR_aI8MgWr4wp2_ZnZz&spc=_S3wKmUiWczZk9eJfqGT2emz-602jmdYusLzP_pITZ-_-G1BPZCO&vprv=1&svpuc=1&mime=video%2Fmp4&ns=K9lsoLZNdC2W2bY0eOaVcZYQ&rqh=1&gir=yes&clen=13386471&ratebypass=yes&dur=212.067&lmt=1733609633234907&fexp=24350590,24350737,24350778,24350827,24350961,24351147,24351173,24351283,24351353,24351394,24351397,24351398,24351465,24351468,51355912&c=WEB&sefc=1&txp=5538434&n=ry5hk_Lmaj4sOw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAL3lKxD4CJxxlHeMoJb0eVVZra05023fZ4mXPiG3ZILPAiBnfrVAHUBUlCGsGYgq2CbCs88KcZg7dJXsQP_c88DYlA%3D%3D&pot=MnR3PQy7EP4c83cBsIjFgktI31Ei019PeVod4NTiCrDnjwzRflf9uKtGVRGjSxwiwYN0G0qAB9KPomo-MHfo7AImb0r2XDwx6ihy_Wjt1Sv8U0l-j6jh02nrWlN1mEYO1iYa4Wbl4X74tfSVM-5_aqeU1n4oLg==&redirect_counter=1&cm2rm=sn-xmjpuxa-itqz7d&rrc=80&req_id=ef6869d0f1cfa3ee&cms_redirect=yes&cmsv=e&met=1742634345,&mh=IW&mip=139.5.250.115&mm=29&mn=sn-cvh7knzy&ms=rdu&mt=1742634047&mv=m&mvi=5&pl=24&rms=rdu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AFVRHeAwRAIgAVFLwpVTmC7MWSvLzinHeI8h-3l-46gQ-qrYg0XMQ60CIGvDKM4b_pl8zlJ3RME9kIvD3oGmB_KAL9ZCfxBPa7DG",
    "360p": "https://r5---sn-cvh7knzy.googlevideo.com/videoplayback?expire=1742655935&ei=X33eZ4qPBL-46dsPmdXA-AU&ip=176.1.218.30&id=o-AOFhHeemRzAxzegeniVEWV3F-oJ4KMpVvhl_ZNXOh9dD&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AccgBcNrSmAqKeLw8EApTJ89SiaiMoxhNQlGZNwsQYeqM7fkxxJQ9ohzcwPIkeR_aI8MgWr4wp2_ZnZz&spc=_S3wKmUiWczZk9eJfqGT2emz-602jmdYusLzP_pITZ-_-G1BPZCO&vprv=1&svpuc=1&mime=video%2Fmp4&ns=K9lsoLZNdC2W2bY0eOaVcZYQ&rqh=1&gir=yes&clen=13386471&ratebypass=yes&dur=212.067&lmt=1733609633234907&fexp=24350590,24350737,24350778,24350827,24350961,24351147,24351173,24351283,24351353,24351394,24351397,24351398,24351465,24351468,51355912&c=WEB&sefc=1&txp=5538434&n=ry5hk_Lmaj4sOw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAL3lKxD4CJxxlHeMoJb0eVVZra05023fZ4mXPiG3ZILPAiBnfrVAHUBUlCGsGYgq2CbCs88KcZg7dJXsQP_c88DYlA%3D%3D&pot=MnR3PQy7EP4c83cBsIjFgktI31Ei019PeVod4NTiCrDnjwzRflf9uKtGVRGjSxwiwYN0G0qAB9KPomo-MHfo7AImb0r2XDwx6ihy_Wjt1Sv8U0l-j6jh02nrWlN1mEYO1iYa4Wbl4X74tfSVM-5_aqeU1n4oLg==&redirect_counter=1&cm2rm=sn-xmjpuxa-itqz7d&rrc=80&req_id=ef6869d0f1cfa3ee&cms_redirect=yes&cmsv=e&met=1742634345,&mh=IW&mip=139.5.250.115&mm=29&mn=sn-cvh7knzy&ms=rdu&mt=1742634047&mv=m&mvi=5&pl=24&rms=rdu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AFVRHeAwRAIgAVFLwpVTmC7MWSvLzinHeI8h-3l-46gQ-qrYg0XMQ60CIGvDKM4b_pl8zlJ3RME9kIvD3oGmB_KAL9ZCfxBPa7DG",
    "720p": "https://r5---sn-cvh7knzy.googlevideo.com/videoplayback?expire=1742655935&ei=X33eZ4qPBL-46dsPmdXA-AU&ip=176.1.218.30&id=o-AOFhHeemRzAxzegeniVEWV3F-oJ4KMpVvhl_ZNXOh9dD&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AccgBcNrSmAqKeLw8EApTJ89SiaiMoxhNQlGZNwsQYeqM7fkxxJQ9ohzcwPIkeR_aI8MgWr4wp2_ZnZz&spc=_S3wKmUiWczZk9eJfqGT2emz-602jmdYusLzP_pITZ-_-G1BPZCO&vprv=1&svpuc=1&mime=video%2Fmp4&ns=K9lsoLZNdC2W2bY0eOaVcZYQ&rqh=1&gir=yes&clen=13386471&ratebypass=yes&dur=212.067&lmt=1733609633234907&fexp=24350590,24350737,24350778,24350827,24350961,24351147,24351173,24351283,24351353,24351394,24351397,24351398,24351465,24351468,51355912&c=WEB&sefc=1&txp=5538434&n=ry5hk_Lmaj4sOw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAL3lKxD4CJxxlHeMoJb0eVVZra05023fZ4mXPiG3ZILPAiBnfrVAHUBUlCGsGYgq2CbCs88KcZg7dJXsQP_c88DYlA%3D%3D&pot=MnR3PQy7EP4c83cBsIjFgktI31Ei019PeVod4NTiCrDnjwzRflf9uKtGVRGjSxwiwYN0G0qAB9KPomo-MHfo7AImb0r2XDwx6ihy_Wjt1Sv8U0l-j6jh02nrWlN1mEYO1iYa4Wbl4X74tfSVM-5_aqeU1n4oLg==&redirect_counter=1&cm2rm=sn-xmjpuxa-itqz7d&rrc=80&req_id=ef6869d0f1cfa3ee&cms_redirect=yes&cmsv=e&met=1742634345,&mh=IW&mip=139.5.250.115&mm=29&mn=sn-cvh7knzy&ms=rdu&mt=1742634047&mv=m&mvi=5&pl=24&rms=rdu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AFVRHeAwRAIgAVFLwpVTmC7MWSvLzinHeI8h-3l-46gQ-qrYg0XMQ60CIGvDKM4b_pl8zlJ3RME9kIvD3oGmB_KAL9ZCfxBPa7DG",
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
