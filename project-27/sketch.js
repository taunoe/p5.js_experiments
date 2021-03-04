
/* Global variables */


/* Setup */
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();


}

/* Loop */
function draw() {
  background(255, 40);

  // The built-in key variable stores the value of the most recent key pressed.
  // key - works best with non-special keys such as ‘a’, ‘t’, and ‘x’.
  console.log("key:" + key);

  // If the 'a' key is pressed, draw the following text in the canvas
  if (key === 'a'){
    textSize(22);
    text('\'a\' key was pressed!', width / 2, height / 2);
  }

  // The keyCode variable stores the decimal value of the ASCII code of
  // the most recently pressed key.
  // It can also be used to detect special keys such as BACKSPACE,
  //  DELETE, ENTER, RETURN, TAB, and more.
  console.log("keyCode:" + keyCode);
  // If the spacebar is pressed, draw the following text in the canvas
  if (keyCode === 32) {
    textSize(22);
    text('The spacebar key was pressed!', width / 2, height / 2);
  }

  // While the key variable can detect both uppercase and lowercase characters,
  // the keyCode variable is unable to differentiate the ASCII values from each
  // other. For example, if we were to print the keyCode value of ‘a’ and ‘A’
  // both would print out the number 65, even though the decimal value of
  // the ASCII code of ‘a’ is 97.
}

/* Functions */


// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
