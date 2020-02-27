const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const user = require('./routes/user');

const PORT = process.env.PORT || 3009;

app.use(express.json());

// Router
app.use('/api/users', user);

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
