
// Global variables


function setup() {
  createCanvas(windowWidth, windowHeight);
  // Set color mode to HSB
  // Hue ranges between 0 - 360
  // Saturation ranges between 0 - 100
  // Brightness ranges between 0 - 100
  colorMode(HSB, 360, 100, 100);
}

/* Loop */
function draw() {
  background(0, 15);

  // The map() function translates a number from one range to another range.
  // let hue_value = map(x_position, 0, width, 0, 360);// (var,orig min, orig max, new min, new max)

  // Map mouseX with initial range of 0 and width
  // to a new range of 0 and 360
  let hue = map(mouseX, 0, width, 0, 360);

  // Map mouseX with initial range of 0 and width
  // to a new range of 50 and width / 2
  let size = map(mouseY, 0, width, 50, width / 2);

  noStroke();
  fill(hue, 100, 100);
  ellipse(width / 2, height / 2, size, size);

}

// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
