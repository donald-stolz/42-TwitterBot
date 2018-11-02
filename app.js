// app.js
require('dotenv').load();
const Twit = require('twit');
const config = require('./config.js');

const T = new Twit(config);
