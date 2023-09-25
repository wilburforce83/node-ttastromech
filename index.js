//index.js
const Speaker = require('speaker');
const fs = require('fs');
const path = require('path');

module.exports = {
    astro: function (string, style) {
        // function do stuff

        astroTranslate(removeNonLetters(string));
        return console.log("astro function has completed! May the force be with you.");
    },



    astroRand: function (length) {
        // function do stuff

        astroTranslate(generateRandomString(length));
        return console.log("astro randomiser function has completed! May the force be with you.");
    },




    bd1: function (mood) {
        // function do stuff


        let result = something; // send the array of wav files to wavconcat and return a single file
        return result;
    },




    bd1Rand: function () {
        // function do stuff


        let result = something; // send the array of wav files to wavconcat and return a single file
        return result;
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






// astromech translator
function astroTranslate(string) {
    var wavArray = [];
    for (let i = 0; i < string.length; i++) {
        let character = string[i].toLowerCase();
        let element = 'sounds/astro/' + character + '.wav'
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




