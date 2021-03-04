
/* Global variables */
let fillValue = 0;
let scaleValue = 100;

/* Setup */
function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(400, 400);
}

/* Loop */
function draw() {
  // The built-in variable keyIsPressed evaluates to true when any key is pressed
  // and false otherwise.

  // The keyPressed()function is called once every time a key is pressed.

  // The keyReleased() function, which can be used to trigger an event every
  // time a key release is detected.

  // The keyTyped() function, which can be used to determine each time a specific
  // key is pressed. Note that the function cannot detect special keys but can
  // distinguish between lower-case and upper-case letters.

  // The keyIsDown() function, which can be used to check if a key is currently
  // being pressed.

  background(220)
  rectMode(CENTER);
  noStroke();
  fill(fillValue);
  // Code inside the if statement executes repeadetly as long as a key is held down
  if(keyIsPressed) {
    scaleValue += 2;
  }

  if(scaleValue >= width){
    scaleValue = 100;
  }

  translate(width / 2, -height / 5);
  rotate(PI / 4.0);
  rect(width / 2, width / 2 , scaleValue, scaleValue);
  fill (fillValue, 33, 100);
  rect(width / 2, width / 2 , scaleValue / 1.5, scaleValue / 1.5);
  fill (200,100, fillValue);
  rect(width / 2, width / 2 , scaleValue / 3, scaleValue / 3);

}

/* Functions */
// Code inside the keyPressed() function only executes once during the key press
function keyPressed() {
  if (fillValue === 0) {
    fillValue = 255;
  } else {
    fillValue = 0;
  }
}


// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
