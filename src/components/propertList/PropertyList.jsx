import React from 'react';
import './PropertyList.css';

const PropertyList = () => {
  return (
    <div className='pList'>
      <div className='pListItem'>
        <img
          className='pListImg'
          src='https://img.freepik.com/photos-gratuite/station-balneaire-populaire-amara-dolce-vita-luxury-hotel-piscines-parcs-aquatiques-zone-loisirs-long-cote-mer-turquie-au-coucher-du-soleil-tekirova-kemer_146671-18752.jpg?w=360'
          alt='plist pic'
        />
        <div className='pListTitles'>
          <h1>Hotels</h1>
          <h2>22 hotels</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          className='pListImg'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPK9xNnjanXhYmE7awU1rRv4--EdYrQFp7iAh3qjGqz287HC0jbi-q8-f0YqRWIa5MSg&usqp=CAU'
          alt='plist pic'
        />
        <div className='pListTitles'>
          <h1>Apartmens</h1>
          <h2>22 hotels</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          className='pListImg'
          src='https://www.oppeinhome.com/upload/image/product/thumb/20211009/white-grey-beige-modern-hotel-wood-grain1.jpg'
          alt='plist pic'
        />
        <div className='pListTitles'>
          <h1>Resorts</h1>
          <h2>22 hotels</h2>
        </div>
      </div>
      <div className='pListItem'>
        <img
          className='pListImg'
          src='https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_640.jpg'
          alt='plist pic'
        />
        <div className='pListTitles'>
          <h1>Villas</h1>
          <h2>22 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
