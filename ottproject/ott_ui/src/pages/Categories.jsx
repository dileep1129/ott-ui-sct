
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
import './Categories.scss';
// import "./script"; 

// import Action from "./Action";
// import Anime from "./Anime";
// import Comedy from "./Comedy";
// import Documentary from "./Documentary";
// import Drama from "./Drama";
// import Horror from "./Horror";
// import Kids from "./Kids"
// import SciFi from "./Sci-fi";

function Categories() {
  useEffect(() => {
  }, []);

  return (
    <Router>
      <div className="app-container">
        <h1>Categories</h1>
        <h3>Genres</h3>

        <nav className="navbar">
          <Link to="/"><h2>Action</h2></Link>
          <Link to="/Anime"><h2>Anime</h2></Link>
          <Link to="/Comedy"><h2>Comedy</h2></Link>
          <Link to="/Documentary"><h2>Documentary</h2></Link>
          <Link to="/Drama"><h2>Drama</h2></Link>
          <Link to="/Horror"><h2>Horror</h2></Link>
          <Link to="/Kids"><h2>Kids</h2></Link>
          <Link to="/Sci-fi"><h2>Sci-fi</h2></Link>
        </nav>

        {/* <main className="content">
          <Routes>
            <Route path="/" element={<Action />} />
            <Route path="/Anime" element={<Anime />} />
            <Route path="/Comedy" element={<Comedy />} />
            <Route path="/Documentary" element={<Documentary />} />
            <Route path="/Drama" element={<Drama />} />
            <Route path="/Horror" element={<Horror />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Sci-fi" element={<SciFi />} />
          </Routes>
        </main> */}

        
        
      </div>
    </Router>
  );
}

export default Categories;
