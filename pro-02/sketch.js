
let ballCount = 500;

let x = [];
let y = [];

let xSpeed = [];
let ySpeed = [];
let size = [];

let r = [];
let g = [];
let b = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // TODO: Create a for loop that iterates through i until it reaches the ball count value
  for (let i = 0; i < ballCount; i++) {
    // Inside the for loop:
    // TODO: Set x and y position to be the center
     x[i] = width/2;
     y[i] = height/2;
    // TODO: Set the speeds to be random
    xSpeed[i] = random(-5, 5);
    ySpeed[i] = random(-5, 5);
    // TODO: Set the size to be random
    size[i] = random(10, 50);
    // TODO: Set the colors to be random
    r[i] = random(0, 256);
    g[i] = random(0, 256);
    b[i] = random(0, 256);
  }
  
}

function draw() {
  background(0, 30);
  
  for (let i = 0; i < ballCount; i++) {
    // TODO: Increment speed for x position
    x[i] += xSpeed[i];
    // TODO: Increment speed for y position
    y[i] += ySpeed[i];
    // TODO: Reverse x direction if ball hits left or right sides
    if (x[i] < size[i]/2 || x[i] > width - size[i]/2) {
      xSpeed[i] *= -1;
    }
    // TODO: Reverse y direction if ball hits top or bottom sides
    if (y[i] < size[i]/2 || y[i] > height - size[i]/2) {
      ySpeed[i] *= -1;
    }
    // TODO: Set random R, G, B values
    fill(r[i], g[i], b[i]);
    // TODO: Style to have no strokes
    noStroke();
    // TODO: Draw the bouncing balls
    ellipse(x[i], y[i], size[i], size[i]);
  }

} 