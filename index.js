const express = require('express');
const bodyParser = require('body-parser');
require('babel-polyfill');
const User = require('./controller/userCtr');
const Auth = require('./middleware/Auth.js');

// setup express app
const app = express();
const path = require('path');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1', (req, res) => res.status(200).send({
    status: 'connection successful',
    message: 'Welcome to 9JAZZ',
  }));

// user can be able to register
app.post('/api/v1/users', User.create);
// user can login 
app.post('/api/v1/users/login', User.login);

app.get('*', (req, res) => res.status(200).send({message: 'please make use of the right routes'}
));

// listen for request
app.listen(process.env.PORT || 2000, function(){
    console.log('yes, I am now listening for request');
})

module.exports = app;
