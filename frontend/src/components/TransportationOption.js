// src/components/TransportationOption.js
import React from 'react';

const TransportationOption = ({ option }) => {
    return (
        <div className="transportation-option">
            <h3>{option.vehicle}</h3>
            <p>From: {option.start}</p>
            <p>To: {option.destination}</p>
            <p>Fare: ${option.fare}</p>
            <p>Duration: {option.duration} mins</p>
        </div>
    );
};

export default TransportationOption;
