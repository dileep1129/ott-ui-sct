import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import './User.scss';
import NavBar from './NavBar';
 
function User() {
  // Get the profile creation status and number of profiles created
  const profileCreated = localStorage.getItem('profileCreated') === 'true';
  const [profileCount, setProfileCount] = useState(parseInt(localStorage.getItem('profileCount'), 10) || 0);
 
  // Handle sign out (clear localStorage)
  const handleSignOut = () => {
    localStorage.removeItem('profileCreated');
    localStorage.removeItem('profileCount');
  };
 
  // Handle user icon deletion
  const handleIconDelete = (index) => {
    let currentProfileCount = parseInt(localStorage.getItem('profileCount'), 10) || 0;
    if (currentProfileCount > 0) {
      // Decrease the profile count
      currentProfileCount -= 1;
      localStorage.setItem('profileCount', currentProfileCount.toString());
      setProfileCount(currentProfileCount);
    }
  };
 
  // Create a list of user icons based on the profile count
  const userIcons = Array.from({ length: profileCount });
 
  return (
    <div>
      <NavBar />
      <div>
        <div className="icon-circle">
          <h4><FontAwesomeIcon icon={faUser} /></h4>
          <h4 className="welcome-text">Welcome</h4>
          <div className="icon-row">
            {/* Render the user icons based on the profile count */}
            {userIcons.map((_, index) => (
              <div
                key={index}
                className="icon user-created"
                onClick={() => handleIconDelete(index)} // Delete user icon on click
              >
                <FontAwesomeIcon icon={faUser} />
              </div>
            ))}
 
            {/* Link to Profile Page */}
            <div className="icon plus">
              <Link to="/profile">
                <FontAwesomeIcon icon={faPlus} />
              </Link>
            </div>
          </div>
        </div>
 
        <div className="container" style={{ marginTop: '20px' }}>
          <div className="item">
            <Link to="/edit-profile">
              <span>Edit Profile</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/PricingPlans">
              <span>Subscription Plan</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/history">
              <span>History</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/account-settings">
              <span>Account Settings</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/download">
              <span>Download</span>
            </Link>
          </div>
          <div className="item">
           <Link to="/SignOut">
           <span>
              Sign Out</span>
         
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default User;
 
 
 