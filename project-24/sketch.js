
/* Global variables */
let r, g, b;
let t;

/* Setup */
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250, 10);
  t = 0;
}

/* Loop */
function draw() {
  // The mouseX and mouseY variables always contain the mouse’s current horizontal
  // and vertical positions, relative to the origin of the canvas.
  noStroke();
  //fill(150, 100);
  r = mouseX;
  b = mouseY;
  //g = random(256);
  

  if (mouseX > mouseY) {
    g = 255 * noise(t + mouseY);
  } else if (mouseY > mouseX) {
    g = 255 * noise(t + mouseX);
  } else {
    g = 255;
  }

  fill(r, g, b);
  ellipse(mouseX, mouseY, 50, 50);


}

/* Functions */

// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
