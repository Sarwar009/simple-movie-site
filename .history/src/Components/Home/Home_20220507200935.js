import React from 'react';
import Advertise from '../Advertise/Advertise';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <div className=''>
                <div>
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