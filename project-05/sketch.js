
// Muutujad
let yPos = 0;
let ySpeed = 5;
//
let xPos = 0;
let color = 1;
let size = 1;


function setup() {
  createCanvas(windowWidth,windowHeight);

  xPos = width;

  // p5.js will automatically run your code at 60 frames per second (FPS).
  frameRate(60);
}

/* Loop */
function draw() {
  background(0);

  //Draw moving ellipse
  fill(255);
  // TODO: draw an ellipse with frameCount as the x position
  // frameCount - built-in variable, counts the number of frames that have been
  //              displayed since the program started
  ellipse(frameCount, height/2, 300, 300);


  //Draw text
  fill(120);
  textSize(72);
  textAlign(CENTER);
  // TODO: create text with frameCount displayed in sketch
  text(frameCount, width/2, height/2); // (txt, x, y)
  // Draws the ellipse
  ellipse(width/2, yPos, 100,100);
  // Moves the ellipse down the canvas
  yPos = yPos + ySpeed;


  fill(color);
  // TODO: Draw an ellipse with xPos variable for the x position
  ellipse(xPos, height/2, size, size);
  xPos += 1;
  // TODO: increment the color variable by 1
  color++;
  // TODO: increment the size variable by 0.5
  size += 0.5;
  // TODO: decrement the xPos variable by 2
  xPos = xPos - 2;

}
