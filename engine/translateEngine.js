const Speaker = require('speaker');
const fs = require('fs');
const path = require('path');


// translation engine
module.exports = {

    Engine: function (string, droid, mood) {

        let directory = createDir(droid, mood);
        buildArray(directory, string);

    },

    Direct: function (phrase, droid, mood) {
        let directory = createDir(droid, mood);

        var wavArray = [];
        let list = getFileNames(directory);
        // for each character in the string, generate file location and push to array
        if (phrase == "random") {
            let randomFile = pickRandomElementFromArray(list);
            let element = directory + randomFile;
            wavArray.push(element);
            playWav(wavArray); // send array to speaker.
        } else {
            let fileName = phrase.toLowerCase();
            let element = directory + fileName + ".wav";
            wavArray.push(element);
            playWav(wavArray); // send array to speaker.
        }
    }
};

// create directory path
function createDir(droid, mood) {

    var whichDroid = "";
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
    let dir = whichDroid;
    return dir;
};

// build array from string
function buildArray(whichDroid, string) {
    var wavArray = [];
    // for each character in the string, generate file location and push to array
    for (let i = 0; i < string.length; i++) {
        let character = string[i].toLowerCase();
        let element = whichDroid + character + ".wav";
        console.log(whichDroid)
        wavArray.push(element);
    };
    playWav(wavArray); // sned array to speaker.
    // console.log(wavArray);
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

// get files in droid folder
function getFileNames(dirPath) {
    let filePath = dirPath.slice(1);
    let filenames = fs.readdirSync(filePath);
    return filenames;
};

// pick random file from folder
function pickRandomElementFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }





