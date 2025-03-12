// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSave = () => {
//     // Save profile logic (You can replace this with an API call or local storage saving)
//     alert("Profile saved!");
//     navigate('/user'); // Navigate back to User page after saving
//   };

//   return (
//     <div className="container">
//       <h1>Create Profile</h1>
//       <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />
//       </div>
//       <button onClick={handleSave}>Save Profile</button>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Get the current count of profiles created from localStorage
    const profileCount = parseInt(localStorage.getItem('profileCount'), 10) || 0;

    // Increment the profile count
    localStorage.setItem('profileCount', (profileCount + 1).toString());

    // Save profile info to localStorage (or use any other storage option)
    localStorage.setItem('profileCreated', 'true');
    alert('Profile saved!');
    navigate('/user'); // Navigate back to the User page after saving
  };

  return (
    <div className="container">
      <h1>Create Profile</h1>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
};

export default Profile;
