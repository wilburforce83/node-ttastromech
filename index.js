//index.js
const translate = require('./engine/translateEngine.js');


module.exports = {
    astro: function (string) {
        // function do stuff

        translate.Engine(removeNonLetters(string), "astro");
        return console.log("astro translation has completed! May the force be with you.");
    },



    astroRand: function (length) {
        // function do stuff

        translate.Engine(generateRandomString(length), "astro");
        return console.log("astro randomiser translation has completed! May the force be with you.");
    },




    bd1: function (string, mood) {
        // function do stuff
        translate.Engine(removeNonLetters(string), "bd1", mood);
        return console.log("bd1 translation has completed! May the force be with you.");
    },




    bd1Rand: function (length, mood) {
        // function do stuff
        translate.Engine(generateRandomString(length), "bd1", mood);
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





// remove all troublesome characters from string
function removeNonLetters(inputString) {
    return inputString.replace(/[^a-zA-Z]/g, '');
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




