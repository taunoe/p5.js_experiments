
// Global variables
let xpos = 0;

function setup() {
  // The windowWidth and windowHeight variables store
  // the browser windows’ current width and height.
  // However, if you change the size of your browser window,
  // you’ll notice that the canvas size doesn’t adjust to the new browser size!
  createCanvas(windowWidth, windowHeight);

  // If you want your canvas to dynamically adjust to changes in the browser window’s size,
  // you can use the resizeCanvas() function in the windowResized() function:

  colorMode(RGB);  // RGB or HSB.
  // HSB (Hue, Saturation, Brightness)
  // https://en.wikipedia.org/wiki/HSL_and_HSV

  // Set frame rate to 1 so colors are only generated once per second
  // frameRate(10); // väiksem - aeglasem, 60FBS tavaline
}

/* Loop */
function draw() {
  background(0);


  // Randomly generate r, g, and b values between 0 - 255
  r = random(255);
  g = random(255);
  b = random(255);
  fill(r, g, b);
  rect(90, 90, 100, 100);

  push();
  colorMode(HSB);       // Color mode is set to HSB
  hue = random(360);    // Randomly generate hue balue between 0 - 360
  fill(hue, 100, 100);  // Maximum value of saturation and brightness is 100
  rect(200, 200, 100, 100);
  pop();

  // Opacity (alpha)
  push();
  noStroke();
  for (let i = 0; i < 10; i++) {
    // alpha value increases by 10 with every iteration
    let alpha = 50 + i * 10;
    // size value decreases by 30 with every iteration
    let size = width / 3 - i * 30;


    fill(255, 250, 229, alpha);
    ellipse(width / 2, height / 2, size, size);

  }
  pop();

  // Ellipse drawn in the middle of the canvas
  // Kuju sõltub brauseri akna suurusest ja kujust
  push();
  strokeWeight(3);
  stroke(0,0,200, 200);
  noFill();
  ellipse(width / 2, height / 2, width / 3, height / 3);
  pop();


 // Vasakult paremale lendab kera
  push();
  // Background is black with opacity of 15
  // Opacity ranges between 0 and 255
  // background(0, 15); // Et oleks saba näha

  // Fill color is white with opacity of 127
  fill(255, 127);
  strokeWeight(10);
  // Stroke color is blue with opacity of 50
  stroke(21, 87, 255, 50);
  ellipse(xpos, height / 2, 100, 100);

  // Try changing the increment value below
  xpos += 5;

  if(xpos > width){
    xpos = 0;
  }
  pop();

}

// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
