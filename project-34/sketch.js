
/* Global variables */
let img1, img2, img3, img4, img5, img6, img7, img8;

let imagePath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/cutePuppySquare.jpg';

let img_width = 200;
let img_height = 200;

function preload() {
  img1 = loadImage(imagePath);
  img2 = loadImage(imagePath);
  img3 = loadImage(imagePath);
  img4 = loadImage(imagePath);
  img5 = loadImage(imagePath);
  img6 = loadImage(imagePath);
  img7 = loadImage(imagePath);
  img8 = loadImage(imagePath);
}

/* Setup */
function setup() {
  createCanvas(800, 800);

  // Filters
  img1.filter(GRAY);
  img2.filter(INVERT);
  img3.filter(POSTERIZE, 4);
  img4.filter(THRESHOLD, 0.6);
  img5.filter(OPAQUE);
  img6.filter(DILATE);
  img7.filter(BLUR, 5);
  img8.filter(ERODE);

  //Draws the images to the canvas
  image(img1,   0,   0, img_width, img_height);
  image(img2, 200,   0, img_width, img_height);
  image(img3, 400,   0, img_width, img_height);
  image(img4, 600,   0, img_width, img_height);
  image(img5,   0, 200, img_width, img_height);
  image(img6, 200, 200, img_width, img_height);
  image(img7, 400, 200, img_width, img_height);
  image(img8, 600, 200, img_width, img_height);
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
