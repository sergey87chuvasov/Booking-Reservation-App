import React from 'react';
import './SearchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699401600&semt=sph'
        alt='hotel pic'
        className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Tower Street Apartment</h1>
        <span className='siDitance'>500m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='siFeatures'>
          Entire studio / 1 bathroom / full bed
        </span>
        <span className='siCancelOp'>Free cancelation</span>
        <span className='siCancelOpSubtitle'>
          You can cancel laterб so lock in this great price today
        </span>
      </div>
      <div className='siDetails'>details</div>
    </div>
  );
};

export default SearchItem;
