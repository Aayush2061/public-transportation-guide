const mongoose = require('mongoose');

const transportationOptionSchema = new mongoose.Schema({
    startPoint: { type: String, required: true },
    destination: { type: String, required: true },
    vehicleType: { type: String, required: true },
    fare: { type: Number, required: true },
    departureTime: { type: String, required: true }
});

module.exports = mongoose.model('TransportationOption', transportationOptionSchema);
