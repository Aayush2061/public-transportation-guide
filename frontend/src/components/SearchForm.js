// src/components/SearchForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';

const SearchForm = () => {
    const [start, setStart] = useState('');
    const [destination, setDestination] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/search', { start, destination });
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching transportation options:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Starting Point"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>
            <Results results={results} />
        </div>
    );
};

export default SearchForm;
