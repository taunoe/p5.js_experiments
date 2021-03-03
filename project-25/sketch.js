
/* Global variables */
let fillValue; // Used to modify the ellipse's fill color
let shapeScale; // Used to scale the size of the ellipse

/* Setup */
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  fillValue = 0;
  shapeScale = 50;
 
}

/* Loop */
function draw() {
  background(75, 50);
  // mousePressed() function will only run once the mouse has been pressed.
  // To run the code again, the mouse needs to be released and pressed a second time.

  // When the mouse is pressed, the mouseIsPressed == true

  // The mouseMoved() function, which can be used to trigger an event every time
  // the mouse moves while the mouse has not been pressed.

  // The mouseClicked() function, which can be used to detect a mouse button press
  // and release over an element.

   // Code continuously runs when the mouse is held down
   // TODO: Add if statement to check if mouseIsPressed and set fill colors accordingly
  if (mouseIsPressed) {
    fill(fillValue, 0, 0, 50);
  } else {
    fill(0, 0, fillValue, 50);
  }

  ellipse(width / 2, height / 2, shapeScale, shapeScale);
  
}

/* Functions */

function mouseMoved() {
  fillValue = random(255);
}

function mousePressed() {
  //clear();
  // Code only runs once each mouse press. 
  if (shapeScale < width) {
    shapeScale *= 2;
  } else {
    shapeScale = 50;
  }
}

// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
