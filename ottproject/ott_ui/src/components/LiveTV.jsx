import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './LiveTV.scss';
import NavBar from "./NavBar";

// Data for TV shows
const tvShowsData = [
  { id: 1, title: "X-stream", image: "/live5.jpg", date: "8 Mar" },
  { id: 2, title: "Social media", image: "/live7.jpg", date: "8 Mar" },
  { id: 3, title: "NTV-news", image: "/Live2.jpg", date: "8 Mar" },
  { id: 4, title: "News", image: "/live3.jpg", date: "8 Mar" },
  { id: 5, title: "Live-TV", image: "/live8.jpg", date: "8 Mar" }
];

const moreShowsData = [
  { id: 6, title: "Jamai No. 1", image: "/live5.jpg", date: "1 Mar" },
  { id: 7, title: "Kaise Mujhe Tum Mil Gaye", image: "/live6.jpg", date: "1 Mar" },
  { id: 10, title: "Vasudha", image: "/live7.jpg", date: "8 Mar" },
  { id: 8, title: "Kumkum Bhagya", image: "/live3.jpg", date: "8 Mar" },
  { id: 10, title: "Vasudha", image: "/live7.jpg", date: "8 Mar" },
];

// Data for Free Hindi Shows
const hindiShowsData = [
  // Uncomment to add more shows
  // { id: 9, title: "Free Show 1", image: "/assets/TVShows/hindish7.jpg" },
  // { id: 10, title: "Free Show 2", image: "/assets/TVShows/hindish3.jpg" },
];

const LiveTV = () => {
  const navigate = useNavigate();
  const [shows, setShows] = useState(tvShowsData);
  const [showMore, setShowMore] = useState(false);
  const [bgImage, setBgImage] = useState(0); // To switch between background images

  const handleImageClick = (id) => {
    navigate("/VideoPlayer");
  };

  const handleSeeMore = () => {
    setShowMore(!showMore);
    setShows(showMore ? tvShowsData : [...tvShowsData, ...moreShowsData]);
  };

  // Change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prev) => (prev + 1) % 3); // Switch between 3 images
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const backgroundImages = [
    'url("/Live1.jpg")',
    'url("/Live2.jpg")',
    'url("/live3.jpg")',
  ];

  return (
    <div>
      <NavBar />

      <div className="tv-shows">
        <div
          className="background-image"
          style={{ backgroundImage: backgroundImages[bgImage] }}
        >
          <div className="background-content">
            <h1>Starz Live-TV | Premium Access</h1>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <button className="watch-live-btn">Watch Live</button>
            </a>
          </div>
        </div>
        <h1>Live-tv</h1>

        <div className="shows-grid">
          {shows.map((show) => (
            <div
              key={show.id}
              className="show-item"
              onClick={() => handleImageClick(show.id)}
            >
              <img src={show.image} alt={show.title} />
              <p>{show.title}</p>
              <span>{show.date}</span>
            </div>
          ))}
        </div>

        <button onClick={handleSeeMore}>
          {showMore ? "See Less" : "See More"}
        </button>

        <div className="free-hindi-shows">
         
          <div className="free-shows-grid">
            {hindiShowsData.map((show) => (
              <div
                key={show.id}
                className="free-show-item"
                onClick={() => handleImageClick(show.id)}
              >
                <img src={show.image} alt={show.title} />
                <p>{show.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTV;
