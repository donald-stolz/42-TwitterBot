// bot.js

// const Twit = require('twit');
// const config = require('./config');
// const Tabletop = require('tabletop');

// const bot = new Twit(config);

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
//     'followers/list', //ids for just
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

// Get my 5 most recent follows
// bot.get('friends/list', { count: 5 }, (err, data, response) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// Follow @TheTechMuseum
// bot.post(
//     'friendships/create',
//     {
//         screen_name: 'TheTechMuseum',
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     }
// );

// Get connections[] with EK_TKE
// bot.get(
//     'friendships/lookup',
//     {
//         screen_name: 'EK_TKE',
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     }
// );

// Send a DM to 42SiliconValley
// bot.get(
//     'friendships/lookup',
//     {
//         screen_name: '42SiliconValley',
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//             bot.post(
//                 'direct_messages/events/new',
//                 {
//                     event: {
//                         type: 'message_create',
//                         message_create: {
//                             target: { recipient_id: data[0].id },
//                             message_data: {
//                                 text:
//                                     'Hey. You can ignore this I had to test my twitter bot.',
//                             },
//                         },
//                     },
//                 },
//                 (err, data, response) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 }
//             );
//         }
//     }
// );

// Get the most recent tweet from my timeline
// bot.get(
//     'statuses/home_timeline',
//     {
//         count: 1,
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     }
// );

// Get less info on the 5 most recent tweets in my timeline
// bot.get(
//     'statuses/home_timeline',
//     {
//         count: 5,
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             data.forEach(t => {
//                 console.log(t.text);
//                 console.log(t.user.screen_name);
//                 console.log(t.id_str);
//                 console.log('\n');
//             });
//         }
//     }
// );

// Get 5 most recent tweets from my timeline
// bot.get(
//     'statuses/user_timeline',
//     {
//         count: 5,
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             data.forEach(t => {
//                 console.log(t.text);
//                 console.log(t.user.screen_name);
//                 console.log(t.id_str);
//                 console.log('\n');
//             });
//         }
//     }
// );

// Following examples use this Bloomberg tweet:
// https://twitter.com/business/status/1058404570852933632
// Retweet tweet
// bot.post(
//     'statuses/retweet/:id',
//     {
//         id: '1058404570852933632',
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`${data.text} retweet success!`);
//         }
//     }
// );

// Unretweet tweet
// bot.post(
//     'statuses/unretweet/:id',
//     {
//         id: '1058404570852933632',
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`${data.text} unretweet success!`);
//         }
//     }
// );

// Favorite tweet
// bot.post(
//     'favorites/create',
//     {
//         id: '1058404570852933632',
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`${data.text} tweet liked!`);
//         }
//     }
// );

// Favorite tweet
// bot.post(
//     'favorites/destroy',
//     {
//         id: '1058404570852933632',
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`${data.text} tweet unliked!`);
//         }
//     }
// );

// Delete a tweet
// bot.post(
//     'statuses/destroy/:id',
//     {
//         id: '244825273214836738',
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`${data.text} tweet deleted!`);
//         }
//     }
// );

// Query 42 Silicon Valley
// bot.get(
//     'search/tweets',
//     {
//         q: '42 silicon valley',
//         count: 5,
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             data.statuses.forEach(s => {
//                 console.log(s.text);
//                 console.log(s.user.screen_name);
//                 console.log('\n');
//             });
//         }
//     }
// );

// Lookup 42's id then stream them
// const getId = async handle => {
//     let id = await bot
//         .get('friendships/lookup', {
//             screen_name: handle,
//         })
//         .then(function(result) {
//             if (result.data) {
//                 return result.data[0].id;
//             } else {
//                 console.error(result.statusCode, result.statusMessage);
//             }
//         });

//     return id;
// };

// const stream = async handle => {
//     const id = await getId(handle);

//     const stream = bot.stream('statuses/filter', {
//         follow: id,
//     });
//     console.log(`Following @${handle} - id: ${id}`);
//     stream.on('tweet', t => {
//         console.log(`${t.text}\n`);
//     });
// };
// stream('42SiliconValley');

// Tweet from a spreadsheet
// const spreadsheetUrl =
//     'https://docs.google.com/spreadsheets/d/1I0uI-ZtVAVgX8-zFWO9p-wf9hFfCIRoPV3BPz9-FkiM/edit?usp=sharing';

// Tabletop.init({
//     key: spreadsheetUrl,
//     callback(data, tabletop) {
//         console.log(data);
//         // Data: { Tweets: 'text' }
//         // Call forEach tweet(data)
//     },
//     simpleSheet: true,
// });
