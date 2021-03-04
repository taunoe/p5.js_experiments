
/* Global variables */

// Variables for the ball
var ballPosX = Math.floor(Math.random() * 300) + Math.floor(Math.random(75));
var ballPosY = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;

// Variables for the paddle
let paddlePosX;
let paddlePosY;
let paddleWidth;
let paddleHeight;

let started;

/* Setup */
function setup() {
  createCanvas(windowWidth, windowHeight);
  paddleWidth = 100;
  paddleHeight = 25;
  started = false
}

/* Loop */
function draw() {
  background(0);

  // Ball bounces off walls
	ballPosX += xBallChange;
	ballPosY += yBallChange;
	if (ballPosX < diameter/2 ||
      ballPosX > windowWidth - 0.5*diameter) {
		xBallChange *= -1;
  }
	if (ballPosY < diameter/2 ||
      ballPosY > windowHeight - diameter) {
    yBallChange *= -1;
	}

  // Detect collision with paddle
  if ((ballPosX > paddlePosX &&
      ballPosX < paddlePosX + paddleWidth) &&
      (ballPosY + (diameter/2) >= paddlePosY)) {
    xBallChange *= -1;
    yBallChange *= -1;
  }

  // Draw ball
	fill(255);
	noStroke();
	ellipse(ballPosX, ballPosY, diameter, diameter);

  // Update paddle location
  if (!started) {
    paddlePosX = windowWidth / 2;
    paddlePosY = windowHeight - 100;
    started = true;
  }

  // Draw paddle
  fill(255);
  noStroke();
  rect(paddlePosX, paddlePosY, paddleWidth, paddleHeight);

  // Reset game when spacebar is pressed
  if (keyIsPressed && key === ' ') {
  ballPosX = 50;
  ballPosY = 50;
  started = false;
  }
}

/* Functions */

// Control the paddle using the right and left arrow keys
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    paddlePosX -= 50;
  }
  else if (keyCode === RIGHT_ARROW) {
    paddlePosX += 50;
  }
}


// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
