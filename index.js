const express = require('express');

// setup express app
const app = express();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api/v1',require('./routes/routes'));

app.get('/api/v1', (req, res) => res.status(200).send({
    status: 'connection successful',
    message: 'Welcome to 9JAZZ',
  }));

// listen for request
app.listen(process.env.port || 4000, function(){
    console.log('yes, I am now listening for request');
})
