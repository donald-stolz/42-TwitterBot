const { dailyPost, getStats } = require('./tweet');
const { stream, favorite, retweet } = require('./engage');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/buzzwords.json');
const JSONwords = fs.readFileSync(filePath);
const buzzwords = JSON.parse(JSONwords);

const hour = 1000 * 60 * 60;

// Tweet every 24 hours?

// Follow 42 - Favorite every post
// Retweet any post with more than 3 retweets in 3 hours
const check42 = async tweet => {
    const id = tweet.id_str;
    favorite(id);
    setTimeout(async () => {
        t = await getStats(id);
        // Check retweets
        if (t.retweet_count > 3) {
            retweet(id);
        }
    }, 3 * hour);
};

// Follow Wired and THN.
// Retweet/Favorite any tweet that matches a list of tech words
const checkTech = async tweet => {
    const id = tweet.id_str;
    // Check list
    if (buzzwords.some(word => tweet.text.includes(word))) {
        retweet(id);
        favorite(id);
    } else {
        // else check popularity
        setTimeout(async () => {
            t = await getStats(id);
            if (t.retweet_count > 30) {
                retweet(id);
                favorite(id);
            }
        }, hour);
    }
};

// Follow TED Talks
// Retweet any post with more than N retweets in 2 hours
const checkTED = tweet => {
    // If more than 30 retweets in an hour, retweet and favorite
    const id = tweet.id_str;
    setTimeout(async () => {
        t = await getStats(id);
        if (t.retweet_count > 30) {
            retweet(id);
            favorite(id);
        }
    }, hour);
};

stream('42SiliconValley', check42);
stream('WIRED', checkTech);
stream('WIREDScience', checkTech);
stream('TheHackersNews', checkTech);
stream('elonmusk', checkTech);
stream('TEDTalks', checkTED);
