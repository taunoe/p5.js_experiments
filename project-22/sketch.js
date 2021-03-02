
// Global variables
let x_pos;
let y_pos;
let x_target;
let y_target;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Set color mode to HSB
  // Hue ranges between 0 - 360
  // Saturation ranges between 0 - 100
  // Brightness ranges between 0 - 100
  // colorMode(HSB, 360, 100, 100);

  // Initialize pos and target variables
  // pos holds the current position of the ellipse
  x_pos = width / 6;
  // target holds the end position of the ellipse
  x_target = width;

  y_pos = height/3;
  y_target = height;
}

/* Loop */
function draw() {
  background(0, 15);

  // When updating the positions of shapes by incrementing and decrementing
  // values, you get a very linear motion. The lerp() function is what you can
  // use to create a more smooth and natural animation! lerp is a programming
  // term that is short for linear interpolation, a way of figuring out points
  // that lie between two endpoints of a line. https://en.wikipedia.org/wiki/Linear_interpolation
  // In p5.js, the lerp() function calculates a number between two values at a
  // specific percentage increment.
  //let value = lerp(20, 250, 0.2); // value is 66 - 20%i 230st = 46, 46 + 20 = 66
                                  // lerp(from 20, towards 250, 0.2 = 20%)

  // The lerp() function shines when it is used to update the start value of the function.
  //let x_position = 0;
  //let end_position = width;

  // Calculate value that is 2 percent (0.02) from x_position towards end_position
  //x_position = lerp(x_position, end_position, 0.02);

  noStroke();
  fill(255);
  // Calculate lerp value from pos to target
  // Increases 2 percent every loop
  x_pos = lerp(x_pos, x_target, 0.02);
  y_pos = lerp(y_pos, y_target, 0.02);
  ellipse(x_pos, height / 2, width / 4, width / 4);
  //ellipse(x_pos, y_pos, width / 4, width / 4);

  //y_pos = height - x_pos;

  // Set target back to 0 when the ellipse reaches the right side of the canvas
  if(x_pos > width - width / 6){
    x_target = 0;
  }

  // Set target back to width when the ellipse reaches the left side of the canvas
  if(x_pos < width / 6){
    x_target = width;
  }

}

// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
