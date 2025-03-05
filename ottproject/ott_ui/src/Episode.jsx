//  import React, { useState } from "react";

// const EpisodeDetails = () => {
//     const [selectedSeason, setSelectedSeason] = useState("5");
//     const [episodes] = useState([
//       {
//         title: "Episode 1",
//         description: "Uhtred, now Lord of Bebbanburg, faces threats from all sides...",
//         thumbnail: "episode-thumbnail.jpg",
//         youtubeLink: "https://www.youtube.com/watch?v=episode1link", // Replace with actual link
//       },
//       {
//         title: "Episode 2",
//         description: "Uhtred and his allies take on new challenges in the North...",
//         thumbnail: "episode-thumbnail2.jpg",
//         youtubeLink: "https://www.youtube.com/watch?v=episode2link", // Replace with actual link
//       },
//       {
//         title: "Episode 3",
//         description: "Brida seeks vengeance against Uhtred, reigniting old animosities...",
//         thumbnail: "episode-thumbnail3.jpg",
//         youtubeLink: "https://www.youtube.com/watch?v=episode3link", // Replace with actual link
//       },
//     ]);
//     const [currentEpisode, setCurrentEpisode] = useState(0);
  
//     const nextEpisode = () => {
//       setCurrentEpisode((prev) => (prev === episodes.length - 1 ? 0 : prev + 1));
//     };
  
//     const prevEpisode = () => {
//       setCurrentEpisode((prev) => (prev === 0 ? episodes.length - 1 : prev - 1));
//     };
  
//     const handleDownload = () => {
//       alert("Download started..."); // Simulating the download action
//     };
  
//     const handleThumbnailClick = () => {
//       window.open(episodes[currentEpisode].youtubeLink, "_blank");
//     };
  
//     const handleButtonClick = (link) => {
//       window.open(link, "_blank"); // Open the YouTube link in a new tab
//     };
  
//     const styles = {
//       container: {
//         background: "url('./') center/cover no-repeat", // Replace with your background image URL
//         color: "white",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//         maxWidth: "1200px",
//         margin: "0 auto",
//         minHeight: "100vh", // Make sure it covers the whole screen
//       },
//       header: {
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginBottom: "20px",
//       },
//       btn: {
//         background: "#007bff",
//         color: "white",
//         padding: "8px 12px",
//         border: "none",
//         cursor: "pointer",
//         transition: "background-color 0.3s ease",
//       },
//       btnHover: {
//         background: "#0056b3",
//       },
//       filters: {
//         display: "flex",
//         marginTop: "15px",
//       },
//       select: {
//         background: "#007bff",
//         color: "white",
//         padding: "8px 12px",
//         border: "none",
//         cursor: "pointer",
//       },
//       episodeNavigation: {
//         display: "flex",
//         justifyContent: "space-between",
//         marginTop: "20px",
//       },
//       swipeBtn: {
//         background: "#007bff",
//         color: "white",
//         padding: "10px",
//         border: "none",
//         cursor: "pointer",
//         width: "45%",
//         transition: "background-color 0.3s ease",
//       },
//       swipeBtnHover: {
//         background: "#0056b3",
//       },
//       episodeCard: {
//         display: "flex",
//         background: "#222",
//         padding: "15px",
//         marginTop: "15px",
//         borderRadius: "8px",
//         boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
//         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//       },
//       episodeCardHover: {
//         transform: "scale(1.05)",
//         boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
//       },
//       episodeThumbnail: {
//         width: "150px",
//         borderRadius: "5px",
//         objectFit: "cover",
//         marginRight: "15px",
//         cursor: "pointer", // Makes it clear the thumbnail is clickable
//       },
//       episodeDetails: {
//         flex: 1,
//       },
//       downloadBtn: {
//         background: "#00a859",
//         padding: "8px 12px",
//         border: "none",
//         cursor: "pointer",
//         marginTop: "10px",
//       },
//     };
  
//     return (
//       <div style={styles.container}>
//         {/* Header */}
//         <div style={styles.header}>
//           <h1>The Last Kingdom</h1>
//           <div>
//             <button
//               style={styles.btn}
//               onMouseOver={(e) => (e.target.style.backgroundColor = styles.btnHover.background)}
//               onMouseOut={(e) => (e.target.style.backgroundColor = styles.btn.background)}
//               onClick={() => handleButtonClick("https://www.youtube.com/watch?v=trailerlink")} // Replace with your trailer link
//             >
//               ▶ Watch Later
//             </button>
//             <button
//               style={styles.btn}
//               onMouseOver={(e) => (e.target.style.backgroundColor = styles.btnHover.background)}
//               onMouseOut={(e) => (e.target.style.backgroundColor = styles.btn.background)}
//               onClick={() => handleButtonClick("https://www.youtube.com/watch?v=watchnowlink")} // Replace with your watch now link
//             >
//               ▶ Watch Now
//             </button>
//           </div>
//         </div>
  
//         {/* Filters */}
//         <div style={styles.filters}>
//           <button style={styles.btn}>{`Season ${selectedSeason}`}</button>
//           <select style={styles.select}>
//             <option>Sort</option>
//             <option>Newest</option>
//             <option>Oldest</option>
//           </select>
//         </div>
  
//         {/* Episode Navigation */}
//         <div style={styles.episodeNavigation}>
//           <button
//             style={styles.swipeBtn}
//             onClick={prevEpisode}
//             onMouseOver={(e) => (e.target.style.backgroundColor = styles.swipeBtnHover.background)}
//             onMouseOut={(e) => (e.target.style.backgroundColor = styles.swipeBtn.background)}
//           >
//             ◁ Prev
//           </button>
//           <button
//             style={styles.swipeBtn}
//             onClick={nextEpisode}
//             onMouseOver={(e) => (e.target.style.backgroundColor = styles.swipeBtnHover.background)}
//             onMouseOut={(e) => (e.target.style.backgroundColor = styles.swipeBtn.background)}
//           >
//             Next ▷
//           </button>
//         </div>
  
//         {/* Episode Card */}
//         <div
//           style={{ ...styles.episodeCard, ...styles.episodeCardHover }}
//           onMouseOver={(e) => e.target.style.transform = styles.episodeCardHover.transform}
//           onMouseOut={(e) => e.target.style.transform = "none"}
//         >
//           <img
//             src={episodes[currentEpisode].thumbnail}
//             alt="Episode Thumbnail"
//             style={styles.episodeThumbnail}
//             onClick={handleThumbnailClick} // Opens YouTube link on click
//           />
//           <div style={styles.episodeDetails}>
//             <h2>{episodes[currentEpisode].title}</h2>
//             <p>{episodes[currentEpisode].description}</p>
//             <button style={styles.downloadBtn} onClick={handleDownload}>Download</button>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default EpisodeDetails;
import React, { useState } from "react";

const EpisodeDetails = () => {
  const [selectedSeason, setSelectedSeason] = useState("5");
  const [episodes] = useState([
    {
      title: "Episode 1",
      description: "jhank serial",
      thumbnail: "https://scontent.fhyd10-2.fna.fbcdn.net/v/t39.30808-6/434677469_332668536490900_8423272896756011024_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2285d6&_nc_ohc=snbW3bZMTZYQ7kNvgH4AsyE&_nc_oc=AdjPC1x2UYv9BzlBEo8HGmdvN9z0cpM6xEWnWPIWCo1cMICzcFhb0WWZV6hDb0QBI_M&_nc_zt=23&_nc_ht=scontent.fhyd10-2.fna&_nc_gid=AcM-1_tZgIkJzu-DuL3zt_R&oh=00_AYAVPd7WEHWTkmDMgIj6uduhHUaUWv5-S-_gbS1pKS4zog&oe=67CA6269",
      youtubeLink: "https://www.youtube.com/watch?v=episode1link", // Replace with actual link
    },
    {
      title: "Episode 2",
      description: "Vantalakka",
      thumbnail: "https://www.manavoice.in/uploads/vantalakka-episode-243-17-mar-2023-maa-tv-telugu-serial.",
      youtubeLink: "https://www.youtube.com/watch?v=episode2link", // Replace with actual link
    },
    {
      title: "Episode 3",
      description: "Patharamattu",
      thumbnail: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/800/1730623650800-i",
      youtubeLink: "https://www.youtube.com/watch?v=episode3link", // Replace with actual link
    },
  ]);
  const [currentEpisode, setCurrentEpisode] = useState(0);

  const nextEpisode = () => {
    setCurrentEpisode((prev) => (prev === episodes.length - 1 ? 0 : prev + 1));
  };

  const prevEpisode = () => {
    setCurrentEpisode((prev) => (prev === 0 ? episodes.length - 1 : prev - 1));
  };

  const handleDownload = () => {
    alert("Download started..."); // Simulating the download action
  };

  const handleThumbnailClick = () => {
    window.open(episodes[currentEpisode].youtubeLink, "_blank");
  };

  const handleButtonClick = (link) => {
    window.open(link, "_blank"); // Open the YouTube link in a new tab
  };

  const styles = {
    container: {
      color: "white",
      fontFamily: "Arial, sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      minHeight: "50vh", // Ensure the container fills the viewport
      paddingTop: "60px", // To ensure the content starts below the header
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    btn: {
      background: "#007bff",
      color: "white",
      padding: "8px 12px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    btnHover: {
      background: "#0056b3",
    },
    filters: {
      display: "flex",
      marginTop: "15px",
    },
    select: {
      background: "#007bff",
      color: "white",
      padding: "8px 12px",
      border: "none",
      cursor: "pointer",
    },
    episodeNavigation: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    swipeBtn: {
      background: "#007bff",
      color: "white",
      padding: "10px",
      border: "none",
      cursor: "pointer",
      width: "45%",
      transition: "background-color 0.3s ease",
    },
    swipeBtnHover: {
      background: "#0056b3",
    },
    episodeCard: {
      display: "flex",
      background: "#222",
      padding: "15px",
      marginTop: "15px",
      borderRadius: "8px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    episodeCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
    },
    episodeThumbnail: {
      width: "150px",
      borderRadius: "5px",
      objectFit: "cover",
      marginRight: "15px",
      cursor: "pointer", // Makes it clear the thumbnail is clickable
    },
    episodeDetails: {
      flex: 1,
    },
    downloadBtn: {
      background: "#00a859",
      padding: "8px 12px",
      border: "none",
      cursor: "pointer",
      marginTop: "10px",
    },
    contentWrapper: {
      position: "relative",
      zIndex: 2, // Ensure the content appears above the background
    },
    backgroundImageContainer: {
      backgroundImage: "url('https://igmedia.blob.core.windows.net/igmedia/kannada/reviews/happy-birthday-review-m.jpg' )", height:"800px", // Replace with your background image URL
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "70vh", // Adjust the height as necessary
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "white",
      padding: "20px",
    },
    backgroundOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
      zIndex: 1,
    },
    backgroundContent: {
      position: "relative",
      zIndex: 2, // Ensure text content stays above the overlay
    },
  };

  return (
    <div style={styles.container}>
      {/* Background image section */}
      <div style={styles.backgroundImageContainer}>
        <div style={styles.backgroundOverlay} />
        <div style={styles.backgroundContent}>
          <h1>The Last Kingdom</h1>
          <button
            style={styles.btn}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.btnHover.background)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.btn.background)}
            onClick={() => handleButtonClick("https://www.youtube.com/watch?v=trailerlink")} // Replace with your trailer link
          >
            ▶ Watch Later
          </button>
          <button
            style={styles.btn}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.btnHover.background)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.btn.background)}
            onClick={() => handleButtonClick("https://www.youtube.com/watch?v=watchnowlink")} // Replace with your watch now link
          >
            ▶ Watch Now
          </button>
        </div>
      </div>

      {/* Filters */}
      <div style={styles.filters}>
        <button style={styles.btn}>{`Season ${selectedSeason}`}</button>
        <select style={styles.select}>
          <option>Sort</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      {/* Episode Navigation */}
      <div style={styles.episodeNavigation}>
        <button
          style={styles.swipeBtn}
          onClick={prevEpisode}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.swipeBtnHover.background)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.swipeBtn.background)}
        >
          ◁ Prev
        </button>
        <button
          style={styles.swipeBtn}
          onClick={nextEpisode}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.swipeBtnHover.background)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.swipeBtn.background)}
        >
          Next ▷
        </button>
      </div>

      {/* Episode Card */}
      <div
        style={{ ...styles.episodeCard, ...styles.episodeCardHover }}
        onMouseOver={(e) => e.target.style.transform = styles.episodeCardHover.transform}
        onMouseOut={(e) => e.target.style.transform = "none"}
      >
        <img
          src={episodes[currentEpisode].thumbnail}
          alt="Episode Thumbnail"
          style={styles.episodeThumbnail}
          onClick={handleThumbnailClick} // Opens YouTube link on click
        />
        <div style={styles.episodeDetails}>
          <h2>{episodes[currentEpisode].title}</h2>
          <p>{episodes[currentEpisode].description}</p>
          <button style={styles.downloadBtn} onClick={handleDownload}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
