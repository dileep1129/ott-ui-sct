// // import React from 'react'
// // import { remData } from './res'



 
// // const Recommended = () => {
// //     const data=remData.slice(0,4)
// //   return (
// //     <div>
// //         <div className='txt'>
// //          <h1>Recommended content</h1>
// //          <p>See All</p>
      
// //          </div>
// //          <div className='movies'>
// //             {
// //             data.map((item)=>{
// //                 return(
// //                     <img src={item.image} alt=""  className='movieimg'/>
 
// //                 )
// //             })
// //          }
// //         </div>
// //     </div>
// //   )
// // }
 
// // export default Recommended;
// import React, { useState, useEffect } from 'react';
// import { remData } from './res';

// const Recommended = () => {
//   const data = remData.slice(0, 4);

//   // State to track window width
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   // Update window width on resize 
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     // Clean up event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Define styles based on window width
//   const containerStyle = {
//     padding: '20px',
//   };

//   const txtStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px',
//     flexDirection: windowWidth <= 768 ? 'column' : 'row',
//   };

//   const moviesStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: windowWidth <= 480 ? '10px' : '20px',
//     flexDirection: windowWidth <= 768 ? 'column' : 'row',
//   };

//   const movieImgStyle = {
//     width: windowWidth <= 480 ? '100%' : '250px',
//     height: windowWidth <= 480 ? '150px' : 'auto',
//     objectFit: 'cover',
//     borderRadius: '10px',
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={txtStyle}>
//         <h1>Recommended content</h1>
//         <p>See All</p>
//       </div>
//       <div style={moviesStyle}>
//         {/* {data.map((item) => (
//           <img
//             key={item.id}
//             src={item.image}
//             alt=""
//             style={movieImgStyle}
//           />
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default Recommended;
import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { LuMonitorPlay } from "react-icons/lu";

// Sample Data for Recommended and Top Movies
const remData = [
  { id: 1, image: "/assets/movies/5.jpg" },
  { id: 2, image: "/assets/movies/6.jpg" },
  { id: 3, image: "/assets/image.png" },
  { id: 4, image: "/assets/GameChanger.jpg" },
];

const topData = [
  { id: 1, image: "/assets/topmovies/5.jpg" },
  { id: 2, image: "/assets/topmovies/2.jpg" },
  { id: 3, image: "/assets/topmovies/8.jpg" },
  { id: 4, image: "/assets/amaron movie.jpg" },
  { id: 5, image: "/assets/topmovies/1.jpg" },
];

const slides = [
  {
    src: "/assets/movies/13.jpg",
    alt: "Image 1 for carousel",
    movie: "Harry potter",
    details: "A film inspired by novel",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1",
  },
  {
    src: "/assets/movies/12.jpg",
    alt: "Image 2 for carousel",
    movie: "Harry",
    details: "A film inspired true story",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2",
  },
  {
    src: "/assets/movies/11.jpg",
    alt: "Image 3 for carousel",
    movie: "potter",
    details: "A film inspired by a book",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_3",
  },
];

const App = () => {
  // State for carousel (Content component)
  const [slide, setSlide] = useState(0);
  const nextSlide = () => setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  const prevSlide = () => setSlide(slide === 0 ? slides.length - 1 : slide - 1);

  // State for Recommended component
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // State for TopMovies component
  const screenWidth = window.innerWidth;

  return (
    <div>
      {/* Content Component */}
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
            <a href={slides[slide].videoUrl} target="_blank" rel="noopener noreferrer">
              <button>
                <FaPlay /> Watch
              </button>
            </a>
          </div>
          <div className="play">
            <a href={slides[slide].videoUrl} target="_blank" rel="noopener noreferrer">
              <button>
                <LuMonitorPlay /> Watch Here
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Recommended Component */}
      {/* <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexDirection: windowWidth <= 768 ? "column" : "row" }}>
          <h1>Recommended content</h1>
          <p>See All</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: windowWidth <= 480 ? "10px" : "20px", flexDirection: windowWidth <= 768 ? "column" : "row" }}>
          {remData.slice(0, 4).map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt="Recommended"
              style={{
                width: windowWidth <= 480 ? "100%" : "250px",
                height: windowWidth <= 480 ? "150px" : "auto",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          ))}
        </div>
      </div> */}

      {/* TopMovies Component */}
      <div>
        <div style={{  display:"flex", marginTop: "50px",marginBottom:"50px",justifyContent:"space-between",paddingRight:"50px" }}>
          <h1 style={{ fontSize: screenWidth < 400 ? "18px" : "24px" }}>Top 10 Movies</h1>
          <a href="https://www.youtube.com/c/YourChannel" target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF", textDecoration: "none", cursor: "pointer" }}>
            <p style={{ fontSize: screenWidth < 400 ? "14px" : "16px" }}>See All</p>
          </a>
        </div>

        <div style={{ display: "flex", gap: screenWidth < 768 ? "3px" : "3px", justifyContent: "center", flexWrap: "wrap" }}>
          {topData.slice(0, 5).map((item, index) => (
            <a
              key={item.id}
              href={`https://www.youtube.com/watch?v=${index === 0 ? "abc123" : index === 1 ? "def456" : index === 2 ? "ghi789" : index === 3 ? "jkl012" : "xyz999"}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
                borderRadius: "5px",
              }}
            >
              <img
                src={item.image}
                alt="Movie"
                style={{
                  width: screenWidth < 480 ? "100px" : screenWidth < 768 ? "100px" : "250px",
                  height: screenWidth < 480 ? "200px" : screenWidth < 768 ? "200px" : "300px",
                  borderRadius: "15px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              />
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: screenWidth < 400 ? "18px" : "24px" }}>Top 10 Shows</h1>
          <a href="https://www.youtube.com/c/YourChannel" target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF", textDecoration: "none", cursor: "pointer" }}>
            <p style={{ fontSize: screenWidth < 400 ? "14px" : "16px" }}>See All</p>
          </a>
        </div>

        <div style={{ display: "flex", gap: screenWidth < 768 ? "3px" : "3px", justifyContent: "center", flexWrap: "wrap" }}>
          {topData.slice(0, 5).map((item, index) => (
            <a
              key={item.id}
              href={`https://www.youtube.com/watch?v=${index === 0 ? "abc123" : index === 1 ? "def456" : index === 2 ? "ghi789" : index === 3 ? "jkl012" : "xyz999"}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
                borderRadius: "5px",
              }}
            >
              <img
                src={item.image}
                alt="Show"
                style={{
                  width: screenWidth < 480 ? "100px" : screenWidth < 768 ? "100px" : "250px",
                  height: screenWidth < 480 ? "200px" : screenWidth < 768 ? "200px" : "300px",
                  borderRadius: "15px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

