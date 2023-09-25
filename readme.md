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
const astro = droidChatter.astro;
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

example;

```
const droidChatter = require('node-ttastromech'); // import module
const astromech = droidChatter.astro; // astromech voice

var string = "Hello, I'm R2D2, beep boop." // string to translate
droidChatter.astro(string); // translate to astromech and play back
```

At the moment, there is no way to play the file through a client machine if this package is used on a webserver. It has been designed to run on a host machine used as "brain" for prop and puppet droid builds.
