// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/one.png');
  images[1] = loadImage('assets/two.png');
  images[2] = loadImage('assets/three.png');
  images[3] = loadImage('assets/four.png');
  images[4] = loadImage('assets/five.png');
  images[5] = loadImage('assets/default.png');
  images[6] = loadImage('assets/fit1.png')
  images[7] = loadImage('assets/fit2.png')
  images[8] = loadImage('assets/fit3.png')
  images[9] = loadImage('assets/fit4.png')
  images[10] = loadImage('assets/fit5.png')
  images[11] = loadImage('assets/background1.gif')
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);

  // set to one for startup
  drawFunction = drawDefault;
}

function draw() {
  background(255,200,250);

  drawFunction();
}

drawBackground = function() {
  image(images[11], width - 720, height - 500);
}

drawOne = function() {

  drawBackground();

   image(images[0],width/2 - 50, height/2);
   image(images[6], width - 300, height/2 - 150 );
   image(images[7], width - 300, height/2 + 80);
   image(images[8], width - 1200, height/2 - 200);
   image(images[9], width - 1050, height/2 - 50);
   image(images[10], width - 1200, height/2 + 110);

   fill(255);
   textSize(24);
   text("yellow rain jacket", width/2, height - gTextOffset);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-5 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawTwo = function() {
  drawBackground();

   image(images[1],width/2 - 50, height/2);
   image(images[6], width - 300, height/2 - 150 );
   image(images[7], width - 300, height/2 + 80);
   image(images[8], width - 1200, height/2 - 200);
   image(images[9], width - 1050, height/2 - 50);
   image(images[10], width - 1200, height/2 + 110);

   fill(255);
   textSize(24);
   text("pink overalls", width/2, height - gTextOffset);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-5 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawThree = function() {
  drawBackground();

   image(images[2],width/2 - 50, height/2);
   image(images[6], width - 300, height/2 - 150 );
   image(images[7], width - 300, height/2 + 80);
   image(images[8], width - 1200, height/2 - 200);
   image(images[9], width - 1050, height/2 - 50);
   image(images[10], width - 1200, height/2 + 110);

   fill(255);
   textSize(24);
   text("black dress", width/2, height - gTextOffset);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-5 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawFour = function() {
  drawBackground();

   image(images[3],width/2 - 50 , height/2);
   image(images[6], width - 300, height/2 - 150 );
   image(images[7], width - 300, height/2 + 80);
   image(images[8], width - 1200, height/2 - 200);
   image(images[9], width - 1050, height/2 - 50);
   image(images[10], width - 1200, height/2 + 110);

   fill(255);
   textSize(24);
   text("grey dress", width/2, height - gTextOffset);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-5 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawFive = function() {
  drawBackground();

   image(images[4],width/2 - 50, height/2);
   image(images[6], width - 300, height/2 - 150 );
   image(images[7], width - 300, height/2 + 80);
   image(images[8], width - 1200, height/2 - 200);
   image(images[9], width - 1050, height/2 - 50);
   image(images[10], width - 1200, height/2 + 110);

   fill(255);
   textSize(24);
   text("purple outfit", width/2, height - gTextOffset);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-5 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawDefault = function() {
  drawBackground();

   image(images[5],width/2 - 50, height/2);
   image(images[6], width - 300, height/2 - 150 );
   image(images[7], width - 300, height/2 + 80);
   image(images[8], width - 1200, height/2 - 200);
   image(images[9], width - 1050, height/2 - 50);
   image(images[10], width - 1200, height/2 + 110);

   fill(255);
   textSize(24);
   text("welcome to an's closet :D", width/2, height/15);
   fill(255);
   text("click to begin", width/2, height - gTextOffset);
}


function keyTyped() {
  if( drawFunction === drawDefault ) {
    return;
  }

  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }

  else if( key === 'd' ) {
    drawFunction = drawDefault;
  }
}

function mousePressed() {
  if( drawFunction === drawDefault ) {
    drawFunction = drawOne;
  }
}