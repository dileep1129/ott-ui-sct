// // // import React, { useEffect, useState } from "react";
// // // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // // import { CiSearch } from "react-icons/ci";
// // // import { FaQrcode, FaLanguage, FaUser, FaBars, FaTimes } from "react-icons/fa";
// // // import { MdDashboard } from "react-icons/md";
// // // import './NavBar.scss';
// // // import Home from "./Home";
// // // import Movie from "./Movie";
// // // import LiveTV from "./LiveTV";
// // // import Categories from "./Categories";
// // // import PricingPlans from "../pages/PricingPlans";

// // // function Navbar() {
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   return (
// // //     <Router>
// // //       <div className="app-container">
// // //         <h1>Aura <br /><span>Play</span></h1>
// // //         <nav className={menuOpen ? "navbar open" : "navbar"}>
// // //           <Link to="/" className="home"><p>Home</p></Link>
// // //           <Link to="/Movie" className="Movies"><p>Movies</p></Link>
// // //           <Link to="/tv-shows" className="TVShows"><p>TVShows</p></Link>
// // //           {/* <Link to="/live-tv" className="LiveTV"><h2>Live TV</h2></Link> */}
// // //           <div className="ico">
// // //             <Link to="/PricingPlans" className="one"><FaQrcode /></Link>
// // //             <Link to="/" className="two"><CiSearch /></Link>
// // //             <Link to="/" className="three"><FaLanguage /></Link>
// // //             <Link to="/Categories" className="four"><MdDashboard /></Link>
// // //           </div>
// // //         </nav>

// // //         <div className="right-section">
// // //           <div className="btn">
// // //             <button>Sign In</button>
// // //             <i><FaUser /></i>
// // //           </div>
// // //           <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
// // //             {menuOpen ? <FaTimes /> : <FaBars />}
// // //           </div>
// // //         </div>      </div>

// // //       <main className="content">
// // //         <Routes>
// // //           <Route path="/" element={<Home />} />
// // //           <Route path="/Movie" element={<Movie />} />
// // //           <Route path="/live-tv" element={<LiveTV />} />
// // //           <Route path="/PricingPlans" element={< PricingPlans/>} />
// // //           <Route path="/Categories" element={<Categories/>} />
// // //         </Routes>
// // //       </main>
// // //     </Router>
// // //   );
// // // }

// // // export default Navbar;




// // import React, { useEffect, useState } from "react";
// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // import { CiSearch } from "react-icons/ci";
// // import { FaQrcode, FaLanguage, FaUser, FaBars, FaTimes } from "react-icons/fa";
// // import { MdDashboard } from "react-icons/md";
// // import './NavBar.scss';
// // import Home from "./Home";
// // import Movie from "./Movie";
// // import LiveTV from "./LiveTV";
// // import Categories from "./Categories";
// // import PricingPlans from "../pages/PricingPlans";

// // function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <Router>
// //       <div className="app-container">
// //         <h1>Aura <br /><span>Play</span></h1>
// //         <nav className={menuOpen ? "navbar open" : "navbar"}>
// //           <Link to="/" className="home"><p>Home</p></Link>
// //           <Link to="/Movie" className="Movies"><p>Movies</p></Link>
// //           <Link to="/Movie" className="LiveTV"><p>LiveTV</p></Link>
// //           <Link to="/tv-shows" className="TVShows"><p>TVShows</p></Link>
// //           {/* <Link to="/live-tv" className="LiveTV"><h2>Live TV</h2></Link> */}
// //           <div className="ico">
// //             <Link to="/PricingPlans" className="one"><FaQrcode /></Link>
// //             <Link to="/" className="two"><CiSearch /></Link>
// //             <Link to="/" className="three"><FaLanguage /></Link>
// //             <Link to="/Categories" className="four"><MdDashboard /></Link>
// //           </div>
// //         </nav>

// //         <div className="right-section">
// //           <div className="btn">
// //             <button>Sign In</button>
// //             <i><FaUser /></i>
// //           </div>
// //           <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
// //             {menuOpen ? <FaTimes /> : <FaBars />}
// //           </div>
// //         </div>
// //       </div>

// //       <main className="content">
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/Movie" element={<Movie />} />
// //           <Route path="/live-tv" element={<LiveTV />} />
// //           <Route path="/PricingPlans" element={< PricingPlans />} />
// //           <Route path="/Categories" element={<Categories />} />
// //         </Routes>
// //       </main>
// //     </Router>
// //   );
// // }

// // export default Navbar;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
// import { FaQrcode, FaLanguage, FaUser, FaBars, FaTimes } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";
// import './NavBar.scss';
// import Home from "./Home";
// import Movie from "./Movie";
// import LiveTV from "./LiveTV";
// import Categories from "./Categories";
// import PricingPlans from "../pages/PricingPlans";
// import Signup from "./Signup";
// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Function to toggle menu
//   const toggleMenu = () => setMenuOpen(prevState => !prevState);

//   return (
//     <Router>
//       <div className="app-container">
//         <h1>WE <span>TV</span></h1>

//         {/* Navbar with Toggle for Menu */}
//         <nav className={`navbar ${menuOpen ? "open" : ""}`}>
//           <Link to="/" className="home"><p>Home</p></Link>
//           <Link to="/Movie" className="Movies"><p>Movies</p></Link>
//           <Link to="/Movie" className="LiveTV"><p>LiveTV</p></Link>
//           <Link to="/tv-shows" className="TVShows"><p>TVShows</p></Link>

//           <div className="ico">
//             <Link to="/PricingPlans" className="one"><FaQrcode /></Link>
//             <Link to="/" className="two"><CiSearch /></Link>
//             <Link to="/" className="three"><FaLanguage /></Link>
//             <Link to="/Categories" className="four"><MdDashboard /></Link>
//           </div>
//         </nav>

//         {/* Right Section with Sign In button and Menu Toggle */}
//         <div className="right-section">
//           <div className="btn">
//           <Link to="/Signup"><button>Signup</button></Link>
//             {/* <Link to="/kids"><p>kids</p></Link> */}
//             <i><FaUser /></i>
//           </div>
//           {/* Menu Toggle Icon (Hamburger) */}
//           <div className="menu-toggle" onClick={toggleMenu}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>
//       </div>

//       <main className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Movie" element={<Movie />} />
//           <Route path="/live-tv" element={<LiveTV />} />
//           <Route path="/PricingPlans" element={<PricingPlans />} />
//           <Route path="/Categories" element={<Categories />} />
//           <Route path="/Signup" element={<Signup/>} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default Navbar;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
// import { FaQrcode, FaLanguage, FaUser, FaBars, FaTimes } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";
// import './Navbar.scss';
// import Home from "./Home";
// import Movie from "./Movie";
// import LiveTV from "./LiveTV";
// import Categories from "./Categories";
// import PricingPlans from "../pages/PricingPlans";
// import Signup from "./Signup";
// import Login from "./Login";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Function to toggle menu
//   const toggleMenu = () => setMenuOpen(prevState => !prevState);

//   return (
//     <Router>
//       <div className="app-container">
//         <h1>WE <span>TV</span></h1>

//         {/* Navbar with Toggle for Menu */}
//         <nav className={`navbar ${menuOpen ? "open" : ""}`}>
//           <Link to="/" className="home"><p>Home</p></Link>
//           <Link to="/Movie" className="Movies"><p>Movies</p></Link>
//           <Link to="/live-tv" className="LiveTV"><p>LiveTV</p></Link>
//           <Link to="/tv-shows" className="TVShows"><p>TVShows</p></Link>

//           <div className="ico">
//             <Link to="/PricingPlans" className="one"><FaQrcode /></Link>
//             <Link to="/" className="two"><CiSearch /></Link>
//             <Link to="/" className="three"><FaLanguage /></Link>
//             <Link to="/Categories" className="four"><MdDashboard /></Link>
//           </div>
//         </nav>

//         {/* Right Section with Sign In button and Menu Toggle */}
//         <div className="right-section">
//           <div className="btn">
//             <Link to="/Signup"><button>Signup</button></Link>
//             {/* <i><FaUser /></i> */}
//             <Link to="/Login"><i><FaUser /></i></Link>
//           </div>
//           {/* Menu Toggle Icon (Hamburger) */}
//           <div className="menu-toggle" onClick={toggleMenu}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>
//       </div>

//       <main className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Movie" element={<Movie />} />
//           <Route path="/live-tv" element={<LiveTV />} />
//           <Route path="/PricingPlans" element={<PricingPlans />} />
//           <Route path="/Categories" element={<Categories />} />
//           <Route path="/Signup" element={<Signup />} />
//           <Route path="/Login" element={<Login />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default Navbar;








import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaQrcode, FaLanguage, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import './NavBar.scss';
import Home from "./Home";
import Movies from "./Movie";
import TvShows from "./TvShows";
import LiveTV from "./LiveTV";
import Signup from "./Signup";
import Login from "./Login";
import Categories from "./Categories";

import PricingPlans from "../pages/PricingPlans";
import PaymentPage from "../pages/Payments";
import Action from "./Action";
import Anime from "./Anime";
import Comedy from"./Comedy";
import Drama from "./Drama";
import Documentary from "./Documentary";
import Kids from "./Kids";
import Horror from "./Horror"

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {}, []);

    return (
        <Router>
            <div className="app-container">
                <nav className={menuOpen ? "navbar open" : "navbar"}>
                    <h1>Kocowa <span>TV</span></h1>
                    <Link to="/" style={{ textDecoration: "none" }}><p>Home</p></Link>
                    <Link to="/movies" style={{ textDecoration: "none" }}><p>Movies</p></Link>
                    <Link to="/TvShows" style={{ textDecoration: "none" }}><p>TVShows</p></Link>
                    <Link to="/PaymentPage" style={{ textDecoration: "none" }}><p>Live TV</p></Link>
                    <div className="ico">
                        <Link to="/PricingPlans" className="one"><h4><FaQrcode /></h4></Link>
                        <Link to="/" className="two"><h4><CiSearch /></h4></Link>
                        <Link to="/" className="three"><h4><FaLanguage /></h4></Link>
                       <Link to="/Categories" className="four"><h4><MdDashboard /></h4></Link>

                       
                    </div>
                    <div className='right-section'>
                        <div className='btn'>
                        <Link to="/Signup"><button>Signup</button></Link>
                            <i><FaUser /></i>
                        </div>
                        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                </nav>
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/TvShows" element={<TvShows />} />
                        <Route path="/live-tv" element={<LiveTV />} />
                        <Route path="/Signup" element={<Signup />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/PricingPlans" element={<PricingPlans />} />
                        <Route path="/Categories" element={<Categories />} />                
                        <Route path="/Action" element={<Action />} />
                        <Route path="/Anime"  element={<Anime />} />
                        <Route path="/Comedy"  element={<Comedy />} />
                        <Route path="/Documentary"  element={<Documentary/>} />
                        <Route path="/Drama"  element={<Drama />} />
                        <Route path="/Horror"  element={<Horror />} />
                        <Route path="/Kids"  element={<Kids />} />
                        <Route path="/payment"  element={<PaymentPage />} />

                        {/* <Route path="/Sci-fi"  target="_blank"element={<Sci-fi />} /> */}

        

                        {/* <Route path="/subscription" element={<Subscription />} /> */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default NavBar;