import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active link functionality
import { FaQrcode, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import "./Navbar.scss";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-container">
      <nav className={menuOpen ? "navbar open" : "navbar"}>
        <h4>
          Star <span>ZZ</span>
        </h4>
        {/* Use NavLink to enable active highlighting */}
        <NavLink
          to="/Home"
          style={{ textDecoration: "none"}}
          className={({ isActive}) => (isActive ? "active-link" : "")}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/Movie"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <p>Movies</p>
        </NavLink>
        <NavLink
          to="/TvShows"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <p>TVShows</p>
        </NavLink>
        <NavLink
          to="/LiveTV"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <p>Live TV</p>
        </NavLink>
        <div className="ico">
          <NavLink
            to="/PricingPlans"
            className={({ isActive }) => (isActive ? "active-icon" : "")}
          >
            <h4>
              <FaQrcode />
            </h4>
          </NavLink>
          <NavLink
            to="/Categories"
            className={({ isActive }) => (isActive ? "active-icon" : "")}
          >
            <h4>
              <MdDashboard />
            </h4>
          </NavLink>
        </div>
        <div className="right-section">
          <div className="btn">
            <NavLink to="/Login">
              <button>Login</button>
            </NavLink>
            <NavLink to="/user">
              <i>
                <FaUser />
              </i>
            </NavLink>
          </div>
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
