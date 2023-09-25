//index.js

module.exports = {
    astro: function(string, style) {
    // function do stuff


    let result = returnWav(arr); // send the array of wav files to wavconcat and return a single file
    return result;
    },



    astroRand: function() {
        // function do stuff


    let result = returnWav(arr); // send the array of wav files to wavconcat and return a single file
    return result;
    },




    bd1: function(mood) {
        // function do stuff


    let result = returnWav(arr); // send the array of wav files to wavconcat and return a single file
    return result;},




    bd1Rand: function() {
        // function do stuff


    let result = returnWav(arr); // send the array of wav files to wavconcat and return a single file
    return result;},



    probeDroid: function(type) {
        // function do stuff


    let result = returnWav(arr); // send the array of wav files to wavconcat and return a single file
    return result;},




    mouse: function(type) {
        // function do stuff


    let result = returnWav(arr); // send the array of wav files to wavconcat and return a single file
    return result;},

};







// Concat and return wav file for playing

const wavconcat = require('wav-concat')

function returnWav(wavArr) {

return wavconcat(wavArr)
  .concat('out.wav')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err, stdout, stderr) {
    console.error('Error:', err)
    console.error('ffmpeg stderr:', stderr)
  })
  .on('end', function (output) {
    console.error('Audio created in:', output)
  })

}