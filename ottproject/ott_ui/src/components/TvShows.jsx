import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './TVshows.scss';
import NavBar from "./NavBar";

// Data for TV shows
const tvShowsData = [
  { id: 1, title: "Bhagya Lakshmi", image: "/assets/TVShows/TVSh1.jpg", date: "8 Mar" },
  { id: 2, title: "Vasudha", image: "/assets/TVShows/TVSh2.webp", date: "8 Mar" },
  { id: 3, title: "Kumkum Bhagya", image: "/assets/TVShows/TVSh3.jpg", date: "8 Mar" },
  { id: 4, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/TVShows/TVSh4.webp", date: "8 Mar" },
  { id: 5, title: "Jaane Anjaane Hum Mile", image: "/assets/TVShows/TVSH5.jpg", date: "8 Mar" }
];

const moreShowsData = [
  { id: 6, title: "Jamai No. 1", image: "/assets/TVShows/TVSH6.jpg", date: "1 Mar" },
  { id: 7, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/TVShows/TVsh7.webp", date: "1 Mar" },
  { id: 8, title: "Kumkum Bhagya", image: "/assets/TVShows/TVSH8.jpg", date: "8 Mar" },
  { id: 10, title: "Vasudha", image: "/assets/TVShows/TVSh1.jpg", date: "8 Mar" },
  { id: 11, title: "Kumkum Bhagya", image: "/assets/TVShows/TVSh4.webp", date: "8 Mar" },
  { id: 12, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/TVShows/TVSh3.jpg", date: "8 Mar" },
  { id: 13, title: "Jaane Anjaane Hum Mile", image: "/assets/TVShows/TVSh4.webp", date: "8 Mar" },
   { id: 6, title: "Jamai No. 1", image: "/assets/TVShows/TVSH6.jpg", date: "1 Mar" },
  { id: 7, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/TVShows/TVSH5.jpg", date: "1 Mar" },
  { id: 7, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/TVShows/TVSh1.jpg", date: "1 Mar" },
];

// Data for Free Hindi Shows
const hindiShowsData = [
  { id: 9, title: "Free Show 1", image: "/assets/TVShows/hindish7.jpg" },
  { id: 10, title: "Free Show 2", image: "/assets/TVShows/hindish3.jpg" },
  { id: 11, title: "Free Show 3", image: "/assets/TVShows/hindish4.webp" },
  { id: 12, title: "Free Show 4", image: "/assets/TVShows/hindish5.jpg" },
  { id: 13, title: "Free Show 5", image: "/assets/TVShows/hindish6.webp" }
];


const TVShows = () => {
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
    'url("/assets/TVShows/TVSh1.jpg")', // Replace with your actual image URLs
    'url("/assets/TVShows/TVSH8.jpg")',
    'url("/assets/TVShows/hindish5.jpg")',
  ];

  return (
    <div>
      <NavBar />
   
    <div className="tv-shows">
      <div className="background-image" style={{ backgroundImage: backgroundImages[bgImage] }}>
        <h1>Starz TVshows | Premium Access</h1>
      </div>
      <h1>Recomended Tv serials</h1>

      <div className="shows-grid">
        
        {shows.map((show) => (
          <div key={show.id} className="show-item" onClick={() => handleImageClick(show.id)}>
            <img src={show.image} alt={show.title} />
            <p>{show.title}</p>
            <span>{show.date}</span>
          </div>
        ))}
      </div>

      <button onClick={handleSeeMore}>{showMore ? "See Less" : "See More"}</button>

      <div className="free-hindi-shows">
        <h1>Free Hindi Shows</h1>
        <div className="free-shows-grid">
          {hindiShowsData.map((show) => (
            <div key={show.id} className="free-show-item" onClick={() => handleImageClick(show.id)}>
              <img src={show.image} alt={show.title} />
              <p>{show.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="shows-grid">
        {shows.map((show) => (
          <div key={show.id} className="show-item" onClick={() => handleImageClick(show.id)}>
            <img src={show.image} alt={show.title} />
            <p>{show.title}</p>
            <span>{show.date}</span>
          </div>
        ))}
      </div>

      <button onClick={handleSeeMore}>{showMore ? "See Less" : "See More"}</button>
    </div>
</div>
    
  );
};

export default TVShows;

