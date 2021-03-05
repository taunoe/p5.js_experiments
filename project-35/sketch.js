
/* Global variables */
let img;
let imagePath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/smiley.png';

/* Preload images */
function preload() {
  img = loadImage(imagePath);
}

/* Setup */
function setup() {
  createCanvas(windowWidth, windowHeight);

  // The get() function accesses the color of a specific pixel on the canvas.
  let pixelColor = img.get(28, 35); // Returns [r, g, b, a]
  // Using get() to access a portion of canvas
  let x = 0; let y = 0;
  let w = 100; let h = 100;
  let partOfCanvas = img.get(x, y, w, h); // Returns a region starting at (x, y) that's w-pixels wide and h-pixels high
  // The set() function sets a pixel at a given location on the canvas to a new color.
  // To reflect changes onto the canvas, you need to use the updatePixels() function after the set() call.
  let red = [255, 0, 0, 255];
  img.set(0, 0, red); // Pixel is not actually changed on screen
  img.updatePixels(); // Now pixel is changed!
}

/* Loop */
function draw() {
 
}

/* Functions */


// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
