
// Global variables
let sparkleX;
let sparkleY;
let sparkleSize;

let starX = 0;
let starY = 0;
let starSize = 6;
let starSpeed = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // Set frame rate to 36 FPS
  frameRate(60);

  // p5.js will automatically run your code at 60 frames per second (FPS).
  //frameRate(1);
}

/* Loop */
function draw() {
  background(0, 50);

  // Set random values every draw loop
  sparkleX = random(0, width);
  sparkleY = random(0, height);
  sparkleSize = random(0, 10);

  fill(255);
  noStroke();
  ellipse(sparkleX, sparkleY, sparkleSize);

  // Create a shooting start animation defined in shootingStar() function
  shootingStar(4);

}

function shootingStar(starSpeed) {
  fill(255);
  noStroke();
  ellipse(starX, starY, starSize);
  starX = starX + starSpeed;
  starY = starY + starSpeed;
  starSize = starSize + 0.1;

  if(starX > width || starY > height) {
    starX = 0;
    starY = 0;
    starSize = 1;
  }
}
