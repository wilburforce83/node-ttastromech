const Speaker = require('speaker');
const fs = require('fs');
const path = require('path');


// translation engine
module.exports = {

    Engine: function (string, droid, mood) {
        var wavArray = [];
        var whichDroid = "";
        var format = ".wav";
        var subDir = mood;

        // check if a mood has been selected
        if (subDir == undefined) {
            subDir = "";
        } else {
            subDir = `${subDir}/`;
        };
        //generate folder location
        if (droid) {
            whichDroid = `../sounds/${droid}/${subDir}`;
        } else {
            console.log('No droid chosen.');
        };
        // for each character in the string, generate file location and push to array
        for (let i = 0; i < string.length; i++) {
            let character = string[i].toLowerCase();
            let element = whichDroid + character + format;
            console.log(whichDroid)
            wavArray.push(element);
        };
        // console.log(wavArray);
        playWav(wavArray); // sned array to speaker.
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





