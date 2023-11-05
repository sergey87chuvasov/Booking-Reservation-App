import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTtile'>Browse by property type</h1>
        <PropertyList />
        <h1 className='homeTtile'>Homes quests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
