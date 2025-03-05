import React, { useState, useEffect } from 'react';
import { remData } from './res';

const Recommended = () => {
  const data = remData.slice(0, 4);

  // State to track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
   
    window.addEventListener('resize', handleResize);
   
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define styles based on window width
  const containerStyle = {
    padding: '20px',
  };

  const txtStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexDirection: windowWidth <= 768 ? 'column' : 'row',
  };

  const moviesStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: windowWidth <= 480 ? '10px' : '20px',
    flexDirection: windowWidth <= 768 ? 'column' : 'row',
  };

  const movieImgStyle = {
    width: windowWidth <= 480 ? '100%' : '250px',
    height: windowWidth <= 480 ? '150px' : 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={txtStyle}>
        <h1>Recommended content</h1>
        <p>See All</p>
      </div>
      <div style={moviesStyle}>
        {/* {data.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt=""
            style={movieImgStyle}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Recommended;