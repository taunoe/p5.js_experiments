
// Global variables


function setup() {
  createCanvas(windowWidth, windowHeight);

}

/* Loop */
function draw() {
  // the sin() and cos() functions will help you create naturally oscillating
  // movements like the movement of a spring or a swing. The sin() and cos()
  // functions calculate the sine and cosine value of an angle, given as the
  // argument of the functions. There is not much difference between the sin()
  // and cos() values other than the starting point. At sin(0), the value is 0
  // and at cos(0) the value is 1.
  //let size = sin(frameCount * 0.01) * width / 2 + width / 2;
  // In the code example above, the sin() function has the argument of
  // frameCount * 0.01. The frameCount variable is used to increment
  // the angle constantly, and the incrementation is slowed down by multiplying
  // the frame count by the value 0.01.

  // Background color is black with opacity of 15
  background(0, 15);
  noStroke();
  fill(255, 127);

  // Oscillate size using sin()
  // sizeOne ranges between 0 and width / 2
  let sizeOne = sin(frameCount * 0.1) * width / 4 + width / 4;
  ellipse(width / 4, height / 2, sizeOne, sizeOne);

  // Oscillate size using cos()
  // sizeTwo ranges between 0 and width / 2
  let sizeTwo = cos(frameCount * 0.01) * width / 4 + width / 4;
  ellipse(width / 4 * 3, height / 2, sizeTwo, sizeTwo);


}

// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
