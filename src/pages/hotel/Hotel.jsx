import React, { useState } from 'react';
import './Hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=sph',
    },
    {
      src: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=sph',
    },
    {
      src: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=sph',
    },
    {
      src: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=sph',
    },
    {
      src: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=sph',
    },
    {
      src: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=sph',
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotelContainer'>
        {open && (
          <div className='slider'>
            <FontAwesomeIcon icon={faCircleXmark} />
            <FontAwesomeIcon icon={faCircleArrowLeft} />
            <div className='slideWrapper'>
              <img
                className='sliderImg'
                src={photos[slideNumber]}
                alt='slide pic'
              />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </div>
        )}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 133 New York City</span>
          </div>
          <span className='hotelDistance'>
            Exellent location - 444m from center
          </span>
          <span className='hotelPriceHighlight'>
            book a stay ober $222 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img
                  onClick={handleOpen}
                  src={photo.src}
                  alt='hotel pic'
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Stay in the heart of Paris</h1>
              <p className='hotelDesc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                odio aut quidem possimus perferendis assumenda doloribus, id,
                laborum asperiores aspernatur doloremque expedita iure
                praesentium optio similique deleniti commodi quod earum Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Tempora
                consequatur deleniti reprehenderit vitae mollitia. Eligendi quo
                ex rem molestias nihil? Deleniti assumenda quidem at, sapiente
                nostrum omnis quas non eum!
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ullam blanditiis nobis? Pariatur hic culpa, sunt, ex ad
                perferendis quidem corrupti.
              </span>
              <h2>
                <b>$888</b> (9 NIGHTS)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
