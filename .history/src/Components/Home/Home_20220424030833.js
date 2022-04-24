import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tvseries from '../TvSeries/Tvseries';
import MovieList from './Components/MovieList/MovieList';

const Home = () => {
    return (
        <div>
            <Header />
            <MovieList />
            <Tvseries />
            <Footer />
        </div>
    );
};

export default Home;