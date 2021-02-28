
// Global variables



function setup() {
  createCanvas(windowWidth, windowHeight);

  // Rotating an element in p5.js means rotating the canvas from its top-left
  // corner at (0, 0). Therefore, all the elements drawn on the coordinate
  // system rotates together with the canvas.

  // scale() enlarges the whole p5.js coordinate system, not just the shape.
  // In a sense, the scale() function is like zooming in and out of the canvas.
  // scale(s, v);
  // s - represents the percentage value to scale the canvas. It is also the
  // percentage to scale the canvas along the x-axis if the
  // second y argument is given.
  // y - can optionally be given to represent the percentage value to scale
  // the canvas along the y-axis.
}

/* Loop */
function draw() {
  background(0, 15);

  stroke(0, 0, 255);
  fill(255, 0, 0, 50);

  // Specify the rectangle's origin point to be center
  rectMode(CENTER);

  // Translate rectangle to the center of canvas
  translate(width / 2, height / 2);

  // Rotate rectangle by a quarter pi
  rotate(QUARTER_PI); //45 kraadi

  rect(0, 0, 450, 450); // First rectangle

  scale(0.5);
  rect(0, 0, 450, 450); // First rectangle
  scale(2); // Tagasi normaalseks!

  rotate(-QUARTER_PI); // -45 kraadi
  fill(250,200);
  rect(100, 100, 200, 200); // Third rectangle

  rotate(QUARTER_PI); //45 kraadi
  stroke(0, 0, 255);
  fill(255, 0);

  // Rotate rectangle by frameCount / 2 in radians
  rotate(radians(frameCount/2));
  rect(0, 0, 450, 450); // Second rectangle

  /* Scaled */
  rotate(radians(frameCount/2));
  scale(2);
  rectMode(CENTER);
  rect(0, 0, 450, 450); // Second rectangle
}
