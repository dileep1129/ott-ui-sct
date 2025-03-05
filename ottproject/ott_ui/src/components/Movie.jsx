import React, { useState, useEffect } from "react";
import "./Movie.scss";

const slides = [
  {
    title: "SPIDER-MAN: NO WAY HOME",
    description:
      "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man.",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/7770.jpg",
    trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
  },
  {
    title: "AVENGERS: ENDGAME",
    description:
      "The Avengers must reunite to undo the damage caused by Thanos in this epic conclusion to the Infinity Saga.",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/7876.jpg",
    trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  },
  {
    title: "THE BATMAN",
    description:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family.",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/7889.jpg",
    trailerLink: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
  },
];

const recommendedMovies = [
  {
    title: "Joker",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/4377.jpg",
    trailerLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
  },
  {
    title: "Inception",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/2345.jpg",
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    title: "Interstellar",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/1234.jpg",
    trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    title: "The Dark Knight",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/9987.jpg",
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    title: "Gladiator",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/5678.jpg",
    trailerLink: "https://www.youtube.com/watch?v=owK1qxDselE",
  },
  {
    title: "Titanic",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/3344.jpg",
    trailerLink: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
  },
  {
    title: "The Matrix",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/7722.jpg",
    trailerLink: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
  },
  {
    title: "Avengers: Infinity War",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/1212.jpg",
    trailerLink: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
  },
 
 
];

const topMovies = [
  {
    title: "Movie 1",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/1001.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example1",
  },
  {
    title: "Movie 2",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/1002.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example2",
  },
  {
    title: "Movie 3",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/1003.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example3",
  },
  {
    title: "Movie 4",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/1004.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example4",
  },
  {
    title: "Movie 5",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/1005.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example5",
  },
  {
    title: "Movie 6",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/1006.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example6",
  },
  {
    title: "Movie 7",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/1007.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example7",
  },
  {
    title: "Movie 8",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/1008.jpg",
    trailerLink: "https://www.youtube.com/watch?v=example8",
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


