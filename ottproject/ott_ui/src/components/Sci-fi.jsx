
import { Padding } from "@mui/icons-material";
import React from "react";

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#121212",
    padding: "20px",
  },
  div:{
    display: "flex",
  justifyContent: "space-between", 
  },
  title: {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "10px",
    width: "150px",
  },
  imgGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
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
  btncontainer: {
    display: "flex",
    justifyContent: "center", 
    columnGap:"20px",
  },
};

function SciFi() {
  return (
    <div>
      <div style={styles.div}>
        <p style={styles.title}>Sci-Fi</p>
        <div className="btn-container">
            <button id="sortBtn">Sort</button>
            <button id="filterBtn">Filter</button>
        </div>
        </div>
      <div style={styles.imgGrid}>
        <div style={styles.imgCard}>
          <img
            src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
            alt="Movie"
            style={styles.img}
          />
        </div>
        <div style={styles.imgCard}>
          <img
            src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
            alt="Movie"
            style={styles.img}
          />
        </div>
        <div style={styles.imgCard}>
          <img
            src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
            alt="Movie"
            style={styles.img}
          />
        </div>
        <div style={styles.imgCard}>
          <img
            src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
            alt="Movie"
            style={styles.img}
          />
        </div>
        <div style={styles.imgCard}>
          <img
            src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
            alt="Movie"
            style={styles.img}
          />
        </div>
        
      </div>
      <div style={styles.imgGrid}>
        <div style={styles.imgCard}>
          <img
            src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
            alt="Movie"
            style={styles.img}
          />
        </div>
        <div style={styles.imgCard}>
          <img
            src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
            alt="Movie"
            style={styles.img}
          />
        </div>
        <div style={styles.imgCard}>
          <img
            src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
            alt="Movie"
            style={styles.img}
          />
        </div>
        <div style={styles.imgCard}>
          <img
            src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
            alt="Movie"
            style={styles.img}
          />
        </div>
        <div style={styles.imgCard}>
          <img
            src="https://static.moviecrow.com/movies/910-magadheera/11399-11396-6hxvR-px214.jpg"
            alt="Movie"
            style={styles.img}
          />
        </div>
        
      </div>
    </div>
  );
}

export default SciFi;
