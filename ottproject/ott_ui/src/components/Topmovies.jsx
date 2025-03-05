// import React from 'react'
// import { topData } from '../top'

 
// const Topmovies = () => {
//     const data=topData.slice(0,4)
//   return (
//     <div>
//         <div className='txt'>
//          <h1>Top 10 Movies</h1>
    
//          <p>See All</p>
        
//          </div>
//          <div className='movies'>
//             {
//             data.map((item)=>{
//                 return(
//                     <img src={item.image} alt=""  className='movieimg'/>
 
//                 )
//             })
//          }
//         </div>
//         <div className='txt'>
//          <h1>Top 10 Movies</h1>
    
//          <p>See All</p>
        
//          </div>
//          <div className='shows'>
//             {
//             data.map((item)=>{
//                 return(
//                     <img src={item.image} alt=""  className='movieimg'/>
 
//                 )
//             })
//          }
//         </div>
        
//     </div>
    
//   )
// }
 
// export default Topmovies
import React from 'react';
import { topData } from '../top';

const Topmovies = () => {
  const data = topData.slice(0, 5); // Get the first 4 items

  // Get the screen width for responsiveness
  const screenWidth = window.innerWidth;

  // Define the responsive styles based on screen size
  const styles = {
    txt: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    movies: {
      display: 'flex',
      gap: screenWidth < 768 ? '3px' : '3px', // Smaller gap for mobile screens
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    movieLink: {
      display: 'inline-block',
      position: 'relative',
      overflow: 'hidden', // Ensures the image doesn’t overflow the rounded border
      borderRadius: '5px', // Border radius for the links
    },
    movieImg: {
      width: screenWidth < 480 ? '100px' : 
             screenWidth < 768 ? '100px' : 
             screenWidth < 1024 ? '250px' : '250px', // Adjusted for mobile, tablet, and laptop
      height: screenWidth < 480 ? '200px' : 
              screenWidth < 768 ? '200px' : 
              screenWidth < 1024 ? '300px' : '300px', // Adjusted height for mobile, tablet, and laptop
      borderRadius: '15px', // Rounded corners
      objectFit: 'cover', // Ensures the image fills the area without distorting
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    movieImgHover: {
      transform: 'scale(1.1)', // Slight zoom effect on hover
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Adds a shadow effect on hover
    },
    txtHeading: {
      fontSize: screenWidth < 400 ? '18px' : '24px', // Adjust font size for small screens
    },
    txtParagraph: {
      fontSize: screenWidth < 400 ? '14px' : '16px', // Adjust font size for small screens
    },
    seeAllLink: {
      color: '#007BFF', // Link color (You can customize this)
      textDecoration: 'none', // No underline on the link
      cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
    },
  };

  // Define the YouTube channel link (you can replace this with the dynamic link as needed)
  const youtubeChannelLink = 'https://www.youtube.com/c/YourChannel'; // Replace this with your actual YouTube channel URL

  return (
    <div>
      <div className="txt" style={styles.txt}>
        <h1 style={styles.txtHeading}>Top 10 Movies</h1>
        <a href={youtubeChannelLink} target="_blank" rel="noopener noreferrer" style={styles.seeAllLink}>
          <p style={styles.txtParagraph}>See All</p>
        </a>
      </div>

      <div className="movies" style={styles.movies}>
        {
          data.map((item, index) => {
            // Hardcode the YouTube video links for each item (can be replaced with dynamic links)
            const youtubeLinks = [
              "https://www.youtube.com/watch?v=abc123", // Link for movie 1
              "https://www.youtube.com/watch?v=def456", // Link for movie 2
              "https://www.youtube.com/watch?v=ghi789", // Link for movie 3
              "https://www.youtube.com/watch?v=jkl012", // Link for movie 4
            ];

            return (
              <a 
                key={item.id} 
                href={youtubeLinks[index]} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="movieLink" 
                style={styles.movieLink}
              >
                <img 
                  src={item.image} 
                  alt={item.product} 
                  className="movieimg" 
                  style={styles.movieImg} 
                />
              </a>
            );
          })
        }
      </div>

      <div className="txt" style={styles.txt}>
        <h1 style={styles.txtHeading}>Top 10 Shows</h1>
        <a href={youtubeChannelLink} target="_blank" rel="noopener noreferrer" style={styles.seeAllLink}>
          <p style={styles.txtParagraph}>See All</p>
        </a>
      </div>

      <div className="shows" style={styles.movies}>
        {
          data.map((item, index) => {
            // Hardcode the YouTube video links for shows (can be replaced with dynamic links)
            const youtubeLinks = [
              "https://www.youtube.com/watch?v=abc123", // Link for show 1
              "https://www.youtube.com/watch?v=def456", // Link for show 2
              "https://www.youtube.com/watch?v=ghi789", // Link for show 3
              "https://www.youtube.com/watch?v=jkl012", // Link for show 4
            ];

            return (
              <a 
                key={item.id} 
                href={youtubeLinks[index]} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="movieLink" 
                style={styles.movieLink}
              >
                <img 
                  src={item.image} 
                  alt={item.product} 
                  className="movieimg" 
                  style={styles.movieImg} 
                />
              </a>
            );
          })
        }
      </div>
    </div>
  );
};

export default Topmovies;



 
 