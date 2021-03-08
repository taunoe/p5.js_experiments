let x, y;
let speedX, speedY;
let redVal, greenVal, blueVal;
let alphaVal = 70;
let angle = 0;
let bg_colour = 50;

function setup() {
  // TODO: Create canvas and set initial background color
  createCanvas(windowWidth, windowHeight);
  background(bg_colour);
  // TODO: Randomize variables used to draw shapes
  x = random(0, width);
  y = random(0, height);
  speedX = random(-3, 3);
  speedY = random(-3, 3);
}

function draw() {
  // TODO: Map key inputs to various shape drawing functions
  if (keyIsPressed && key != ' ') {
    if (keyCode % 5 === 0) { // a = 65
      parametricLines();
    }
    if (keyCode % 5 === 1) { //g = 61
      bouncingEllipse(random(-100, 50));
    }
    if (keyCode % 5 === 2) { //g = 61
      flower();
    }
  }
}

// TODO: Add keyPressed() function to ensure that the drawing functions don't repeat on single key presses
// TODO: Reset canvas on spacebar press
// TODO: Save image on Return/Enter press
function keyPressed() {
  if (key != ' ') {
    if (keyCode % 5 === 3) { // n = 78
      roundedRect();
    }
    if (keyCode % 5 === 4) { // n = 78
      star(random(30, 50), random(30, 50), random(4, 7));
    }
    if (keyCode === 13) {  // Enter
      saveCanvas('pilt_' + frameCount, 'png');  // (filename, image file ext: 'jpg', 'png')
    }
  } else {
    clear(); // reset canvas
    background(bg_colour);
  }
}


// TODO: Add keyReleased() function to randomize values again on key release
function keyReleased() {
  x = random(0, width);
  y = random(0, height);
  speedX = random(-3, 3);
  speedY = random(-3, 3);
}

function keyTyped() {
  //alphaVal -= 1;
}