
// Global variables
let yellowX, yellowY;
let blueX, blueY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  yellowX = width / 2;
  yellowY = height / 2;

  blueX = width / 2;
  blueY = height / 2;

  strokeWeight(5);
}

/* Loop */
function draw() {
  background(0);

  // By surrounding code blocks with the push() and pop() functions,
  // you can isolate transformations to be applied to targeted elements
  // and not affect any elements that come after it.
  // The push() function saves the current style settings and transformations,
  // while pop() restores it back to the original settings.

  // Red square
  push();
    translate(50, 50);
    fill(255, 0, 0);
    rect(0, 0, 100, 100);
  pop();

  // Yellow square
  push();
    translate(300, 150);
    rectMode(CENTER);
    rotate(QUARTER_PI);
    rotate(radians(frameCount))
    fill(255, 255, 0);
    rect(0, 0, 100, 100);
  pop();

  // Blue square
  push();
    translate(100, 250);
    shearX(-0.5);
    fill(0, 0, 255);
    rect(0, 0, 100, 100);
  pop();

  // Yellow star
  push();
  translate(yellowX, yellowY); // Start of code for yellow spiral
  rotate(frameCount * 0.001);
  stroke(255, 255, 0, 200);
  for (let i = 0; i < 24; i++) {
    rotate(PI / 12);
    line(0, 0, 0, 160);
  } // End of code for yellow spiral
  pop();

  // Blue star
  push();
  translate(blueX, blueY); // Start of code for blue spiral
  rotate(frameCount * 0.001 + PI / 8);
  stroke(0, 0, 255, 200);
  for (let i = 0; i < 24; i++) {
    rotate(PI / 12);
    line(0, 0, 0, 240);
  } // End of code for blue spiral
  pop();

}
