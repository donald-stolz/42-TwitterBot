const fs = require('fs');
const csvparse = require('csv-parse');
const rita = require('rita');
const { tweet } = require('./tweet');
const filePath = path.join(__dirname, '../data/tweets.csv');

function cleanText(text) {
    return rita.RiTa.tokenize(text, ' ')
        .filter(hasNoStopWords)
        .join(' ')
        .trim();
}

function hasNoStopWords(token) {
    const stopwords = ['@', 'http', 'RT'];
    return stopwords.every(sw => !token.includes(sw));
}

const tweetData = fs
    .createReadStream(filePath)
    .pipe(
        csvparse({
            delimiter: ',',
        })
    )
    .on('data', function(row) {
        inputText = `${inputText} ${cleanText(row[5])}`;
    })
    .on('end', function() {
        const markov = new rita.RiMarkov(3);
        markov.loadText(inputText);
        const sentence = markov
            .generateSentences(1)
            .toString()
            .substring(0, 140);
        tweet(sentence);
    });
console.log(filePath);
