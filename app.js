const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')


//connect to mongoose
mongoose.connect(config.database); 

//mongoose connection check
mongoose.connection.on('connected', () => {
    console.log('Connected to local database');
})

mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
})

const app = express();

const users = require('./routes/users');

const port = 3000;

// CORS middleware - for allowing input from all domains as public
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//bodyParser middleware searches incoming messages
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

//Start server
app.listen(port, () => {
    console.log('Server started on port'+port)
});