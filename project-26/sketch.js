
/* Global variables */
let canvas_dist; // Stores diagnal distance across the canvas

/* Setup */
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  canvas_dist = dist(0, 0, width, height); // Diagonal distance across the canvas
}

/* Loop */
function draw() {
  background(255, 40);

  // Nested for loops tp draw a grid of ellipses
  for (let x = 0; x <= width; x += 15) {
    for (let y = 0; y <= height; y += 15) {
      // Calculate the distance between mouse position and each ellipse's position
      let size = dist(mouseX, mouseY, x, y);

      // Reassign size to be proportional to the size of the canvas
      size = (size / canvas_dist) * 150;

      fill(0);
      // Try uncommenting the second fill function below:
      //fill(y, x,size, 10 );
      // Set width and height of ellipse to size variable
      ellipse(x, y, size, size);
    }
  }
}

/* Functions */


// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
