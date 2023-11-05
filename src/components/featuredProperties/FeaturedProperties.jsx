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
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from 120$</span>
        <div className='fpRating'></div>
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://img.freepik.com/free-photo/view-luxurious-hotel-hallway_23-2150683497.jpg'
          alt='fp pic'
        />
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from 120$</span>
        <div className='fpRating'></div>
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='fp pic'
        />
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from 120$</span>
        <div className='fpRating'></div>
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      <div className='fpItem'>
        <img
          className='fpImg'
          src='https://thumbs.dreamstime.com/b/hotel-bed-28403860.jpg'
          alt='fp pic'
        />
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from 120$</span>
        <div className='fpRating'></div>
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
  );
};

export default FeaturedProperties;
