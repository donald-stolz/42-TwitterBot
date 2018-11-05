const { dailyPost, getStats } = require('./tweet');
const { stream, favorite, retweet } = require('./engage');
// Tweet every 24 hours??
const day = 1000 * 60 * 60 * 24;

// Follow 42 - Favorite every post
// Retweet any post with more than 3 retweets in 3 hours
const check42 = async tweet => {
    setTimeout(async () => {
        t = await getStats(tweet.id_str);
        // Check favorites and retweets
        console.log(t.favorite_count);
        // If min req met, add fav/retweet
        // favorite(tweet.id)
    }, 1000);
};
stream('42SiliconValley', check42);

// Follow bloomberg and THN.
// Retweet/Favorite any tweet that matches a list of tech words

// Follow TED Talks
// Retweet any post with more than N retweets in 2 hours

// Find interesting nature/travel account
