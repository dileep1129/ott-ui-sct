
// import React, { useEffect } from "react";

// import './Categories.scss';


// import Action from "./Action";
// import Anime from "./Anime";
// import Comedy from "./Comedy";
// import Documentary from "./Documentary";
// import Drama from "./Drama";
// import Horror from "./Horror";
// import Kids from "./Kids"
// import SciFi from "./Sci-fi";

// function Categories() {
//   useEffect(() => {
//   }, []);

//   return (
//     <Router>
//       <div className="app-container">
//         <h1>Categories</h1>
//         <h3>Genres</h3>

//         <nav className="navbar">
//           <Link to="/"><h2>Action</h2></Link>
//           <Link to="/Anime"><h2>Anime</h2></Link>
//           <Link to="/Comedy"><h2>Comedy</h2></Link>
//           <Link to="/Documentary"><h2>Documentary</h2></Link>
//           <Link to="/Drama"><h2>Drama</h2></Link>
//           <Link to="/Horror"><h2>Horror</h2></Link>
//           <Link to="/Kids"><h2>Kids</h2></Link>
//           <Link to="/Sci-fi"><h2>Sci-fi</h2></Link>
//         </nav>

//         <main className="content">
//           <Routes>
//             <Route path="/" element={<Action />} />
//             <Route path="/Anime" element={<Anime />} />
//             <Route path="/Comedy" element={<Comedy />} />
//             <Route path="/Documentary" element={<Documentary />} />
//             <Route path="/Drama" element={<Drama />} />
//             <Route path="/Horror" element={<Horror />} />
//             <Route path="/Kids" element={<Kids />} />
//             <Route path="/Sci-fi" element={<SciFi />} />
//           </Routes>
//         </main> 

        
        
//       </div>
//     </Router>
//   );
// }

// export default Categories;




// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// // import { Routes } from "react-router-dom";  
// // import { Route } from "react-router-dom";
// import './Categories.scss';
// import Action from "./Action";
// import Anime from "./Anime";
// import Comedy from "./Comedy";
// import Documentary from "./Documentary";
// import Drama from "./Drama";
// import Horror from "./Horror";
// import Kids from "./Kids";
// import SciFi from "./Sci-fi";

// function Categories() {
//   useEffect(() => {}, []);

//   return (
//     <div className="app-containerc">
//       <strong>Categories</strong>
//       <h3>Genres</h3>
//       <nav className="navbarc">
      
//         <Link to="/Action"><h2>Action</h2></Link>
//         <Link to="/Anime"><h2>Anime</h2></Link>
//         <Link to="/Comedy"><h2>Comedy</h2></Link>
//         <Link to="/Documentary"><h2>Documentary</h2></Link>
//         <Link to="/Drama"><h2>Drama</h2></Link>
//         <Link to="/Horror"><h2>Horror</h2></Link>
//         <Link to="/Kids"><h2>Kids</h2></Link>
//         <Link to="/Sci-fi"><h2>Sci-fi</h2></Link>
//       </nav>
        //  <main>
        //   <Routes>
        //   <Route path="/" element={<Action />} />
        //    <Route path="/Anime" element={<Anime />} />
        //   </Routes>
        // </main> 
      
//     </div>
//   );
// }

// export default Categories;





// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Routes } from "react-router-dom";  
// import { Route } from "react-router-dom";
// import './Categories.scss';
// import Action from "./Action";
// import Anime from "./Anime";
// import Comedy from "./Comedy";
// import Documentary from "./Documentary";
// import Drama from "./Drama";
// import Horror from "./Horror";
// import Kids from "./Kids";
// // import Sci-Fi from "./Sci-fi";

// function Categories() {
//   useEffect(() => {}, []);

//   return (
//     <div className="app-containerc">
//       <strong>Categories</strong>
//       <h3>Genres</h3>
//       <nav className="navbarc">
//         <Link to="/Action" target="_blank" rel="noopener noreferrer"><h2>Action</h2></Link>
//         <Link to="/Anime" target="_blank" rel="noopener noreferrer"><h2>Anime</h2></Link>
//         <Link to="/Comedy" target="_blank" rel="noopener noreferrer"><h2>Comedy</h2></Link>
//         <Link to="/Documentary" target="_blank" rel="noopener noreferrer"><h2>Documentary</h2></Link>
//         <Link to="/Drama" target="_blank" rel="noopener noreferrer"><h2>Drama</h2></Link>
//         <Link to="/Horror" target="_blank" rel="noopener noreferrer"><h2>Horror</h2></Link>
//         <Link to="/Kids" target="_blank" rel="noopener noreferrer"><h2>Kids</h2></Link>
//         <Link to="/Sci-fi" target="_blank" rel="noopener noreferrer"><h2>Sci-fi</h2></Link>
//       </nav>
      // <main>
      //     <Routes>
      //     <Route path="/Action" element={<Action />} />
      //      <Route path="/Anime"  target="_blank"element={<Anime />} />
      //      <Route path="/Comedy"  target="_blank"element={<Comedy />} />
      //      <Route path="/Documentary"  target="_blank"element={<Documentary/>} />
      //      <Route path="/Drama"  target="_blank"element={<Drama />} />
      //      <Route path="/Horror"  target="_blank"element={<Horror />} />
      //      <Route path="/Kids"  target="_blank"element={<Kids />} />
      //      {/* <Route path="/Sci-fi"  target="_blank"element={<Sci-fi />} /> */}

      //     </Routes>
      //   </main> 
//     </div>
//   );
// }

// export default Categories;










import React from "react";
import { Link } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
// import { Routes } from "react-router-dom";
import "./Categories.scss";
// import Action fr
import Action from "./Action";
function Categories() {
  return (
    <div className="app-containerc">
      <strong>Categories</strong>
      <h3>Genres</h3>
      <nav className="navbarc">
        {/* These links will open in a new tab because of target="_blank" */}
        <Link to="/Action"  rel="noopener noreferrer">
          <h2>Action</h2>
        </Link>
        <Link to="/Anime"  rel="noopener noreferrer">
          <h2>Anime</h2>
        </Link>
        <Link to="/Comedy"  rel="noopener noreferrer">
          <h2>Comedy</h2>
        </Link>
        <Link to="/Documentary"  rel="noopener noreferrer">
          <h2>Documentary</h2>
        </Link>
        <Link to="/Drama"  rel="noopener noreferrer">
          <h2>Drama</h2>
        </Link>
        <Link to="/Horror" target="_blank" rel="noopener noreferrer">
          <h2>Horror</h2>
        </Link>
        <Link to="/Kids" target="_blank" rel="noopener noreferrer">
          <h2>Kids</h2>
        </Link>  
        <Link to="/Anime" target="_blank" rel="noopener noreferrer">
          <h2>Anime</h2>
        </Link>
      </nav>
      
     
    </div>
  );
}

export default Categories;
