// engage.js
// Functions for following accounts and engaging with tweets
const Twit = require('twit');
const config = require('./config');

const bot = new Twit(config.engage);

// Streams account given a handle and callback function to send tweets to
const stream = async (handle, callback) => {
    const id = await getId(handle);

    const stream = bot.stream('statuses/filter', {
        follow: id,
    });
    console.log(`Following @${handle} - id: ${id}`);
    stream.on('tweet', t => {
        if (t.user.screen_name === handle) {
            callback(t);
        }
    });
};

// Lookup by handle and return id as a string
const getId = async handle => {
    let result = await bot.get('friendships/lookup', {
        screen_name: handle,
    });
    if (result.data[0]) return result.data[0].id_str;
    return result.statusMessage;
};

// Id must be a string
// Favorites a tweet given the Id
const favorite = async id => {
    try {
        bot.post('favorites/create', { id });
    } catch (error) {
        console.error(error);
    }
};

// Removes a favorite given the Id
const removeFavorite = async id => {
    try {
        bot.post('favorites/destroy', { id });
    } catch (error) {
        console.error(error);
    }
};

// Retweets a tweet given the Id
const retweet = async id => {
    try {
        bot.post('statuses/retweet/:id', { id });
    } catch (error) {
        console.error(error);
    }
};

// Removes a retweet given the Id
const removeRetweet = async id => {
    try {
        bot.post('statuses/unretweet/:id', { id });
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    stream,
    getId,
    favorite,
    removeFavorite,
    retweet,
    removeRetweet,
};
