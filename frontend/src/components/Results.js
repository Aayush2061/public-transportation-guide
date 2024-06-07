// src/components/Results.js
import React from 'react';
import TransportationOption from './TransportationOption';

const Results = ({ results }) => {
    return (
        <div className="results">
            {results.length > 0 ? (
                results.map((option, index) => (
                    <TransportationOption key={index} option={option} />
                ))
            ) : (
                <p>No transportation options found.</p>
            )}
        </div>
    );
};

export default Results;
