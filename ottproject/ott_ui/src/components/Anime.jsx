
// import { Padding } from "@mui/icons-material";
// import React from "react";

// const styles = {
//   container: {
//     textAlign: "center",
//     backgroundColor: "#121212",
//     padding: "20px",
//   },
//   div:{
//     display: "flex",
//   justifyContent: "space-between", 
//   },
//   title: {
//     color: "white",
//     backgroundColor: "red",
//     padding: "10px",
//     borderRadius: "10px",
//     width: "150px",
//   },
//   imgGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
//     gap: "20px",
//     justifyContent: "center",
//     padding: "20px",
//   },
//   imgCard: {
//     padding: "10px",
//     borderRadius: "10px",
//     backgroundColor: "#222",
//   },
//   img: {
//     width: "100%",
//     borderRadius: "10px",
//   },
//   btncontainer: {
//     display: "flex",
//     justifyContent: "center", 
//     columnGap:"20px",
//   },
// };

// function Anime() {
//   return (
//     <div>
//       <div style={styles.div}>
//         <p style={styles.title}>Anime</p>
//         <div className="btn-container">
//             <button id="sortBtn">Sort</button>
//             <button id="filterBtn">Filter</button>
//         </div>
//         </div>
//       <div style={styles.imgGrid}>
//         <div style={styles.imgCard}>
//           <img
//             src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
//             alt="Movie"
//             style={styles.img}
//           />
//         </div>
//         <div style={styles.imgCard}>
//           <img
//             src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
//             alt="Movie"
//             style={styles.img}
//           />
//         </div>
//         <div style={styles.imgCard}>
//           <img
//             src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
//             alt="Movie"
//             style={styles.img}
//           />
//         </div>
//         <div style={styles.imgCard}>
//           <img
//             src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
//             alt="Movie"
//             style={styles.img}
//           />
//         </div>
//         <div style={styles.imgCard}>
//           <img
//             src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
//             alt="Movie"
//             style={styles.img}
//           />
//         </div>
        
//       </div>
//       <div style={styles.imgGrid}>
//         <div style={styles.imgCard}>
//           <img
//             src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
//             alt="Movie"
//             style={styles.img}
//           />
//         </div>
//         <div style={styles.imgCard}>
//           <img
//             src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
//             alt="Movie"
//             style={styles.img}
//           />
//         </div>
//         <div style={styles.imgCard}>
//           <img
//             src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
//             alt="Movie"
//             style={styles.img}
//           />
//         </div>
//         <div style={styles.imgCard}>
//           <img
//             src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
//             alt="Movie"
//             style={styles.img}
//           />
//         </div>
//         <div style={styles.imgCard}>
//           <img
//             src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
//             alt="Movie"
//             style={styles.img}
//           />
//         </div>
        
//       </div>
      
//     </div>
//   );
// }

// export default Anime;



import React from "react";

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#121212",
    padding: "20px",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "10px",
    width: "150px",
    textAlign: "center",
  },
  imgGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
  },
  imgCard: {
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#222",
  },
  img: {
    width: "100%",
    borderRadius: "10px",
  },
};

function Anime() {
  return (
    <div style={styles.container}>
      <div style={styles.div}>
        <p style={styles.title}>Anime</p>
      </div>
      <div style={styles.imgGrid}>
        <div style={styles.imgCard}>
          <a
            href="https://www.youtube.com/watch?v=animeTrailer1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/anime1.jpg"
              alt="Anime Movie"
              style={styles.img}
            />
          </a>
        </div>
        {/* Repeat additional anime movie cards as needed */}
      </div>
    </div>
  );
}

export default Anime;

