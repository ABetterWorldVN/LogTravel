const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const user = require('./routes/user');

const PORT = process.env.PORT || 3009;

// Connect DB
mongoose.connect('mongodb://threesometeam:aaa123@ds149030.mlab.com:49030/log-travel', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('Connect', console.log('Is connected'));

app.use(express.json());

// Router
app.use('/api/users', user);

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
