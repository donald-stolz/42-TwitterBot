// config.js
require('dotenv').config();

module.exports = {
    engage: {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    },
    tweet: {
        consumer_key: process.env.CONSUMER_KEY_T,
        consumer_secret: process.env.CONSUMER_SECRET_T,
        access_token: process.env.ACCESS_TOKEN_T,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET_T,
    },
};
