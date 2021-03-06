
/* Global variables */
let img;
let imagePath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/smiley.png';

function preload(){
  img = loadImage(imagePath);
}

/* Setup */
function setup() {
  createCanvas(windowWidth, windowHeight);
/*
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
*/

  //Iterates through all pixels in the image
  for (let x = 0; x < img.width; x++){
    for (let y = 0; y < img.height; y++){
      //TODO: Get the color at the current pixel
      let pixel_color = img.get(x, y);
      //TODO: Check if the current pixel is black.
      //      If so, set it to blue.
      let blue = [0, 0, 255, 255]
      if (isPixelBlack(pixel_color)) {
        img.set(x, y, blue);
      }
    }
  }

  img.updatePixels();  // Update the pixels!

  image(img, mouseX, mouseY);
}

/* Loop */
function draw() {
  //image(img, mouseX, mouseY);
}

/* Functions */

// isPixelBlack() takes in a  length-4 rgba color array,
// and returns true when the color is pure black,
// i.e. [0, 0, 0, 255]
// Examples:
//   isPixelBlack([0, 0, 0, 255]) == true
//   isPixelBlack([255, 0, 0, 255]) == false
function isPixelBlack(colorArray){
  return (colorArray[0] == 0 &&
     colorArray[1] == 0 &&
     colorArray[2] == 0 &&
     colorArray[3] == 255);
}


// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
