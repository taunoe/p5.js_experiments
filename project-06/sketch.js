
// Global variables
let circleX = 300;
let circleY = 0;
let xSpeed = 1;
let ySpeed = 1;


function setup() {
  createCanvas(windowWidth,windowHeight);

  // p5.js will automatically run your code at 60 frames per second (FPS).
  // frameRate(60);
}

/* Loop */
function draw() {
  background(0);

  // Bouncing ball
  ellipse(circleX, circleY, 120);
  // Increment the x position of the ball
  circleX += xSpeed;
  // Increment the y position of the ball
  circleY += ySpeed;
  // Inverse direction when ball hits left or right edge
  if (circleX < 0 || circleX > width) {
    xSpeed = xSpeed * -1;
  }
  // Inverse direction when ball hits top or bottom edge
  if (circleY < 0 || circleY > height) {
    ySpeed = ySpeed * -1;
  }

  //Draw text
  fill(255);
  textSize(20);
  textAlign(CENTER);
  // TODO: create text with frameCount displayed in sketch
  text("circleX =",100,100); // (txt, x, y)
  text(circleX,170,100); // (txt, x, y)
  text("xSpeed =",95,120); // (txt, x, y)
  text(xSpeed,155,120); // (txt, x, y)

  text("circleY =",100,140); // (txt, x, y)
  text(circleY,165,140); // (txt, x, y)
  text("ySpeed =",95,160); // (txt, x, y)
  text(ySpeed,155,160); // (txt, x, y)

}
