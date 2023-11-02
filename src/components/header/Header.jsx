import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faDice,
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
      </div>
    </div>
  );
};

export default Header;
