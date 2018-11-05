// tweet.js
// Functions for tweeting from Google Sheet
const Twit = require('twit');
const config = require('./config');
const Tabletop = require('tabletop');

const bot = new Twit(config);

const spreadsheetUrl = process.env.SHEET_URL;

const tweet = status => {
    try {
        bot.post('statuses/update', { status });
    } catch (error) {
        console.error(error);
    }
};

const dailyPost = async () => {
    Tabletop.init({
        key: spreadsheetUrl,
        callback(data, tabletop) {
            console.log(data);
            // Data: { Tweets: 'text' }
            // Call forEach tweet(data)
        },
        simpleSheet: true,
    });
};

module.exports = { tweet, dailyPost };
