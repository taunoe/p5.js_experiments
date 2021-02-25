
// Global variables
let t;
let x; // X position
let y; // Y position


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);  // white
  t = 0;

  // p5.js will automatically run your code at 60 frames per second (FPS).
  //frameRate(1);
}

/* Loop */
function draw() {
  background(0, 16);

  noStroke();
  fill(255);

  // Set the x position to incorporate the noise function
  x = width * noise(t +15);

  // Set the y position to incorporate the noise function
  y = height * noise(t + 5);

  // Draw an ellipse with the variables for x and y passed in
  ellipse(x, y , 150, 150);

  // Increment the t variable to control the noise amount
  t += 0.005;

  /***************************************/
  //Draw text
  fill(255);
  textSize(20);
  textAlign(CENTER);
  // TODO: create text with frameCount displayed in sketch
  text("x =",70,100); // (txt, x, y)
  text(x,200,100); // (txt, x, y)
  text("y =",70,120); // (txt, x, y)
  text(y,200,120); // (txt, x, y)

  //text("circleY =",100,140); // (txt, x, y)
  //text(circleY,165,140); // (txt, x, y)
  //text("ySpeed =",95,160); // (txt, x, y)
  //text(ySpeed,155,160); // (txt, x, y)

}
