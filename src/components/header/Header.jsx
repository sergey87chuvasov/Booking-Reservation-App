import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faDice,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faDice} />
            <span>Attractions</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className='title'>A Lifetime of discounts? It's Genious.</h1>
        <p className='headerDesc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          possimus aliquam, porro doloremque facilis id voluptatibus perferendis
          dolore reiciendis asperiores, maxime quas qui vel ea laboriosam, odit
          error ratione officiis.
        </p>
        <button className='headerBtn'>Sign In / Register</button>
        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='headerSearchInput'
            />
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span className='headerSearchText'>date to date</span>
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span className='headerSearchText'>2 adults 2 children 1 room</span>
          </div>
          <div className='headerSearchItem'>
            <button className='headerBtn'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
