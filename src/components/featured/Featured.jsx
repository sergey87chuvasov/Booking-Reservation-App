import React from 'react';
import './Featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          className='featuredImg'
          src='https://media.istockphoto.com/id/1389294431/photo/hapenny-bridge-river-liffey-dublin-ireland.webp?b=1&s=170667a&w=0&k=20&c=PSTiz4cW3hvM-YG1MU2C07E6T0iEqvLrtSzar8zZvso='
          alt='featured pic'
        />
        <div className='featuredTitles'>
          <h1>Dublin</h1>
          <h2>555 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          className='featuredImg'
          src='https://img.freepik.com/free-photo/cityscape-prague-czech-republic_1268-21589.jpg'
          alt='featured pic'
        />
        <div className='featuredTitles'>
          <h1>Prague</h1>
          <h2>222 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          className='featuredImg'
          src='https://www.civitatis.com/f/croacia/dubrovnik/free-tour-dubrovnik-589x392.jpg'
          alt='featured pic'
        />
        <div className='featuredTitles'>
          <h1>Dubrovnik</h1>
          <h2>111 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
