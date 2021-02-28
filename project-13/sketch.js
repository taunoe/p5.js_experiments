
// Global variables



function setup() {
  createCanvas(windowWidth, windowHeight);

  // Rotating an element in p5.js means rotating the canvas from its top-left
  // corner at (0, 0). Therefore, all the elements drawn on the coordinate
  // system rotates together with the canvas.
}

/* Loop */
function draw() {
  background(0);
  fill(0);

  fill(0, 0, 255, 180);
  rect(50, 50, 100, 100);

  // Rotating an element in p5.js means rotating the canvas from its top-left
  // corner at (0, 0). Therefore, all the elements drawn on the coordinate
  // system rotates together with the canvas.
  let angle = 1;
  rotate(angle);

  fill(100, 0, 255, 180);
  rect(150, 150, 100, 100);

  // p5.js provides representations of pi (π) values,
  // which you can use by spelling out the words like below:
  // π = PI
  // π / 2 = HALF_PI
  // π / 4 = QUARTER_PI
  // 2 π = TWO_PI
  rotate(HALF_PI);

  fill(0, 100, 255, 180);
  rect(250, 250, 100, 100);

  // radians(180) would equate to 3.14, the equivalent to one π.
  rotate(radians(180));

  fill(100, 100, 255, 180);
  rect(350, 350, 100, 100);

  // Default mode for angles and the rotate() function is already RADIANS.
  // angleMode(DEGREES);
  // angleMode(RADIANS);

  rotate(radians(frameCount * 1));

  for (let i = 0; i < width *2 ; i += 75) {
    for (let j = 0; j < height * 2; j += 75) {
      fill(0, 0, 255, 180);
      rect(i, j, 50, 50);
    }
  }

}
