
// Global variables
let t;  // circle
let sq; // square
let tr; // triangle
let increment = 0.001;

let increment_2 = 0.005;


function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  stroke(255);
  noFill();
  t = 0;
  sq = 0;
  tr = 0;

  // p5.js will automatically run your code at 60 frames per second (FPS).
  //frameRate(1);
}

/* Loop */
function draw() {
  background(0, 15);
  noFill();

  stroke(255, 0, 0, 150);  // R
  makeCircle(4, 50, 400);
  stroke(0, 255,0, 150);   // G
  makeCircle(0, 200, 100);
  stroke(0, 0, 255, 150);  // B
  makeCircle(100, 200, 1);

  stroke(200, 150, 0, 150);  // yellow
  make_square(40, 40, 140);

  stroke(255, 255, 255, 150);  // white
  //fill(255, 255, 255, 150);  // white
  make_triangle(50,50, 100,200, 50,200);

}

function makeCircle(xPos, yPos, circleSize) {
  let x = width * noise(t + xPos);
  let y = height * noise(t + yPos);
  let size = width * noise(t + circleSize);

  ellipse(x, y, size, size);

  t += increment;
}

function make_square(x_pos, y_pos, square_width) {
  let x = width/2 * noise(sq + x_pos);
  let y = height/2 * noise(sq + y_pos);
  let size = width * noise(sq + square_width);
  square(x, y, size); // (x, y, width)
  sq += increment;
}

function make_triangle(x1_pos, y1_pos, x2_pos, y2_pos, x3_pos, y3_pos) {
  let x1 = (width/2) * noise(tr + x1_pos);
  let y1 = (width/2) * noise(tr + y1_pos);
  let x2 = (width/2) * noise(tr + x2_pos);
  let y2 = (width/2) * noise(tr + y2_pos);
  let x3 = (width/2) * noise(tr + x3_pos);
  let y3 = (width/2) * noise(tr + y3_pos);

  triangle(x1, y1, x2, y2, x3, y3);

  tr += increment_2;

  // triangle(50,50, 100,200, 50,200);  // (x1, y1, x2, y2, x3, y3)
}
