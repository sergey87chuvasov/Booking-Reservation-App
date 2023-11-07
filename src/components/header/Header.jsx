import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { DateRange } from 'react-date-range';
import './Header.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format';

const Header = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <div className='header'>
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer'
        }
      >
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
        {type !== 'list' && (
          <>
            <h1 className='headerTitle'>
              A Lifetime of discounts? It's Genious.
            </h1>
            <p className='headerDesc'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              possimus aliquam, porro doloremque facilis id voluptatibus
              perferendis dolore reiciendis asperiores, maxime quas qui vel ea
              laboriosam, odit error ratione officiis.
            </p>
            <button className='headerBtn'>Sign In / Register</button>
            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input
                  type='text'
                  placeholder='Where are you going?'
                  className='headerSearchInput'
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className='headerSearchText'
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span
                  onClick={() => {
                    setOpenOptions(!openOptions);
                  }}
                  className='headerSearchText'
                >{`${options.adult} adult • ${options.children} children • ${options.room} room  `}</span>
                {openOptions && (
                  <div className='options'>
                    <div className='optionItem'>
                      <span className='optionText'>Adult</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => handleOption('adult', 'd')}
                          className='optionCounterButton'
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.adult}
                        </span>
                        <button
                          onClick={() => handleOption('adult', 'i')}
                          className='optionCounterButton'
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Children</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption('children', 'd')}
                          className='optionCounterButton'
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.children}
                        </span>
                        <button
                          onClick={() => handleOption('children', 'i')}
                          className='optionCounterButton'
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Room</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOption('room', 'd')}
                          className='optionCounterButton'
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.room}
                        </span>
                        <button
                          onClick={() => handleOption('room', 'i')}
                          className='optionCounterButton'
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='headerSearchItem'>
                <button className='headerBtn' onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
