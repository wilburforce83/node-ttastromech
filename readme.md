# Node JS tt Astromech
A NodeJS rebuild and extension of the Python library of the same name. I built this as I'm not as familiar with Python, but wanted to build a droid using my preferred language. Instead of just hacking it together, I thought I would put it out there on NPM for anyone else who prefers Node over Python.

## Additional features

I have added a lot of functionality, to support other SW droids, 

## Installation

`npm install node-ttastromech`
## Usage

### Loading Module

After installtion call the module using:

`const droidChatter = require('node-ttastromech');`

then, for example;

```
const astromech = droidChatter.astro;
const bd1 = droidChatter.bd1;`
```

Other droid voices available;

```
droidChatter.astroRand // Random astromech sound
droidChatter.bd1Rand // Random bd1 sound
droidChatter.probeDroid // Probe droid sounds
droidChatter.mouse // mouse droid sounds
```
### Arguments

#### Astromech
Some droid voices have arguments available, astromech will take a string, and method. Where the string is the text to translate, and the method is either "full", or "short". `'full'` will translate every character into astromech, whereas `'short'` will take the first character of each word. This is because some sentances are far too long to output in full.

e.g;

```
const droidChatter = require('node-ttastromech'); // import module
const astromech = droidChatter.astro; // astromech voice

var string = "Hello, I'm R2D2, beep boop." // string to translate

let usableWavFile = astromech(string,'full'); // returned wav file for use however you want.
```
