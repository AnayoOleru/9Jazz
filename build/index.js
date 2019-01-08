'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// setup express app
var app = (0, _express2.default)();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api/v1',require('./routes/routes'));

app.get('/api/v1', function (req, res) {
    return res.status(200).send({
        status: 'connection successful',
        message: 'Welcome to 9JAZZ'
    });
});

// listen for request
app.listen(process.env.port || 4000, function () {
    console.log('yes, I am now listening for request');
});