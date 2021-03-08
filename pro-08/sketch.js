let capture;
let isWebcamReady = false;
let desiredWidth, desiredHeight;
let laserPositionY = 0;
let prevSection;
// TODO: Change fps (frames per second) to a new value
let fps = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO, function(){
    scaleCanvasToCapture();
    isWebcamReady = true;
  });
  capture.hide();
}

function draw() {

  // Runs when webcam is initialized
  if(isWebcamReady){

    // Draws only the region of capture that will be BELOW the laser bar
    image(capture, 0,laserPositionY, desiredWidth, desiredHeight - laserPositionY, 0, laserPositionY, desiredWidth, desiredHeight-laserPositionY);

    // Gets the horizontal section of the video feed that the laser line will cover, as an image element
    prevSection = capture.get(0, laserPositionY, desiredWidth, 2);

    // Draws this over where past laser line was drawn
    image(prevSection, 0, laserPositionY-3, desiredWidth, 2);

    // Draws laser line
    strokeWeight(4);
    stroke('CYAN');
    line(0, laserPositionY, desiredWidth, laserPositionY);

    // Resets laser line to the top
    if (laserPositionY > desiredHeight){
      laserPositionY = 0;
    }

    // Increments laser line position
    laserPositionY++;

    // Adjusts frame rate to slow down
    frameRate(fps);
  }
}

function scaleCanvasToCapture() {
  // Sets desired width of canvas to width of the window
  desiredWidth = windowWidth;
  // Calculates height according to webcam feed's scale
  desiredHeight = windowWidth * (capture.height / capture.width);
  // Resizes the canvas to the desired dimensions
  resizeCanvas(desiredWidth, desiredHeight);
  // Uses the .size() method to resize original webcam capture element
  capture.size(desiredWidth, desiredHeight);
}
