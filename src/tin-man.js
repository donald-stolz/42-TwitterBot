// listen on port so now.sh likes it
const { createServer } = require('http');

const { dailyPost, getStats } = require('./tweet');
const { stream, favorite, retweet } = require('./engage');
const fs = require('fs');
const path = require('path');
const http = require('http');
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
    console.log('42 Tweet');

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
    console.log('Tech Tweet');

    const id = tweet.id_str;
    // Check list
    if (buzzwords.some(word => tweet.text.toLowerCase().includes(word))) {
        retweet(id);
        favorite(id);
    }
};

// Follow TED Talks
// Retweet any post with more than N retweets in 2 hours
const checkTED = tweet => {
    console.log('Ted Tweet');

    // If more than 30 retweets in an hour, retweet and favorite
    const id = tweet.id_str;
    if (buzzwords.some(word => tweet.text.toLowerCase().includes(word))) {
        retweet(id);
        favorite(id);
    } else {
        setTimeout(async () => {
            t = await getStats(id);
            if (t.retweet_count > 30) {
                console.log('Favoriting & Retweeting');
                console.log(t);
                retweet(id);
                favorite(id);
            }
        }, hour);
    }
};

stream('42SiliconValley', check42);
stream('WIRED', checkTech);
stream('WIREDScience', checkTech);
stream('TheHackersNews', checkTech);
stream('elonmusk', checkTech);
stream('sundarpichai', checkTech);
stream('JeffBezos', checkTech);
stream('tim_cook', checkTech);
stream('satyanadella', checkTech);
stream('TEDTalks', checkTED);

// This will allow the bot to run on now.sh
const server = createServer((req, res) => {
    res.writeHead(302, {
        Location: `https://twitter.com/donstolz`,
    });
    res.end();
});

server.listen(process.env.PORT ? process.env.PORT : 3000);

// Keep awake
setInterval(function() {
    console.log('Awake');
    http.get('http://tin-man.herokuapp.com');
}, 1000 * 60 * 5); // ping every 5 minutes
