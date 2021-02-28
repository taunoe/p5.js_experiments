
// Global variables



function setup() {
  createCanvas(windowWidth, windowHeight);
  //noStroke();
}

/* Loop */
function draw() {
  background(0);
  stroke(0, 200, 0);
  fill(00, 255, 0, 150);
  rectMode(CENTER);

  // The shearX() function angles a shape around the x-axis by the amount given
  // as its argument. The below code horizontally shears the rectangle
  // by 0.5 radians.
  // Interpreted in radians by default but can be changed calling the angleMode().
  angleMode(RADIANS);
  shearX(0.5);
  rect(100, 100, 150, 200);
  // The shearY() function angles a shape around the y-axis by the amount
  // specified as the argument. The below code vertically shears the rectangle
  // by QUARTER_PI radians.
  shearX(-0.5);
  shearY(QUARTER_PI);
  rect(200, 200, 150, 200);
  shearY(-QUARTER_PI);

/* BLUEs */
  angleMode(DEGREES);
  fill(0, 0, 255, 100);
  rect(100, 100, 150, 200);
  shearY(QUARTER_PI)
  rect(200, 200, 150, 200);
  shearY(-QUARTER_PI);

}
