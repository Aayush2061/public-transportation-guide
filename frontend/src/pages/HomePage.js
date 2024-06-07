// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <SearchForm />
        </div>
    );
};

export default HomePage;
