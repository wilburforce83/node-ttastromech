//index.js
const Speaker = require('speaker');
const fs = require('fs');
const path = require('path');

module.exports = {
    astro: function (string) {
        // function do stuff

        translateEngine(removeNonLetters(string), "astro");
        return console.log("astro translation has completed! May the force be with you.");
    },



    astroRand: function (length) {
        // function do stuff

        translateEngine(generateRandomString(length), "astro");
        return console.log("astro randomiser translation has completed! May the force be with you.");
    },




    bd1: function (string, mood) {
        // function do stuff
        translateEngine(removeNonLetters(string), "bd1", mood);
        return console.log("bd1 translation has completed! May the force be with you.");
    },




    bd1Rand: function (length, mood) {
        // function do stuff
        translateEngine(generateRandomString(length), "bd1", mood);
        return console.log("bd1 randomiser translation has completed! May the force be with you.");
    },



    probeDroid: function (type) {
        // function do stuff


        let result = returnWav(arr); // send the array of wav files to wavconcat and return a single file
        return result;
    },




    mouse: function (type) {
        // function do stuff


        let result = playWav(arr); // send the array of wav files to wavconcat and return a single file
        return result;
    },

};

// Concat and return wav file for playing






// translation engine
function translateEngine(string, droid, mood) {
    var wavArray = [];
    var whichDroid = "";
    var format = ".wav";

    if (droid == "astro") {
        whichDroid = 'sounds/astro/';
    };
    if (droid == "bd1" && mood == "happy") {
        whichDroid = 'sounds/bd1/Happy/';
    };
    if (droid == "bd1" && mood == "sad") {
        whichDroid = 'sounds/bd1/Sad/';
    };
    if (droid == "bd1" && mood == "angry") {
        whichDroid = 'sounds/bd1/Angry/';
    };
    for (let i = 0; i < string.length; i++) {
        let character = string[i].toLowerCase();
        let element = whichDroid + character + format;
        console.log(whichDroid)
        wavArray.push(element);

        // Match character to file name somehow
        // Then append wavArray with the matching wav file.
    }
    console.log(wavArray);
    playWav(wavArray);
};




// remove all troublesome characters from string
function removeNonLetters(inputString) {
    return inputString.replace(/[^a-zA-Z]/g, '');
};




//play wav files
function playWav(wavArr) {

    let currentIndex = 0;

    function playNext() {
        if (currentIndex >= wavArr.length) {
            // console.log('All WAV files have been played.');
            return;
        }

        const wavFilePath = path.resolve(__dirname, wavArr[currentIndex]);
        const speaker = new Speaker();

        const fileStream = fs.createReadStream(wavFilePath);
        fileStream.pipe(speaker);

        speaker.on('close', () => {
            currentIndex++;
            playNext();
        });

        speaker.on('error', (err) => {
            console.error('Error playing WAV file:', err);
            currentIndex++;
            playNext();
        });
    }

    playNext();

};




//random string generator
function generateRandomString(length) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        randomString += alphabet.charAt(randomIndex);
    }

    return randomString;
}




