let x = 0;    // Starting position for x
let y = 300;  // Starting position for y
let size = 85;
let speed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(32); // Slower frame rate
  noStroke();
}

function draw() {
  background(10);
  drawMoon();
  spaceship(x, y, size);

  if (x > width + 100) {
    x = -50; // Reset x position
    y = random(0, height); // Reset at a random y position
  }
  x = x + speed; // Increment x position
}

// Custom function to draw the moon
function drawMoon() {
  // Moon
  fill(80);
  ellipse(width / 2, height / 2, width / 1.145);

  // Crater
  fill(0, 30);
  ellipse(width / 2 + width / 4, height / 2 - width / 4, width / 2);

  // Crater
  fill(0, 30);
  ellipse(width / 2 - width / 4, height / 2 + width / 10, width / 6);

  // Crater
  fill(0, 30);
  ellipse(width / 2, height / 2 + width / 3, width / 3);
}

// Custom function to draw spaceship
function spaceship(x, y, size) {
  fill(255);

  // Wings
  triangle(x + 25, y - size / 4, x + size, y + size / 4, x + 25, y + size * 3 / 4);

  // Body
  rect(x, y, size, size / 2, 5);
  ellipse(x + size, y + size / 4, size, size / 2);

  // Windows
  fill(0);
  ellipse(x + size / 3, y + size / 4, size / 4);
  ellipse(x + size * 2 / 3, y + size / 4, size / 4);
  ellipse(x + size, y + size / 4, size / 4);
}
