
// Global variables
let circleX;
let circleY;


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);  // white
  noStroke();

  // p5.js will automatically run your code at 60 frames per second (FPS).
  // frameRate(60);
}

/* Loop */
function draw() {
  // Assign the elliipse's x position to be a random position
  circleX = random(0, width);

  // Assign the elliipse's y position to be a random position
  circleY = random(0, height);

  // Set the fill to be a random value
  fill(random(0, 256), random(0, 256), random(0, 256), random(0, 256));

  //Create an ellipse with defined variables passed in
  ellipse(circleX, circleY, 50, 50);

}
