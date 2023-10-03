# Node Droid Language
A NodeJS droid language generator for use with single-board computers like the Pi etc. I wanted to extend the tt-astromech Python library and convert it to NodeJS, but it turned into a larger project as I wanted more out of it. I am planning to build this into a full droid language engine that can be used for droid builds of all sorts.

I also plan on building other packages that will bring droids to "life" using this language engine and sensors attached to a pi zero to generate interactive responses to the environment.


## Features

It currently supports Astromechs, BD-1 (from Fallen Jedi games), and D-O - more droids are supported in the backend, I am just working on releasing the functionality as I get time.

## Installation

`npm install node-droid-language`
## Usage

### Loading Module

After installtion call the module using:

`const droidChatter = require('node-droid-language');`

then, for example;

```
const astro = droidChatter.astro;
const bd1 = droidChatter.bd1;`
```

Other droid voices currently available;

```
droidChatter.astroRand // Random astromech sound
droidChatter.bd1Rand // Random bd1 sound
```
### Arguments

#### Astromech

String example;

```
const droidChatter = require('node-droid-language'); // import module
const astromech = droidChatter.astro; // astromech voice

var string = "Hello, I'm R2D2, beep boop." // string to translate
droidChatter.astro(string); // translate to astromech and play back
```
Random generator example;

```
droidChatter.astroRand(30); // generate random chatter 30 characters long.
```
#### BD-1

String example;
```
droidChatter.bd1("Hello world, I'm BD-1","happy"); // BD-1 will be happy
```

Other mood arguments available are `"sad"` and `"angry"` these are also available in random mode;

```
droidChatter.bd1Rand(3,"sad") // generate random sad chatter 3 characters long.
```

#### D-O
D-O is a speaking droid, so the usage is slightly different.

Example;

```
droidChatter.do("batterycharged"); // D-O says "Battery Charged"
```
Other sounds for D-O
* friendsahead
* hello1
* hello2
* hello3
* iamdo
* imissher
* nothanks1
* nothanks2
* sad
* sosorryshesgone
* squeekgone
* squeeky
* whatisthat
* random

### Limitations
At the moment, there is no way to play the file through a client machine if this package is used on a webserver. It has been designed to run on a host machine used as "brain" for prop and puppet droid builds, as such the audio will always be played directly from the host machine.
