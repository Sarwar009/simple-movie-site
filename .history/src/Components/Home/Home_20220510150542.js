import React from 'react';
import Advertise from '../Advertise/Advertise';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import Slider from '../Slider/Slider';

import './Home.css'

const Home = () => {
    return (
        <div>
            <Header />
            
            <div className='main-body-section container'>
                <div className='movielisting-area'>
                    <MovieList />
                </div>
                <div>
                    <Advertise />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;