let capture;
let desiredWidth, desiredHeight;
let currentFilterIndex = 0;
let filterTypes;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Creates webcam capture
  capture = createCapture(VIDEO, scaleCanvasToCapture);
  capture.hide();

  // TODO: Add an INVERT filter type to filterTypes
  filterTypes = [
    {name: GRAY},
    {name: THRESHOLD, arg: 0.6},
    {name: POSTERIZE, arg: 4}
  ];
}



function draw() {
  image(capture, 0, 0);
  let currentFilter = filterTypes[currentFilterIndex];
  // Applies filter, taking into account optional argument
  if (currentFilter.arg) {
    filter(currentFilter.name, currentFilter.arg);
  } else {
    filter(currentFilter.name);
  }
}

function mousePressed() {
  // Cycles through filters when mouse is pressed
  currentFilterIndex++;
  if (currentFilterIndex >= filterTypes.length) {
    currentFilterIndex = 0;
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
