
// Global variables



function setup() {
  createCanvas(windowWidth, windowHeight);

  // The rectMode() and ellipseMode() functions allow you to modify the location
  // from which the shape is drawn by changing how the x and y arguments passed
  // to rect() and ellipse() functions are interpreted.

  // Sets origin mode to be the rectangle's center
  //rectMode(CENTER);

  // p5.js will automatically run your code at 60 frames per second (FPS).
  //frameRate(1);
}

/* Loop */
function draw() {
  background(0);

  fill(90, 0, 0, 250);
  rectMode(CENTER);  // rectMode(CORNER)
  rect(200, 200, 250, 250);

  fill(0, 80, 0, 250);
  ellipseMode(CORNER);  // ellipseMode(CENTER);
  ellipse(300, 150, 100, 100);

  // The translate() changes the (0, 0) origin of the p5.js coordinate system
  // to be the location specified as the function’s arguments.
  // Example, translate(60, 60) will move the coordinate system
  // 60 pixels to the right and 60 pixels to the bottom.

  translate(20,80);
  fill(150, 0, 0, 250);
  rectMode(CENTER);  // rectMode(CORNER)
  rect(200, 200, 250, 250); // Vaata asukohta

  // The main benefit of the translate() function is that the shapes become
  // independent of the position. This means that you can reuse the code for a
  // shape multiple times to be drawn in various locations without having to
  // assign new x and y variables for the shape functions. 

}
