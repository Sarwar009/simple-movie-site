import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import Tvseries from '../TvSeries/Tvseries';

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