import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#121212",
    padding: "20px",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    backgroundColor: "red",
    background:'Transparent',
    border:'2px solid grey',
    boxShadow:'2px 2px 1px 0',
    borderRadius: "10px",
    width: "150px",
    textAlign: "center",
    marginTop:'30px',
    marginLeft:'40px',
  },
  titleIcon: {
    marginLeft: "50px", 
    display: "flex",
    background: "Transparent",
    border: "2px solid grey",
    // boxShadow: "2px 2px 1px 0",
    borderRadius: "10px",
    width: "80px",
    cursor:'pointer',

    
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
    height:'350px'

  },
  btncontainer: {
    display: "flex",
    justifyContent: "center",
    
    // columnGap: "30px",
  },
  select: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    // backgroundColor: "#333",
    background:'Transparent',
    border:'2px solid grey',
    boxShadow:'2px 2px 1px 0',
    // color: "white",  
    cursor: "pointer",
    marginRight:'50px',
    fontSize: "16px",
  },
};

const movieData = [
  { title: "Movie 1", src: "image.png", link: "https://www.youtube.com/watch?v=abcd1234" },
  { title: "Movie 2", src: "action1.jpg", link: "https://www.youtube.com/watch?v=efgh5678" },
  { title: "Movie 3", src: "action3.jpg", link: "https://www.youtube.com/watch?v=ijkl9012" },
  { title: "Movie 4", src: "action4.jpg", link: "https://www.youtube.com/watch?v=mnop3456" },
  { title: "Movie 5", src: "action5.jpg", link: "https://www.youtube.com/watch?v=qrst7890" },
  { title: "Movie 6", src: "action6.webp", link: "https://www.youtube.com/watch?v=uvwx1234" },
  { title: "Movie 7", src: "action7.webp", link: "https://www.youtube.com/watch?v=yzaa5678" },
  { title: "Movie 8", src: "action8.jpg", link: "https://www.youtube.com/watch?v=bcde9012" },
  { title: "Movie 9", src: "action9.png", link: "https://www.youtube.com/watch?v=fghi3456" },
  { title: "Movie 10", src: "action10.jpg", link: "https://www.youtube.com/watch?v=jkln7890" },
];
function Kids() {
  const [movies, setMovies] = useState(movieData);
  const [sortOrder, setSortOrder] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    let sortedMovies = [...movies];
    if (order === "asc") {
      sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === "desc") {
      sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
    }
    setMovies(sortedMovies);
  };

  const handleFilterChange = (e) => {
    const type = e.target.value;
    setFilterType(type);
    let filteredMovies = movieData;
    if (type === "even") {
      filteredMovies = movieData.filter((_, index) => index % 2 === 0);
    } else if (type === "odd") {
      filteredMovies = movieData.filter((_, index) => index % 2 !== 0);
    }
    setMovies(filteredMovies);
  };

  return (
    <div>
      <div style={styles.div}>
      <div className="titl">
       <p> <Link to='/Categories'><FaArrowLeft style={styles.titleIcon} /></Link></p>
        
        <p style={styles.title}>
          Kids
        </p>
       </div>
        <div className="btn-container" style={styles.btncontainer}>
          <select style={{ ...styles.select, backgroundColor: "Black", color: "White" }} onChange={handleSortChange} value={sortOrder}>
            <option value="">Sort</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
          <select style={{ ...styles.select, backgroundColor: "Black", color: "White" }} onChange={handleFilterChange} value={filterType}>
            <option value="">Filter</option>
            <option value="even">Even Movies</option>
            <option value="odd">Odd Movies</option>
          </select>
        </div>
      </div>
      <div style={styles.imgGrid}>
        {movies.map((movie, index) => (
          <div key={index} style={styles.imgCard}>
            <a href={movie.link} target="_blank" rel="noopener noreferrer">
              <img src={`/${movie.src}`} height="330px" alt={movie.title} style={styles.img} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Kids;





