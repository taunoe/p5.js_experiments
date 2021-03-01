
// Global variables


function setup() {
  createCanvas(windowWidth, windowHeight);


}

/* Loop */
function draw() {
  background(0);

  // Keerleb ümber kesk pinkti
  push();
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(radians(frameCount));  // !!!
    fill(255,0,0);
    rect(0, 0, 100, 100);
  pop();

  // Keerleb ümber parem-üla nurga punkti
  // Green
  push();
    rectMode(CENTER);
    rotate(radians(frameCount)); // !!!!
    translate(width/2, height/2);
    fill(0,255,0);
    rect(0, 0, 100, 100);
  pop();

  // Yellow Rectangle:
  push();
    translate(width/2, height/2); // !!!
    rotate(radians(frameCount));
    noFill();
    stroke(255, 255, 0);
    rect(0, 0,windowWidth, windowHeight);
  pop();

  // Blue Rectangle:
  push();
    rotate(radians(frameCount));
    translate(width/2, height/2); // !!!
    noFill();
    stroke(0, 0, 255);
    rect(0, 0, windowWidth, windowHeight);
  pop();

}
