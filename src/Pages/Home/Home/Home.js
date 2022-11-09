import React from 'react';
import Banner from '../Banner/Banner';
import HomePageServices from '../Services/HomePageServices';
import HomeExtraInfo from '../../Home/HomeExtraInfo/HomeExtraInfo'



const Home = () => {
    return (
        <div>
          <Banner/>
          <HomePageServices/>
          <HomeExtraInfo/>
          
        </div>
    );
};

export default Home;