import React from "react";
import { FaPlay } from "react-icons/fa";
import { LuMonitorPlay } from "react-icons/lu";

const slides = [
  {
    src: "/assets/GameChanger.jpg",
    alt: "Image 1 for carousel",
    movie: "Harry potter",
    details: "A film inspired by novel",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1", // Replace with actual YouTube link
  },
  
];

const Content = () => {
  // Just showing the first slide statically, no sliding logic needed
  const slide = slides[0];

  return (
    <div className="navbar">
      <div className="carousel">
        {/* Directly displaying the first slide */}
        <img src={slide.src} alt={slide.alt} className="slide" />
      </div>

      <div className="para">
        <h1>{slide.movie}</h1>
        <h3>{slide.details}</h3>
        <p>Lorem ipsum dolor sit amet consec</p>
      </div>

      <div className="playbtn">
        <div className="play">
          {/* Button links directly to YouTube */}
          <a href={slide.videoUrl} target="_blank" rel="noopener noreferrer">
            <button>
              <FaPlay /> Watch
            </button>
          </a>
        </div>
        <div className="play">
          {/* Button links directly to YouTube */}
          <a href={slide.videoUrl} target="_blank" rel="noopener noreferrer">
            <button>
              <LuMonitorPlay /> Watch Here
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
