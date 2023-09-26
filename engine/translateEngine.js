const Speaker = require('speaker');
const fs = require('fs');
const path = require('path');


// translation engine
module.exports = {
  
Engine: function(string, droid, mood) {
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
},

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
            setTimeout(playNext, 80);
        });

        speaker.on('error', (err) => {
            console.error('Error playing WAV file:', err);
            currentIndex++;
            playNext();
        });
    }

    playNext();

};





