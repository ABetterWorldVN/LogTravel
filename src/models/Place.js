const mongoose = require('mongoose');

// define schema
let placeSchema = new mongoose.Schema({
    name: String,
    visitDate: Date,
    // TODO: check how to save complex object
    // location: {
    //     lat: Number,
    //     long: Number
    // }
    lat: Number,
    long: Number,
    rating: Number,
    comment: String,
    description: String
});

const placeModel = mongoose.model('Place', placeSchema);
module.exports = placeModel;
