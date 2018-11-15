// tweet.js
// Functions for tweeting from Google Sheet
const Twit = require('twit');
const config = require('./config');
const Tabletop = require('tabletop');

const bot = new Twit(config.tweet);

const spreadsheetUrl = process.env.SHEET_URL;

const tweet = status => {
    try {
        bot.post('statuses/update', { status });
    } catch (error) {
        console.error(error);
    }
};

const getStats = async id => {
    try {
        const resp = await bot.get('statuses/show/:id', { id });
        return resp.data;
    } catch (error) {
        console.error(error);
    }
};

// ToDo turn into intreval post method
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

module.exports = { tweet, getStats, dailyPost };
