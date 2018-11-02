// bot.js

const Twit = require('twit');
const config = require('./config');

const bot = new Twit(config);

// Tweet "hello world!"
// bot.post(
//     'statuses/update',
//     {
//         status: 'hello world!',
//     },
//     (err, data, response) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(`${data.text} tweeted!`);
//         }
//     }
// );

// Get 42's 10 most recent followers
// bot.get(
//     'followers/list',
//     {
//         screen_name: '42SiliconValley',
//         count: 1,
//     },
//     (err, data, response) => {
//         if (err) {
//             console.error(err);
//         } else {
//             data.users.forEach(user => console.log(user));
//         }
//     }
// );

// Get my 10 most recent followers
// bot.get('followers/list', { count: 10 }, (err, data, response) => {
//     if (err) {
//         console.error(err);
//     } else {
//         data.users.forEach(user => console.log(user.screen_name));
//     }
// });
// Get my 5 most recent followers
// bot.get(
//     'friends/list',
//     {
//         count: 5,
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     }
// );
