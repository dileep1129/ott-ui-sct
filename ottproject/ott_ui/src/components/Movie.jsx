import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Movie.scss";
import NavBar from "./NavBar";
import { Navbar } from "react-bootstrap";

const slides = [
  {
    title: "SPIDER-MAN: NO WAY HOME",
    description: "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man.",
    img: "/assets/31.jpg",
    trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
  },
  {
    title: "AVENGERS",
    description: "Avengers is a 2010 science fiction action film directed by Christopher Nolan.",
    img: "/assets/32.jpg", 
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    title: "BATMAN",
    description: "Batman is a 2014 epic science fiction film directed by Christopher Nolan.",
    img: "/assets/33.jpg", 
    trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    title: "HARRY POTTER",
    description: "Harry Potter is a 2008 superhero film directed by Christopher Nolan.",
    img: "/assets/harry-potter.jpg",
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  // Add more slides as necessary...
];

const recommendedMovies = [
  {
    title: "Ninnu Kori",
    img: "/home6.jpg",
    trailerLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
  },
  {
    title: "Godavari",
    img: "/home7.jpg",
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    title: "Seetharaman",
    img: "/home8.jpg",
    trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    title: "Bommarillu",
    img: "/home9.jpg",
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    title: "Taxiwaala",
    img: "/home20.jpg",
    trailerLink: "https://www.youtube.com/watch?v=owK1qxDselE",
  },
  {
    title: "Titanic",
    img: "/home5.jpg",
    trailerLink: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
  },
  {
    title: "The Matrix",
    img: "/home5.jpg",
    trailerLink: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
  },
  {
    title: "Avengers: Infinity War",
    img: "/home3.jpg",
    trailerLink: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
  },
  {
    title: "Business Man",
    img: "/Home1.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example1",
  },
  {
    title: "Ala Vaikuntapuramloo",
    img: "/home2.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example2",
  },
  {
    title: "Movie 3",
    img: "/home3.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example3",
  },
  {
    title: "Bramhostaham",
    img: "/Home4.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example4",
  },
  {
    title: "Movie 5",
    img: "/home5.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example5",
  },
  {
    title: "Godavari",
    img: "/home7.jpg",
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
];

const topMovies = [
  {
    title: "Movie 1",
    img: "/Home1.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example1",
  },
  {
    title: "Movie 2",
    img: "/home2.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example2",
  },
  {
    title: "Movie 3",
    img: "/home3.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example3",
  },
  {
    title: "Movie 4",
    img: "/Home4.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example4",
  },
  {
    title: "Movie 5",
    img: "/home5.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example5",
  },
  {
    title: "Inception",
    img: "/home7.jpg",
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    title: "Interstellar",
    img: "/home8.jpg",
    trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    title: "The Dark Knight",
    img: "/home9.jpg",
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    title: "Joker",
    img: "/home6.jpg",
    trailerLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
  },
  {
    title: "Inception",
    img: "/home7.jpg",
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    title: "Interstellar",
    img: "/home8.jpg",
    trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    title: "The Dark Knight",
    img: "/home9.jpg",
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    title: "Gladiator",
    img: "/home20.jpg",
    trailerLink: "https://www.youtube.com/watch?v=owK1qxDselE",
  },
  {
    title: "Titanic",
    img: "/home5.jpg",
    trailerLink: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
  },
  {
    title: "The Matrix",
    img: "/home5.jpg",
    trailerLink: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
  },
  {
    title: "Inception",
    img: "/home7.jpg",
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  
 
];

function Movie() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllRecommended, setShowAllRecommended] = useState(false);
  const [showAllTopMovies, setShowAllTopMovies] = useState(false);
  const [showAllSlides, setShowAllSlides] = useState(false);

  const handleShowAllRecommended = () => {
    setShowAllRecommended((prev) => !prev);
  };

  const handleShowAllTopMovies = () => {
    setShowAllTopMovies((prev) => !prev);
  };

  const handleShowAllSlides = () => {
    setShowAllSlides((prev) => !prev);
  };

  const handleImageClick = (movieTitle, trailerLink) => {
    navigate('/videoplayer', { state: { movieTitle, trailerLink } });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <NavBar />
      {/* Slides Section */}
      <div className="tvshows-container">
        <div
          className="slide"
          style={{ backgroundImage: `url(${slides[currentSlide].img})` }}
        >
          <div className="overlay">
            <div className="content">
              <h1 className="title">{slides[currentSlide].title}</h1>
              <p className="description">{slides[currentSlide].description}</p>
              <div className="buttons">
                <button
                  onClick={() => handleImageClick(slides[currentSlide].title, slides[currentSlide].trailerLink)}
                  className="trailer-btn"
                >
                  ▶ Watch Trailer
                </button>
                <button
                  onClick={() => handleImageClick(slides[currentSlide].title, slides[currentSlide].trailerLink)}
                  className="watch-btn"
                >
                  ▶ Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleShowAllSlides}>
          {showAllSlides ? "See Less" : "See All Slides"}
        </button>
        {showAllSlides && (
          <div className="all-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="slide-card"
                onClick={() => handleImageClick(slide.title, slide.trailerLink)}
              >
                <img src={slide.img} alt={slide.title} />
                <p>{slide.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recommended Movies Section */}
      <div className="section">
        <h1>Recommended Movies</h1>
        <div className="movie-grid">
          {recommendedMovies
            .slice(0, showAllRecommended ? recommendedMovies.length : 5)
            .map((movie, index) => (
              <div
                key={index}
                className="movie-card"
                onClick={() => handleImageClick(movie.title, movie.trailerLink)}
              >
                <img src={movie.img} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
        </div>
        <button onClick={handleShowAllRecommended}>
          {showAllRecommended ? "See Less" : "See All"}
        </button>
      </div>

      {/* Top 10 Movies Section */}
      <div className="section">
        <h1>Top 10 Movies</h1>
        <div className="movie-grid">
          {topMovies
            .slice(0, showAllTopMovies ? topMovies.length : 5)
            .map((movie, index) => (
              <div
                key={index}
                className="movie-card"
                onClick={() => handleImageClick(movie.title, movie.trailerLink)}
              >
                <img src={movie.img} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
        </div>
        <button onClick={handleShowAllTopMovies}>
          {showAllTopMovies ? "See Less" : "See All"}
        </button>
      </div>
    </div>
  );
}

export default Movie;

