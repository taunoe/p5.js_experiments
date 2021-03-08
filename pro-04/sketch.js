
let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //capture = createCapture(VIDEO);  // Creates a webcam capture element
  // capture = createCapture(AUDIO);  // Creates a microphone capture element
  capture = createCapture(VIDEO, scaleCanvasToCapture); // Uses a callback function
  capture.hide(); // Hides the original HTML video element
}

/* see ei tööta! */
function scaleCanvasToCapture() {
  // Sets desired width of canvas to width of the window
  console.log("windowWidth=" + windowWidth);
  desiredWidth = windowWidth;
  // Calculates height according to webcam feed's scale
  desiredHeight = windowWidth * (capture.height / capture.width);
  // Resizes the canvas to the desired dimensions
  resizeCanvas(desiredWidth, desiredHeight);
  // Uses the .size() method to resize original webcam capture element
  capture.size(desiredWidth, desiredHeight);
  console.log("desiredWidth=" + desiredWidth);
  console.log("desiredHeight=" + desiredHeight);
}

function draw() {
  background(0);
  //image(capture, 0, 0, width, height); // Draws webcam capture to the canvas
  image(capture, 0, 0,1920, 1220); // scaled image
}
