import React from 'react';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://media.istockphoto.com/id/492189224/photo/seaview-bedroom.jpg?s=612x612&w=0&k=20&c=tSL5OoSdxW3l7WzdBGU2_NnGNjDH88twjNZTTkll2jY='
          alt='fp pic'
        />
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>London</span>
        <span className='fpPrice'>Starting from 150$</span>
        <div className='fpRating'>
          <button>9.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://img.freepik.com/free-photo/view-luxurious-hotel-hallway_23-2150683497.jpg'
          alt='fp pic'
        />
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Berlin</span>
        <span className='fpPrice'>Starting from 120$</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='fp pic'
        />
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Paris</span>
        <span className='fpPrice'>Starting from 100$</span>
        <div className='fpRating'>
          <button>8.5</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg'
          alt='fp pic'
        />
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from 170$</span>
        <div className='fpRating'>
          <button>9.1</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
