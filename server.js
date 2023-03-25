'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var User = require('./model');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

// Connect to MongoDB
mongoose
  .connect('connection-url')
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
var routes = require('./routes/useroute');
routes(app);
app.listen(port);
module.exports = app;
