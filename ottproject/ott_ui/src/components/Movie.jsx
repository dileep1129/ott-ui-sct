import React, { useState, useEffect } from "react";
import "./Movie.scss";
 
const slides = [
  {
    title: "SPIDER-MAN: NO WAY HOME",
    description:
      "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man.",
    img: "/assets/topmovies/31.jpg",
    trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
  },
  {
    title: "AVENGERS: ENDGAME",
    description:
      "The Avengers must reunite to undo the damage caused by Thanos in this epic conclusion to the Infinity Saga.",
    img: "/assets/topmovies/32.jpg",
    trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  },
  {
    title: "THE BATMAN",
    description:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family.",
    img: "/assets/topmovies/33.jpg",
    trailerLink: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
  },
];
 
const recommendedMovies = [
  {
    title: "Iron Man",
    img: "/assets/movies/1.jpg",
    trailerLink: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
  },
  {
    title: "Harry Potter",
    img: "/assets/movies/2.jpg",
    trailerLink: "https://www.youtube.com/watch?v=csCFusJUgA8",
  },
  {
    title: "Squid Game",
    img: "/assets/movies/3.jpg",
    trailerLink: "https://www.youtube.com/watch?v=oqxAJKy0ii4",
  },
  {
    title: "Star Wars",
    img: "/assets/movies/4.jpg",
    trailerLink: "https://www.youtube.com/watch?v=sGbxmsDFVnE",
  },
  {
    title: "My Trip",
    img: "/assets/movies/5.jpg",
    trailerLink: "https://www.youtube.com/watch?v=CNFm_DzHDaE",
  },
  {
    title: "Avatar",
    img: "/assets/movies/6.jpg",
    trailerLink: "https://www.youtube.com/watch?v=d9MyW72ELq0",
  },
  {
    title: "Vikings",
    img: "/assets/movies/7.jpg",
    trailerLink: "https://www.youtube.com/watch?v=9GgxinPwAGc",
  },
  {
    title: "Beauty and the Beast",
    img: "/assets/movies/8.jpg",
    trailerLink: "https://www.youtube.com/watch?v=pnkgw6pAKkM",
  },
 
 
];
 
const topMovies = [
  {
    title: "Inception",
    img: "/assets/movies/9.jpg",
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    title: "Dark",
    img: "/assets/movies/10.jpg",
    trailerLink: "https://www.youtube.com/watch?v=rrwycJ08PSA",
  },
  {
    title: "Joker",
    img: "/assets/movies/11.jpg",
    trailerLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
  },
  {
    title: "Dune",
    img: "/assets/movies/12.jpg",
    trailerLink: "https://www.youtube.com/watch?v=n9xhJrPXop4",
  },
  {
    title: "Gangs of Newyork",
    img: "/assets/movies/13.jpg",
    trailerLink: "https://www.youtube.com/watch?v=1bjh979vVG0",
  },
  {
    title: "KA",
    img: "/assets/topmovies/1.jpg",
    trailerLink: "https://www.youtube.com/watch?v=n75xEs-9u1I",
  },
  {
    title: "Jailer",
    img: "/assets/topmovies/2.jpg",
    trailerLink: "https://www.youtube.com/watch?v=VutF0FpL4Pw",
  },
  {
    title: "Rangastalam",
    img: "/assets/topmovies/5.jpg",
    trailerLink: "https://www.youtube.com/watch?v=sueMmTm-M4Y",
  },
 
 
];
 
function Movie() {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div>
      {/* Main Slider */}
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
                <a
                  href={slides[currentSlide].trailerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trailer-btn"
                >
                  ▶ Watch Trailer
                </a>
                <a href="#" className="watch-btn">
                  ▶ Watch Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Recommended Movies Section */}
      <div className="section">
        <h1>Recommended Movies</h1>
        <div className="movie-grid">
          {recommendedMovies.map((movie, index) => (
            <a
              key={index}
              href={movie.trailerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="movie-card"
            >
              <img src={movie.img} alt={movie.title} />
              <p>{movie.title}</p>
            </a>
          ))}
        </div>
      </div>
 
      {/* Top 10 Movies Section */}
      <div className="section">
        <h1>Top 10 Movies</h1>
        <div className="movie-grid">
          {topMovies.map((movie, index) => (
            <a
              key={index}
              href={movie.trailerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="movie-card"
            >
              <img src={movie.img} alt={movie.title} />
              <p>{movie.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Movie;
 
 
 
 