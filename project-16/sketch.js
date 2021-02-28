
// Global variables


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

/* Loop */
function draw() {
  background(0);
  rectMode(CENTER);
  // Specify angle mode to be in degrees
  angleMode(DEGREES);

    // Vastupäeva
   shearX(-frameCount/25);
   for (let i = 0; i < width; i += 75) {
     for (let j = 0; j < height; j += 75) {

       fill(200, 200, 200);
       rect(i, j, 50, 50);
     }
   }
   shearX(frameCount/25);

   // animatsioon
   // Vertically shear the pattern by frameCount/25
   shearY(frameCount/25);
   for (let i = 0; i < width * 2; i += 75) {
     for (let j = 0; j < height * 2; j += 75) {

       fill(200, 0, 255, 180);
       rect(i, j, 50, 50);

       fill(0, 200, 255, 180);
       rect(i, j+35, 50, 30);
     }
   }
}
