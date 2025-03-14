import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import './Home.scss';
 
// Example data for recommended movies
const recommendedMovies = [
  { title: "Eagle", img: "/action1.jpg", trailerLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY" },
  { title: "Shashi", img: "/assets/TVShows/Home/home6.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Drushyam", img: "/assets/images/Ho/home1.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Tej", img: "/assets/TVShows/Home/home4.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Amaron", img: "/assets/amaron movie.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "2018", img: "/assets/action movie.webp", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Yashoda", img: "/assets/Yashoda-movie-review.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "RRR", img: "/assets/rrrr.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Mirchi", img: "/assets/mirchi.webp", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Bharat Ane Nenu", img: "/assets/bharatanenenu.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
];
 
// Example data for top movies
const topMovies = [
  { title: "Laapata Ladies", img: "/assets/movies/10.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Bajirao Mastani", img: "/assets/movies/2.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Animal", img: "/assets/Animal.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Kill", img: "/assets/Kill-1.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "12th Fail", img: "/assets/movies/9.jpeg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Hisaab Barabar", img: "/assets/movies/8.webp", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "MIMI", img: "/assets/movies/7.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Rocky aur Rani ki Prem Kahani", img: "/assets/movies/6.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Chhichhore", img: "/assets/movies/5.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Shaitaan", img: "/assets/movies/4.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
];
 
// Data for series
const series = [
  { title: "Major", img: "/assets/action5.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Saripodha Sanivaaram", img: "/assets/action6.webp", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Bahubali 2", img: "/assets/action7.webp", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Janu", img: "/assets/action4.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Kalki", img: "/assets/action8.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Bhairavakona", img: "/assets/action9.png", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Pushpa 2", img: "/assets/action10.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Tej", img: "/assets/TVShows/Home/home4.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Custody", img: "/action3.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Iddariammayilatho", img: "/assets/services/HHome/AA.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
];
 
// Data for anime
const anime = [
  { title: "Raya", img: "/assets/41.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Encanto", img: "/assets/42.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Sponge Bob", img: "/assets/43.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Demon Slayer", img: "/assets/44.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Drifting", img: "/assets/45.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "The Summit of the Gods", img: "/assets/46.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Gang", img: "/assets/47.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Sound", img: "/assets/48.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Flee", img: "/assets/49.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "The Stolen Princes", img: "/assets/50.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
];
 
// Data for comedy movies
const comedyMovies = [
  { title: "Mem Famous", img: "/assets/51.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Maruthinagar Subramanyam", img: "/assets/52.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Sankranthiki Vasthunam", img: "/assets/53.webp", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "F2", img: "/assets/f2.webp", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Dhamaka", img: "/assets/54.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Tej", img: "/assets/TVShows/Home/home4.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Darlig", img: "/assets/images/Ho/darling.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Ega", img: "/assets/images/Ho/ega.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "F2", img: "/assets/images/Ho/f2.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { title: "Policeodu", img: "/assets/images/Ho/policeodu.jpg", trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
];
 
const slides = [
  {
    title: "RRR",
    description: "RRR was considered one of the ten best films of the year by the National Board of Review, making it only the seventh non-English language film ever to make it to the list",
    img: "/assets/RiseRR.jpeg",
    trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
  },
  {
    title: "HULK",
    description: "I'm a Digital Artist, Singer & Musician. I love movies, objects derived from my favorite movies. I make many fan art, Artworks, Posters, etc. Best regards David",
    img: "/assets/hulk.png",
    trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  },
  {
    title: "ANIMAL",
    description: "The film follows Ranvijay Vijay Singh, a cold-blooded son of a powerful industrialist...",
    img: "/assets/animal1.webp",
    trailerLink: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
  },
];
 
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllRecommended, setShowAllRecommended] = useState(false);
  const [showAllTopMovies, setShowAllTopMovies] = useState(false);
  const [showAllSeries, setShowAllSeries] = useState(false);
  const [showAllAnime, setShowAllAnime] = useState(false);
  const [showAllComedyMovies, setShowAllComedyMovies] = useState(false);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div>
      <NavBar />
 
      {/* Main Slider */}
      <div className="tvshows-container">
        <div
          className="slide"
          style={{
            backgroundImage: `url(${slides[currentSlide].img})`,
            height: "700px"
          }}
        >
          <div className="overlay">
            <div className="content">
              <h1 className="title">{slides[currentSlide].title}</h1>
              <p className="description">{slides[currentSlide].description}</p>
              <div className="buttons">
                <Link to="/VideoPlayer" className="trailer-btn" target="_blank" rel="noopener noreferrer">
                  ▶ Watch Trailer
                </Link>
                <Link to="/VideoPlayer" className="watch-btn">
                  ▶ Watch Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Recommended Movies Section */}
      <div className="section">
        <h1>Recommended Movies</h1>
        <div className="movie-grid">
          {recommendedMovies.slice(0, showAllRecommended ? recommendedMovies.length : 5).map((movie, index) => (
            <Link key={index} to="/VideoPlayer" className="movie-card">
              <img src={movie.img} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
          ))}
        </div>
        <button onClick={() => setShowAllRecommended(!showAllRecommended)} className="see-all-btn">
          {showAllRecommended ? "Show Less" : "See All"}
        </button>
      </div>
 
      {/* Top 10 Movies Section */}
      <div className="section">
        <h1>Top 10 Movies</h1>
        <div className="movie-grid">
          {topMovies.slice(0, showAllTopMovies ? topMovies.length : 5).map((movie, index) => (
            <Link key={index} to="/VideoPlayer" className="movie-card">
              <img src={movie.img} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
          ))}
        </div>
        <button onClick={() => setShowAllTopMovies(!showAllTopMovies)} className="see-all-btn">
          {showAllTopMovies ? "Show Less" : "See All"}
        </button>
      </div>
 
      {/* Series Section */}
      <div className="section">
        <h1>Series</h1>
        <div className="movie-grid">
          {series.slice(0, showAllSeries ? series.length : 5).map((serie, index) => (
            <Link key={index} to="/VideoPlayer" className="movie-card">
              <img src={serie.img} alt={serie.title} />
              <p>{serie.title}</p>
            </Link>
          ))}
        </div>
        <button onClick={() => setShowAllSeries(!showAllSeries)} className="see-all-btn">
          {showAllSeries ? "Show Less" : "See All"}
        </button>
      </div>
 
      {/* Anime Section */}
      <div className="section">
        <h1>Anime</h1>
        <div className="movie-grid">
          {anime.slice(0, showAllAnime ? anime.length : 5).map((animeItem, index) => (
            <Link key={index} to="/VideoPlayer" className="movie-card">
              <img src={animeItem.img} alt={animeItem.title} />
              <p>{animeItem.title}</p>
            </Link>
          ))}
        </div>
        <button onClick={() => setShowAllAnime(!showAllAnime)} className="see-all-btn">
          {showAllAnime ? "Show Less" : "See All"}
        </button>
      </div>
 
      {/* Comedy Movies Section */}
      <div className="section">
        <h1>Comedy Movies</h1>
        <div className="movie-grid">
          {comedyMovies.slice(0, showAllComedyMovies ? comedyMovies.length : 5).map((comedy, index) => (
            <Link key={index} to="/VideoPlayer" className="movie-card">
              <img src={comedy.img} alt={comedy.title} />
              <p>{comedy.title}</p>
            </Link>
          ))}
        </div>
        <button onClick={() => setShowAllComedyMovies(!showAllComedyMovies)} className="see-all-btn">
          {showAllComedyMovies ? "Show Less" : "See All"}
        </button>
      </div>
    </div>
  );
}
 
export default Home;
 