
/* Global variables */
let A;
let S;
let D;
let W;
let xVal;
let yVal;

/* Setup */
function setup() {
  createCanvas(500, 470);
  frameRate(25);
  rectMode(CENTER);

  xVal = 450;
  yVal = 80;

  // ASCII decimal values
  A = 65;
  D = 68;
  S = 83;
  W = 87;
}

/* Loop */
function draw() {
  background(220);

  textSize(25);
  fill( 0, 180 ,120);
  text(key, 10, 30);
  drawMaze();

  // Move the rectangle to the left if 'a' is pressed
  if (keyCode === A) {
    xVal -= 5;
  }
  // Move the rectangle to the right if 'd' is pressed
  else if (keyCode === D) {
    xVal += 5;
  }
  // Move the rectangle to the down if 's' is pressed
  else if (keyCode === S) {
    yVal += 5;
  }
  // Move the rectangle to the up if 'w' is pressed
  else if(keyCode === W) {
    yVal -= 5;
  }

  if(yVal - 27  > 450 && xVal - 27 < 75) {
    textSize(80)
    background(0, 0, 130, 80)
    text('YOU WON!!', 20, height / 2);
  }

  textSize(25);
  fill(0,0, 200);
  text('Start', 420, 40);
  text('End', 26, 450);
  fill(180, 90, 180);
  rect(xVal, yVal, 55, 55);
}

/* Functions */

function drawMaze(){
  line(10, 50, 410, 50);
  line(10, 50, 10,450);
  line(490, 50, 490, 450);
  line(90, 450, 490, 450);
  line(170, 50, 170, 130);
  line(10, 290, 90, 290);
  line(90, 130, 90, 210);
  line(90, 210, 250, 210);
  line(250, 130, 250, 290);
  line(250, 290, 330,290);
  line(330, 290, 330, 370);
  line(90, 370, 410, 370);
  line(170, 290, 170, 370);
  line(490, 130, 330, 130);
  line(330, 130, 330, 210);
  line(330, 210, 410, 210);
  line(410, 210, 410, 370);
}


// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
