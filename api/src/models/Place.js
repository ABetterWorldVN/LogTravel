const mongoose = require('mongoose');

// define schema
let placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
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
    description: String,
    imgName: String
});

const placeModel = mongoose.model('Place', placeSchema);
module.exports = placeModel;
