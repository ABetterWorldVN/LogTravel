const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const place = require('./routes/place');

// load .env file
require('dotenv').config();

const PORT = process.env.PORT || 3009;

// Connect DB
const mongoUrl = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/log-travel`;
mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});

// enable cross origin
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// router
app.use('/api/places', place);

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
