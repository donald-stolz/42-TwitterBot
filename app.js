// app.js
require('dotenv').load();
const Twitter = require('twitter');
const config = require('./config.js');

const T = new Twitter(config);

// Set up search parameters
var params = {
    q: '#nodejs', // Search query (required)
    count: 10, // Number of tweets to return
    result_type: 'recent', // returns most recent results
    lang: 'en', // English
};

T.get('search/tweets', params, function(err, data, response) {
    if (!err) {
        data.statuses.forEach(tweet => {
            // Get the tweet Id from the returned data
            let id = { id: tweet.id_str };
            // Try to favorite selected tweet
            T.post('favorites/create', id, function(err, response) {
                if (!err) {
                    // If the favorite is successful, log the url of the tweet
                    let username = response.user.screen_name;
                    let tweetId = response.id_str;
                    console.log(
                        'Favorited: ',
                        `https://twitter.com/${username}/status/${tweetId}`
                    );
                } else {
                    console.error(err[0].message);
                }
            });
        });
    } else {
        console.error(err[0].message);
    }
});
