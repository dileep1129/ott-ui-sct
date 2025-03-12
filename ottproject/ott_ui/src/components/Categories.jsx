import React from "react";
import { Link } from "react-router-dom";
// import { Routes,Route } from "react-router-dom";
// import { Routes } from "react-router-dom";
import "./Categories.scss";
import NavBar from "./NavBar";
import { Navbar } from "react-bootstrap";
// 
// import Action from "./Action";
function Categories() {
  return (
    <div>
      <NavBar />
   
    <div className="app-containerc">
      <strong>Categories</strong>
      <h3>Genres</h3>
      <nav className="navbarc">
        {/* These links will open in a new tab because of target="_blank" */}
        <Link to='/Action' rel="noopener noreferrer">
          <h2>Action</h2>
        </Link>
        <Link to='/Anime' rel="noopener noreferrer">
          <h2>Anime</h2>
        </Link>
        <Link to='/Comedy' rel="noopener noreferrer">
          <h2>Comedy</h2>
        </Link>
        <Link to='/Doumentary' rel="noopener noreferrer">
          <h2>Documentary</h2>
        </Link>
        <Link  to='/Drama'rel="noopener noreferrer">
          <h2>Drama</h2>
        </Link>
        <Link to="/Horror"  rel="noopener noreferrer">
          <h2>Horror</h2>
        </Link>
        <Link to="/Kids"  rel="noopener noreferrer">
          <h2>Kids</h2>
        </Link>  
        <Link to='./Sc-fi' rel="noopener noreferrer">
          <h2>Sci-fi</h2>
        </Link>
      </nav>
      
     
    </div>
    </div>
  );
}

export default Categories;
