
/* Global variables */
let img;
let imagePath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/cutePuppy.jpg';

function preload() {
  // The loadImage() function returns a p5.js Image element. Saving it to a variable lets
  //  us reuse the loaded image as many times as we want.
  img = loadImage(imagePath);
}

/* Setup */
function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(300, 400);
}

/* Loop */
function draw() {
  background(220);

  // After loading an image, we use the image() function to draw it.
  // The function requires three arguments:Image element and the x and y positions.
  image(img, 0, 0, width, height);
  // Optionally, the image() function can take other arguments.
  // We can also resize the drawn image to a certain width and height, as follows:
  let drawnWidth = 100;
  let drawnHeight = 100;
  image(img, 0, 0, drawnWidth, drawnHeight);
}

/* Functions */


// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
