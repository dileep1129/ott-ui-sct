// // import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
// import { FaQrcode, FaLanguage, FaUser, FaBars, FaTimes } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";
// // import "./NavBar.css";
// // import './project3.css';
// import Home from "./Home";
// // import Movies from "./First/Movies";
// // import LiveTV from "./First/LiveTV";
// // import TVShows from "./First/TVShows";
// import Movies from "./Movies";
// import LiveTv from "./LiveTv";
// import TVShows from "./TVShows";
// function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {}, []);

//   return (
//     <Router>
//       <div className="app-container">
//         <h1>Aura <br /><span>Play</span></h1>
//         <nav className={menuOpen ? "navbar open" : "navbar"}>
//           <Link to="/" className="home"><h2>Home</h2></Link>
//           <Link to="/movies"className="Movies"><h2>Movies</h2></Link>
//           <Link to="/tv-shows"className="TVShows"><h2>TV Shows</h2></Link>
//           <Link to="/live-tv"className="LiveTV"><h2>Live TV</h2></Link>
//           <div className="ico">
//           <Link to="/"className="one"><FaQrcode /></Link>
//           <Link to="/" className="two"><CiSearch /></Link>
//           <Link to="/"className="three"><FaLanguage /></Link>
//           <Link to="/"className="four"><MdDashboard /></Link>
//           </div>

//         </nav>

//         <div className='right-section'>
//           <div className='btn'>
//             <button>Sign In</button>
//             <i><FaUser /></i>
//           </div>
//           <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>

   
//       </div>
//        <main className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/movies" element={<Movies />} />
//             <Route path="/tv-shows" element={<TVShows />} />
//             <Route path="/live-tv" element={<LiveTv />} />
//             {/* <Route path="/Listgroup" element={<Listgroup />} /> */}
//             {/* <Route path="/Subscription" element={<Subscription />} /> */}
//           </Routes>
//         </main>
//     </Router>
//   );
// }

// export default NavBar;