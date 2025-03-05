// // import React from 'react'
// // import "./Home.scss"
 
// // function Home() {
// //   return (
// //     <div className="parent">
// //      <div className="eternal-voyage">
// //       <div className="overlay">
// //         <div className="content">
// //           <h1 className="title">RRR</h1>
// //           <p className="subtitle">"A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces India."</p>
// //           <p className="description">
// //           RRR (subtitled onscreen as Roudram Ranam Rudhiram) is a 2022 Indian Telugu-language epic historical action drama film directed by S. S. Rajamouli, who co-wrote the script with V. Vijayendra Prasad.
// //           </p>
// //           <div className="buttons">
// //             <button className="trailer-btn">▶ Watch Trailer</button>
// //             <button className="watch-btn">▶ Watch Now</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //         <div className="re">
// //         <h3 className="recom">Recommended Content</h3>
// //         <p className='watch-more'>WatchMore</p>
// //         </div>
// //         <div className="Reco">
// //         <img src="https://th.bing.com/th/id/OIP.Gbb2uUfyu_nkug7pnFr99gHaEo?rs=1&pid=ImgDetMain" alt="Recommended"  className="im1"/>
// //         <img src="https://th.bing.com/th/id/OIP.Gbb2uUfyu_nkug7pnFr99gHaEo?rs=1&pid=ImgDetMain" alt="Recommended"  className="im1"/>
// //         <img src="" alt="Recommended"  className="im1"/>
// //         <img src="/assets/images/homepageimg/14.webp" alt="Recommended" className="im1"/>
// //         </div>
// //         <div className='tr'>
// //           <h3 className="tren">Trending Movies</h3>
// //          <p className="watch-more">WatchMore</p>
// //         </div>
// //         <div className="Tre">
// //         <img src="/assets/images/homepageimg/15.webp" alt="Recommended"  className="im1"/>
// //         <img src="/assets/images/homepageimg/16.webp" alt="Recommended"  className="im1"/>
// //         <img src="/assets/images/homepageimg/17.webp" alt="Recommended"  className="im1"/>
// //         <img src="/assets/images/homepageimg/18.webp" alt="Recommended" className="im1"/>
// //         </div>
       
// //     </div>
// //   )
// // }
 
// // export default Home
// import React, { useState, useEffect } from "react";
// import "./Home.scss";

// const slides = [
//   {
//     title: "SPIDER-MAN: NO WAY HOME",
//     description:
//       "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man.",
//     img: "https://4kwallpapers.com/images/walls/thumbs_2t/7770.jpg",
//     trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
//   },
//   {
//     title: "AVENGERS: ENDGAME",
//     description:
//       "The Avengers must reunite to undo the damage caused by Thanos in this epic conclusion to the Infinity Saga.",
//     img: "https://4kwallpapers.com/images/walls/thumbs_2t/7876.jpg",
//     trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
//   },
//   {
//     title: "THE BATMAN",
//     description:
//       "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family.",
//     img: "https://4kwallpapers.com/images/walls/thumbs_2t/7889.jpg",
//     trailerLink: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
//   },
// ];

// function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="tvshows-container">
//       <div
//         className="slide"
//         style={{ backgroundImage: `url(${slides[currentSlide].img})` }}
//       >
//         <div className="overlay">
//           <div className="content">
//             <h1 className="title">{slides[currentSlide].title}</h1>
//             <p className="description">{slides[currentSlide].description}</p>
//             <div className="buttons">
//               <a
//                 href={slides[currentSlide].trailerLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="trailer-btn"
//               >
//                 ▶ Watch Trailer
//               </a>
//               <a href="#" className="watch-btn">
//                 ▶ Watch Now
//               </a>
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </div>
    
//   );

// }


// export default Home;

import React, { useState, useEffect } from "react";
import "./Home.scss";

const slides = [
  {
    title: "SPIDER-MAN: NO WAY HOME",
    description:
      "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man.",
    img: "/assets/images/Home/1.jpg",
    trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
  },
  {
    title: "AVENGERS: ENDGAME",
    description:
      "The Avengers must reunite to undo the damage caused by Thanos in this epic conclusion to the Infinity Saga.",
    img: "/assets/images/Home/2.jpg",
    trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  },
  {
    title: "THE BATMAN",
    description:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family.",
    img: "/assets/images/Home/3.jpg",
    trailerLink: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
  },
];

const recommendedMovies = [
  {
    title: "Joker",
    img: "/assets/images/Home/20.webp",
    trailerLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
  },
  {
    title: "Inception",
    img: "/assets/images/Home/12.jpg",
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    title: "Interstellar",
    img: "/assets/images/Home/13.webp",
    trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    title: "The Dark Knight",
    img: "/assets/images/Home/14.webp",
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    title: "Gladiator",
    img: "/assets/images/Home/15.webp",
    trailerLink: "https://www.youtube.com/watch?v=owK1qxDselE",
  },
  {
    title: "Titanic",
    img: "/assets/images/Home/16.webp",
    trailerLink: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
  },
  {
    title: "The Matrix",
    img: "/assets/images/Home/17.webp",
    trailerLink: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
  },
  {
    title: "Avengers: Infinity War",
    img: "/assets/images/Home/18.webp",
    trailerLink: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
  },
 
 
];

const topMovies = [
  {
    title: "Movie 1",
    img: "/assets/images/21.jfif",
    trailerLink: "https://www.youtube.com/watch?v=example1",
  },
  {
    title: "Movie 2",
    img: "/assets/images/22.jfif",
    trailerLink: "https://www.youtube.com/watch?v=example2",
  },
  {
    title: "Movie 3",
    img: "/assets/images/23.jfif",
    trailerLink: "https://www.youtube.com/watch?v=example3",
  },
  {
    title: "Movie 4",
    img: "/assets/images/24.jfif",
    trailerLink: "https://www.youtube.com/watch?v=example4",
  },
  {
    title: "Movie 5",
    img: "/assets/images/25.jfif",
    trailerLink: "https://www.youtube.com/watch?v=example5",
  },
  {
    title: "Movie 6",
    img: "/assets/images/26.jfif",
    trailerLink: "https://www.youtube.com/watch?v=example6",
  },
  {
    title: "Movie 7",
    img: "/assets/images/27.jfif",
    trailerLink: "https://www.youtube.com/watch?v=example7",
  },
  {
    title: "Movie 8",
    img: "/assets/images/28.jfif",
    trailerLink: "https://www.youtube.com/watch?v=example8",
  },
  
 
];

function Home() {
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

export default Home;

