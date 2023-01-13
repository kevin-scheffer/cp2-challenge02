let button01;
let button02;
let button03;
let button04;
let button05;
let button06;
let button07;
let button08;
let button09;
let button10;

let sfx01;
let sfx02;
let sfx03;
let sfx04;
let sfx05;
let sfx06;
let sfx07;
let sfx08;
let sfx09;
let sfx10;

let gif01;
let gif02;
let gif03;
let gif04;
let gif05;
let gif06;
let gif07;
let gif08;
let gif09;
let gif10;

let sound;
let leftSlider;
let rightSlider;

function preload() {
    sfx01 = loadSound('sfx/sound-01.mp3');
    sfx02 = loadSound('sfx/sound-02.mp3');
    sfx03 = loadSound('sfx/sound-03.mp3');
    sfx04 = loadSound('sfx/sound-04.mp3');
    sfx05 = loadSound('sfx/sound-05.mp3');
    sfx06 = loadSound('sfx/sound-06.mp3');
    sfx07 = loadSound('sfx/sound-07.mp3');
    sfx08 = loadSound('sfx/sound-08.mp3');
    sfx09 = loadSound('sfx/sound-09.mp3');
    sfx10 = loadSound('sfx/sound-10.mp3');

    gif01 = loadImage('sfx/animation/flame-01.gif');
    gif02 = loadImage('sfx/animation/flame-02.gif');
    gif03 = loadImage('sfx/animation/flame-03.gif');
    gif04 = loadImage('sfx/animation/flame-04.gif');
    gif05 = loadImage('sfx/animation/flame-05.gif');
    gif06 = loadImage('sfx/animation/flame-06.gif');
    gif07 = loadImage('sfx/animation/flame-07.gif');
    gif08 = loadImage('sfx/animation/flame-08.gif');
    gif09 = loadImage('sfx/animation/flame-09.gif');
    gif10 = loadImage('sfx/animation/flame-10.gif');
}

function setup() {
    createCanvas(displayWidth, displayHeight).addClass('canvas');

    button01 = select('#soundButton01');
    button02 = select('#soundButton02');
    button03 = select('#soundButton03');
    button04 = select('#soundButton04');
    button05 = select('#soundButton05');
    button06 = select('#soundButton06');
    button07 = select('#soundButton07');
    button08 = select('#soundButton08');
    button09 = select('#soundButton09');
    button10 = select('#soundButton10');

}

function draw() {

    image(gif01, 0, 0, 1750, 1200);
    image(gif02, 0, 0, 1750, 1200);
    image(gif03, 0, 0, 1750, 1200);
    image(gif04, 0, 0, 1750, 1200);
    image(gif05, 0, 0, 1750, 1200);
    image(gif06, 0, 0, 1750, 1200);
    image(gif07, 0, 0, 1750, 1200);
    image(gif08, 0, 0, 1750, 1200);
    image(gif09, 0, 0, 1750, 1200);
    image(gif10, 0, 0, 1750, 1200);

    button01.mousePressed(playSound01);
    button02.mousePressed(playSound02);
    button03.mousePressed(playSound03);
    button04.mousePressed(playSound04);
    button05.mousePressed(playSound05);
    button06.mousePressed(playSound06);
    button07.mousePressed(playSound07);
    button08.mousePressed(playSound08);
    button09.mousePressed(playSound09);
    button10.mousePressed(playSound10);

    function playSound01() {
        sfx01.play();
        gif01.reset();
        gif01.play();
    }

    function playSound02() {
        sfx02.play();
        gif02.reset();
        gif02.play();
    }
    
    function playSound03() {
        sfx03.play();
        gif03.reset();
        gif03.play();
    }
    function playSound04() {
        sfx04.play();
        gif04.reset();
        gif04.play();
    }
    function playSound05() {
        sfx05.play();
        gif05.reset();
        gif05.play();
    }
    function playSound06() {
        sfx06.play();
        gif06.reset();
        gif06.play();
    }
    function playSound07() {
        sfx07.play();
        gif07.reset();
        gif07.play();
    }
    function playSound08() {
        sfx08.play();
        gif08.reset();
        gif08.play();
    }
    function playSound09() {
        sfx09.play();
        gif09.reset();
        gif09.play();
    }
    function playSound10() {
        sfx10.play();
        gif10.reset();
        gif10.play();
    }
}