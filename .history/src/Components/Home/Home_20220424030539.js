import React from 'react';
import Header from '../Header/Header';
import MovieList from './Components/MovieList/MovieList';

const Home = () => {
    return (
        <div>
            <Header />
            <MovieList />
        </div>
    );
};

export default Home;