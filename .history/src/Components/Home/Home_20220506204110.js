import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import Slider from '../Slider/Slider';
import Tvseries from '../TvSeries/Tvseries';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <MovieList />
            <Tvseries />
            <Footer />
        </div>
    );
};

export default Home;