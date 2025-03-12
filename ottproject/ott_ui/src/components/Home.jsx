


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './Home.scss';
// import NavBar from "./NavBar";

// // Data for TV showseddwe
// const tvShowsData = [
//   { id: 1, title: "Bhagya Lakshmi", image: "/action1.jpg", date: "8 Mar" },
//   { id: 2, title: "Vasudha", image: "/action3.jpg", date: "8 Mar" },
//   { id: 3, title: "Kumkum Bhagya", image: "/action8.jpg", date: "8 Mar" },
//   { id: 4, title: "Kaise Mujhe Tum Mil Gaye", image: "/action5.jpg", date: "8 Mar" },
//   { id: 5, title: "Jaane Anjaane Hum Mile", image: "/action6.webp", date: "8 Mar" }
// ];

// const moreShowsData = [
//   { id: 6, title: "Jamai No. 1", image: "/action8.jpg", date: "1 Mar" },
//   { id: 7, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/TVShows/Home/home3.jpg", date: "1 Mar" },
//   { id: 8, title: "Kumkum Bhagya", image: "/assets/images/Ho/home1.jpg", date: "8 Mar" },
//   { id: 10, title: "Vasudha", image: "/assets/TVShows/Home/home4.jpg", date: "8 Mar" },
//   { id: 11, title: "Kumkum Bhagya", image: "/assets/TVShows/Home/home5.jpg", date: "8 Mar" },
//   { id: 12, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/TVShows/Home/home6.jpg", date: "8 Mar" },
//   { id: 13, title: "Jaane Anjaane Hum Mile", image: "/assets/TVShows/Home/home7.jpg", date: "8 Mar" },
//    { id: 6, title: "Jamai No. 1", image: "/assets/TVShows/Home/home3.jpg", date: "1 Mar" },
//   { id: 7, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/images/Ho/home1.jpg", date: "1 Mar" },
//   { id: 7, title: "Kaise Mujhe Tum Mil Gaye", image: "/action6.webp", date: "1 Mar" },
// ];

// // Data for Free Hindi Shows
// const hindiShowsData = [
//   { id: 9, title: "Free Show 1", image: "/assets/TVShows/Home/home7.jpg" },
//   { id: 10, title: "Free Show 2", image: "/assets/TVShows/Home/home3.jpg" },
//   { id: 11, title: "Free Show 3", image: "/assets/TVShows/Home/home5.jpg" },
//   { id: 12, title: "Free Show 4", image: "/assets/TVShows/Home/home4.jpg" },
//   { id: 13, title: "Free Show 5", image: "/assets/images/Ho/home1.jpg" }
  
// ];


// const Home = () => {
//   const navigate = useNavigate();
//   const [shows, setShows] = useState(tvShowsData);
//   const [showMore, setShowMore] = useState(false);
//   const [bgImage, setBgImage] = useState(0); // To switch between background images

//   const handleImageClick = (id) => {
//     navigate("/VideoPlayer");
//   };

//   const handleSeeMore = () => {
//     setShowMore(!showMore);
//     setShows(showMore ? tvShowsData : [...tvShowsData, ...moreShowsData]);
//   };

//   // Change the background image every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgImage((prev) => (prev + 1) % 3); // Switch between 3 images
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   const backgroundImages = [
//     'url("/assets/images/Home/1.jpg")', // Replace with your actual image URLs
//     'url("/assets/images/Home/2.jpg")',
//     'url("/assets/images/Home/3.jpg")',
//   ];

//   return (
//     <div>
//       <NavBar />
   
//       <div className="tv-shows">
//         <div className="background-image" style={{ backgroundImage: backgroundImages[bgImage] }}>
//           <h1>Starz TVshows | Premium Access<br />
//           <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
//             <button className="trailer-button">Watch Trailer</button>
//           </a></h1>
//         </div>
//       <h1>Recomended Movies</h1>

//       <div className="shows-grid">
        
//         {shows.map((show) => (
//           <div key={show.id} className="show-item" onClick={() => handleImageClick(show.id)}>
//             <img src={show.image} alt={show.title} />
//             <p>{show.title}</p>
//             <span>{show.date}</span>
//           </div>
//         ))}
//       </div>

//       <button onClick={handleSeeMore}>{showMore ? "See Less" : "See More"}</button>

//       <div className="free-hindi-shows">
//         <h1>Top 10 M</h1>
//         <div className="free-shows-grid">
//           {hindiShowsData.map((show) => (
//             <div key={show.id} className="free-show-item" onClick={() => handleImageClick(show.id)}>
//               <img src={show.image} alt={show.title} />
//               <p>{show.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="shows-grid">
//         {shows.map((show) => (
//           <div key={show.id} className="show-item" onClick={() => handleImageClick(show.id)}>
//             <img src={show.image} alt={show.title} />
//             <p>{show.title}</p>
//             <span>{show.date}</span>
//           </div>
//         ))}
//       </div>

//       <button onClick={handleSeeMore}>{showMore ? "See Less" : "See More"}</button>
//     </div>
// </div>
    
//   );
// };

// export default Home;







// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import NavBar from "./NavBar";




//  const slides = [
//    {
//      title: "Geetha Govindam",
//      description:
//        "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man.",
//      img: "/assets/services/HHome/GG.jpg",
//      trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA",  
//    },
//    {
//      title: "iddarammayilatho",
//      description:
//        "A young woman becomes embroiled in a financial and political conspiracy while studying in Spain, as she meets a young musician with a somewhat dark past unfolded through the pages of his lover's diary.",
//      img: "/assets/services/HHome/AA.jpg",
//      trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
//    },
//    {
//      title: "Don",
//      description:
//        "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family.",
//      img: "/assets/services/HHome/Don.jpg",
//      trailerLink: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
//    },
//  ];
// const recommendedMovies = [
//   { id: 1, title: "Bhagya Lakshmi", image: "/action1.jpg", date: "8 Mar" },
//   { id: 2, title: "Vasudha", image: "/action3.jpg", date: "8 Mar" },
//   { id: 3, title: "Kumkum Bhagya", image: "/action8.jpg", date: "8 Mar" },
//   { id: 4, title: "Kaise Mujhe Tum Mil Gaye", image: "/action5.jpg", date: "8 Mar" },
//   { id: 5, title: "Jaane Anjaane Hum Mile", image: "/action6.webp", date: "8 Mar" },
//   { id: 6, title: "Jamai No. 1", image: "/action8.jpg", date: "1 Mar" },
//   { id: 7, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/TVShows/Home/home3.jpg", date: "1 Mar" },
//   { id: 8, title: "Kumkum Bhagya", image: "/assets/images/Ho/home1.jpg", date: "8 Mar" },
//   { id: 10, title: "Vasudha", image: "/assets/TVShows/Home/home4.jpg", date: "8 Mar" },
//   { id: 11, title: "Kumkum Bhagya", image: "/assets/TVShows/Home/home5.jpg", date: "8 Mar" },
//   { id: 12, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/TVShows/Home/home6.jpg", date: "8 Mar" },
//   { id: 13, title: "Jaane Anjaane Hum Mile", image: "/assets/TVShows/Home/home7.jpg", date: "8 Mar" },
//   { id: 14, title: "Jamai No. 1", image: "/assets/TVShows/Home/home3.jpg", date: "1 Mar" },
//   { id: 15, title: "Kaise Mujhe Tum Mil Gaye", image: "/assets/images/Ho/home1.jpg", date: "1 Mar" },
//   { id: 16, title: "Kaise Mujhe Tum Mil Gaye", image: "/action6.webp", date: "1 Mar" },
// ];

// const topMovies = [
//   { id: 9, title: "Free Show 1", image: "/assets/TVShows/Home/home7.jpg" },
//   { id: 10, title: "Free Show 2", image: "/assets/TVShows/Home/home3.jpg" },
//   { id: 11, title: "Free Show 3", image: "/assets/TVShows/Home/home5.jpg" },
//   { id: 12, title: "Free Show 4", image: "/assets/TVShows/Home/home4.jpg" },
//   { id: 13, title: "Free Show 5", image: "/assets/images/Ho/home1.jpg" },
// ];

// function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showAllRecommended, setShowAllRecommended] = useState(false);
//   const [showAllTopMovies, setShowAllTopMovies] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleImageClick = (id) => {
//     // Navigate to video player or handle click as needed
//     console.log("Clicked movie with id:", id);
//   };

//   return (
//     <div>
//       <NavBar />

//       <div className="tvshows-container">
//         <div
//           className="slide"
//           style={{
//             backgroundImage: `url(${slides[currentSlide].img})`,
//           }}
//         >
//           <div className="overlay">
//             <div className="content">
//               <h1 className="title">{slides[currentSlide].title}</h1>
//               <p className="description">{slides[currentSlide].description}</p>
//               <div className="buttons">
//                 <a
//                   href={slides[currentSlide].trailerLink}
//                   className="trailer-btn"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   ▶ Watch Trailer
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="section">
//         <h1>Recommended Movies</h1>
//         <div className="movie-grid">
//           {recommendedMovies
//             .slice(0, showAllRecommended ? recommendedMovies.length : 5)
//             .map((movie) => (
//               <div
//                 key={movie.id}
//                 className="movie-card"
//                 onClick={() => handleImageClick(movie.id)}
//               >
//                 <img src={movie.image} alt={movie.title} />
//                 <p>{movie.title}</p>
//                 <span>{movie.date}</span>
//               </div>
//             ))}
//         </div>
//         <button
//           onClick={() => setShowAllRecommended(!showAllRecommended)}
//           className="see-all-btn"
//         >
//           {showAllRecommended ? "Show Less" : "See All"}
//         </button>
//       </div>

//       <div className="section">
//         <h1>Top 10 Movies</h1>
//         <div className="movie-grid">
//           {topMovies.map((movie) => (
//             <div
//               key={movie.id}
//               className="movie-card"
//               onClick={() => handleImageClick(movie.id)}
//             >
//               <img src={movie.image} alt={movie.title} />
//               <p>{movie.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;






// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import NavBar from "./NavBar";

// // Sample Slide Data
// const slides = [
//   {
//     title: "Geetha Govindam",
//     description: 


// "Geetha Govindam is a Telugu rom-com where Vijay, a lecturer, pursues Geetha, a headstrong woman. A misunderstanding causes her initial dislike, leading to comedic and romantic attempts to win her over.",
//     img: "/assets/services/HHome/GG.jpg",
//     trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
//   },
//   {
//     title: "Iddarammayilatho",
//     description: "A young woman becomes embroiled in a financial and political conspiracy while studying in Spain.",
//     img: "/assets/services/HHome/AA.jpg",
//     trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
//   },
//   {
//     title: "Don",
//     description: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family.",
//     img: "/assets/services/HHome/Don.jpg",
//     trailerLink: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
//   },
// ];

// // Sample Movie Data
// const recommendedMovies = [
//   { id: 1, title: "Bhagya Lakshmi", image: "/action1.jpg", date: "8 Mar" },
//   { id: 2, title: "Vasudha", image: "/action3.jpg", date: "8 Mar" },
//   { id: 3, title: "Kumkum Bhagya", image: "/action8.jpg", date: "8 Mar" },
//   { id: 4, title: "Kaise Mujhe Tum Mil Gaye", image: "/action5.jpg", date: "8 Mar" },
//   { id: 5, title: "Jaane Anjaane Hum Mile", image: "/action6.webp", date: "8 Mar" },
// ];

// const topMovies = [
//   { id: 6, title: "Free Show 1", image: "/assets/TVShows/Home/home7.jpg" },
//   { id: 7, title: "Free Show 2", image: "/assets/TVShows/Home/home3.jpg" },
//   { id: 8, title: "Free Show 3", image: "/assets/TVShows/Home/home5.jpg" },
//   { id: 9, title: "Free Show 4", image: "/assets/TVShows/Home/home4.jpg" },
//   { id: 10, title: "Free Show 5", image: "/assets/images/Ho/home1.jpg" },
// ];

// function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showAllRecommended, setShowAllRecommended] = useState(false);
//   const [showAllTopMovies, setShowAllTopMovies] = useState(false);

//   // Change Slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleImageClick = (id) => {
//     // Navigate to video player or handle click as needed
//     console.log("Clicked movie with id:", id);
//   };

//   // Inline CSS styles for various components
//   const slideStyle = {
//     backgroundImage: `url(${slides[currentSlide].img})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '900px', // Default height for desktop
//     width: '100%',
//     position: 'relative',
//   };

//   const overlayStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//     color: 'white',
//   };

//   const contentStyle = {
//     width: '80%',
//     maxWidth: '1200px', // Maximum width for content
//   };

//   const titleStyle = {
//     fontSize: '4rem',
//     marginTop:'220px',
//   };

//   const descriptionStyle = {
//     fontSize: '2.1rem',
//     marginBottom: '20px',
//   };

//   const buttonsStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//   };

//   const trailerButtonStyle = {
//     padding: '12px 25px',
//     border: 'none',
//     borderRadius: '5px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     textDecoration: 'none',
//     color: 'white',
//     backgroundColor: 'rgba(255, 0, 0, 0.7)',
//   };

//   const seeAllButtonStyle = {
//     backgroundColor: 'rgba(0, 128, 0, 0.7)',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     display: 'block',
//     margin: '20px auto',
//   };

//   return (
//     <div>
//       <NavBar />

//       {/* Slide Section */}
//       <div style={slideStyle}>
//         <div style={overlayStyle}>
//           <div style={contentStyle}>
//             <h1 style={titleStyle}>{slides[currentSlide].title}</h1>
//             <p style={descriptionStyle}>{slides[currentSlide].description}</p>
//             <div style={buttonsStyle}>
//               <a
//                 href={slides[currentSlide].trailerLink}
//                 style={trailerButtonStyle}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 ▶ Watch Trailer
//               </a>
//                                 <Link 
//                     to="/video-player" 
//                     className="watch-btn" 
//                     style={{
//                         padding: '12px 25px',
//                         backgroundColor: '#008000', // green color for Watch Now button
//                         color: 'white',
//                         textDecoration: 'none', // Remove underline
//                         borderRadius: '5px',
//                         fontSize: '16px',
//                         display: 'inline-block',
//                         textAlign: 'center',
//                         cursor: 'pointer',
//                         transition: '0.3s',
//                     }}
//                     >
//                     ▶ Watch Now
//                     </Link>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recommended Movies Section */}
//       <div className="section">
//         <h1>Recommended Movies</h1>
//         <div className="movie-grid">
//           {recommendedMovies
//             .slice(0, showAllRecommended ? recommendedMovies.length : 5)
//             .map((movie) => (
//               <div
//                 key={movie.id}
//                 className="movie-card"
//                 onClick={() => handleImageClick(movie.id)}
//               >
//                 <img src={movie.image} alt={movie.title} />
//                 <p>{movie.title}</p>
//                 <span>{movie.date}</span>
//               </div>
//             ))}
//         </div>
//         <button
//           onClick={() => setShowAllRecommended(!showAllRecommended)}
//           style={seeAllButtonStyle}
//         >
//           {showAllRecommended ? "Show Less" : "See All"}
//         </button>
//       </div>

//       {/* Top Movies Section */}
//       <div className="section">
//         <h1>Top 10 Movies</h1>
//         <div className="movie-grid">
//           {topMovies.map((movie) => (
//             <div
//               key={movie.id}
//               className="movie-card"
//               onClick={() => handleImageClick(movie.id)}
//             >
//               <img src={movie.image} alt={movie.title} />
//               <p>{movie.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


    import React, { useState, useEffect } from "react";
    import { Link } from "react-router-dom";
    import NavBar from "./NavBar";
    import './Home.scss'


    const slides = [
    {
        title: "Geetha Govindam",
        description:
        "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man.",
        img: "/assets/services/HHome/GG.jpg",
        trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
        
    },
    {
        title: "iddarammayilatho",
        description:
        "A young woman becomes embroiled in a financial and political conspiracy while studying in Spain, as she meets a young musician with a somewhat dark past unfolded through the pages of his lover's diary.",
        img: "/assets/services/HHome/AA.jpg",
        trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    },
    {
        title: "Don",
        description:
        "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family.",
        img: "/assets/services/HHome/Don.jpg",
        trailerLink: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
    },
    ];

    const recommendedMovies = [
    // List of recommended movies
    {
        title: "Joker",
        img: "/action1.jpg",
        trailerLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home6.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/images/Ho/home1.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home4.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/action3.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home6.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home7.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home3.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/action6.webp",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/images/Ho/home1.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home6.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/images/Ho/home1.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home4.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/action3.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home6.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    
    // Add other recommended movies...
    ];

    const topMovies = [
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home6.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/images/Ho/home1.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home4.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/action3.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home6.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home7.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home3.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/action6.webp",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/images/Ho/home1.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home6.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/images/Ho/home1.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home4.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/action3.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home6.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
        title: "Inception",
        img: "/assets/TVShows/Home/home7.jpg",
        trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    
    ];

    function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showAllRecommended, setShowAllRecommended] = useState(false);
    const [showAllTopMovies, setShowAllTopMovies] = useState(false);

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
                // height:'700px'
            }}
            >
            <div className="overlay">
                <div className="content">
                <h1 className="title">{slides[currentSlide].title}</h1>
                <p className="description">{slides[currentSlide].description}</p>
                <div className="buttons">
                    <Link
                    to="/VideoPlayer"
                    className="trailer-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
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
        </div>
    );
    }

    export default Home;




        //     import React, { useState, useEffect } from "react";
        // import { Link } from "react-router-dom";
        // import NavBar from "./NavBar";

        // const slides = [
        // {
        //     title: "Geetha Govindam",
        //     description:
        //     "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man.",
        //     img: "/assets/services/HHome/GG.jpg",
        //     trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
        // },
        // {
        //     title: "iddarammayilatho",
        //     description:
        //     "A young woman becomes embroiled in a financial and political conspiracy while studying in Spain, as she meets a young musician with a somewhat dark past unfolded through the pages of his lover's diary.",
        //     img: "/assets/services/HHome/AA.jpg",
        //     trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        // },
        // {
        //     title: "Don",
        //     description:
        //     "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family.",
        //     img: "/assets/services/HHome/Don.jpg",
        //     trailerLink: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
        // },
        // ];
        // const recommendedMovies = [
            
        //     {
        //         title: "Joker",
        //         img: "/action1.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home6.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/images/Ho/home1.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home4.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/action3.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home6.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home7.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home3.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/action6.webp",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/images/Ho/home1.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home6.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/images/Ho/home1.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home4.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/action3.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home6.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        
        //     ];






        // const topMovies = [
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home6.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/images/Ho/home1.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home4.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/action3.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home6.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home7.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home3.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/action6.webp",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/images/Ho/home1.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home6.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/images/Ho/home1.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home4.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/action3.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home6.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
        //     {
        //         title: "Inception",
        //         img: "/assets/TVShows/Home/home7.jpg",
        //         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     },
            
        //     ];

        // function Home() {
        // const [currentSlide, setCurrentSlide] = useState(0);
        // const [showAllRecommended, setShowAllRecommended] = useState(false);
        // const [showAllTopMovies, setShowAllTopMovies] = useState(false);

        // useEffect(() => {
        //     const interval = setInterval(() => {
        //     setCurrentSlide((prev) => (prev + 1) % slides.length);
        //     }, 5000);

        //     return () => clearInterval(interval);
        // }, []);

        // return (
        //     <div>
        //     <NavBar />

        //     {/* Main Slider */}
        //     <div
        //         style={{
        //         position: "relative",
        //         width: "100%",
        //         height: "900px",
        //         backgroundImage: `url(${slides[currentSlide].img})`,
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //         }}
        //     >
        //         <div
        //         style={{
        //             position: "absolute",
        //             top: 0,
        //             left: 0,
        //             width: "100%",
        //             height: "100%",
        //             backgroundColor: "rgba(0, 0, 0, 0.5)",
        //         }}
        //         >
        //         <div
        //             style={{
        //             position: "absolute",
        //             bottom: "20px",
        //             left: "20px",
        //             color: "white",
        //             padding: "20px",
        //             maxWidth: "80%",
        //             }}
        //         >
        //             <h1 style={{ fontSize: "3rem",  }}>
        //             {slides[currentSlide].title}
        //             </h1>
        //             <p style={{ fontSize: "1.9rem", margin: "0 0 20px" }}>
        //             {slides[currentSlide].description}
        //             </p>
        //             <div>
        //             <Link
        //                 to="/video-player"
        //                 style={{
        //                 backgroundColor: "#f44336",
        //                 color: "white",
        //                 padding: "10px 20px",
        //                 textDecoration: "none",
        //                 marginRight: "10px",
        //                 borderRadius: "5px",
        //                 }}
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 ▶ Watch Trailer
        //             </Link>
        //             <Link
        //                 to="/video-player"
        //                 style={{
        //                 backgroundColor: "#4CAF50",
        //                 color: "white",
        //                 padding: "10px 20px",
        //                 textDecoration: "none",
        //                 borderRadius: "5px",
        //                 }}
        //             >
        //                 ▶ Watch Now
        //             </Link>
        //             </div>
        //         </div>
        //         </div>
        //     </div>

        //     {/* Recommended Movies Section */}
        //     <div style={{ padding: "40px 20px", textAlign: "center" }}>
        //         <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        //         Recommended Movies
        //         </h1>
        //         <div
        //         style={{
        //             display: "grid",
        //             gridTemplateColumns: "repeat(5, minmax(200px, 1fr))",
        //             gap: "20px",
        //             marginBottom: "20px",
        //         }}
        //         >
        //         {recommendedMovies
        //             .slice(0, showAllRecommended ? recommendedMovies.length : 5)
        //             .map((movie, index) => (
        //             <Link
        //                 key={index}
        //                 to="/video-player"
        //                 style={{
        //                 display: "block",
        //                 textAlign: "center",
        //                 textDecoration: "none",
        //                 color: "inherit",
        //                 }}
        //             >
        //                 <img
        //                 src={movie.img}
        //                 alt={movie.title}
        //                 style={{
        //                     width: "100%",
        //                     height: "auto",
        //                     borderRadius: "10px",
        //                     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        //                 }}
        //                 />
        //                 <p style={{ marginTop: "10px", fontSize: "1rem" }}>
        //                 {movie.title}
        //                 </p>
        //             </Link>
        //             ))}
        //         </div>
        //         <button
        //         onClick={() => setShowAllRecommended(!showAllRecommended)}
        //         style={{
        //             backgroundColor: "#2196F3",
        //             color: "white",
        //             padding: "10px 20px",
        //             border: "none",
        //             borderRadius: "5px",
        //             cursor: "pointer",
        //         }}
        //         >
        //         {showAllRecommended ? "Show Less" : "See All"}
        //         </button>
        //     </div>

        //     {/* Top 10 Movies Section */}
        //     <div style={{ padding: "40px 20px", textAlign: "center" }}>
        //         <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Top 10 Movies</h1>
        //         <div
        //         style={{
        //             display: "grid",
        //             gridTemplateColumns: "repeat(5, minmax(200px, 1fr))",
        //             gap: "20px",
        //             marginBottom: "20px",
        //         }}
        //         >
        //         {topMovies
        //             .slice(0, showAllTopMovies ? topMovies.length : 5)
        //             .map((movie, index) => (
        //             <Link
        //                 key={index}
        //                 to="/video-player"
        //                 style={{
        //                 display: "block",
        //                 textAlign: "center",
        //                 textDecoration: "none",
        //                 color: "inherit",
        //                 }}
        //             >
        //                 <img
        //                 src={movie.img}
        //                 alt={movie.title}
        //                 style={{
        //                     width: "100%",
        //                     height: "auto",
        //                     borderRadius: "10px",
        //                     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        //                 }}
        //                 />
        //                 <p style={{ marginTop: "10px", fontSize: "1rem" }}>
        //                 {movie.title}
        //                 </p>
        //             </Link>
        //             ))}
        //         </div>
        //         <button
        //         onClick={() => setShowAllTopMovies(!showAllTopMovies)}
        //         style={{
        //             backgroundColor: "#2196F3",
        //             color: "white",
        //             padding: "10px 20px",
        //             border: "none",
        //             borderRadius: "5px",
        //             cursor: "pointer",
        //         }}
        //         >
        //         {showAllTopMovies ? "Show Less" : "See All"}
        //         </button>
        //     </div>
        //     </div>
        // );
        // }

        // export default Home;
