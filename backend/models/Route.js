const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
    start: String,
    destination: String,
    fare: Number,
    transportation: String,//Bus,Micro,Tempo etc
    stops: [String],//Array of Stops
})

module.exports = mongoose.model('Route', RouteSchema);
