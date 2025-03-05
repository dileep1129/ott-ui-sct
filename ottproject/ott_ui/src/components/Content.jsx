import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
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
  {
    src: "/assets/harry-potter.jpg",
    alt: "Image 2 for carousel",
    movie: "Harry",
    details: "A film inspired true story",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2", // Replace with actual YouTube link
  },
  {
    src: "/assets/image.png",
    alt: "Image 3 for carousel",
    movie: "potter",
    details: "A film inspired by a book",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_3", // Replace with actual YouTube link
  },
];

const Content = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className="navbar">
      <div className="carousel">
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
        {slides.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        ))}
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
        <span className="indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={slide === idx ? "indicator" : "indicator indicator-inactive"}
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>

      <div className="para">
        <h1>{slides[slide].movie}</h1>
        <h3>{slides[slide].details}</h3>
        <p>Lorem ipsum dolor sit amet consec</p>
      </div>

      <div className="playbtn">
        <div className="play">
          {/* Button links directly to YouTube */}
          <a href={slides[slide].videoUrl} target="_blank" rel="noopener noreferrer">
            <button>
              <FaPlay /> Watch
            </button>
          </a>
        </div>
        <div className="play">
          {/* Button links directly to YouTube */}
          <a href={slides[slide].videoUrl} target="_blank" rel="noopener noreferrer">
            <button>
              <LuMonitorPlay /> Watch Here
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content