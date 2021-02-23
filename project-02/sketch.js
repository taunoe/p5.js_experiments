// Muutujad
let circle_width = 100;
let shape_width = 150;

function setup(){
  // Loo canvas laius 800px width ja kõrgus 600px height
  createCanvas(600, 600);  // (x, y)
  //frameRate(1); // Jooksuta funk. draw() kord sekundis.
  background(200); // 0 (must) kuni 255 (valge), halltoonid

  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);

}

function draw(){
  // Loop

  background(249, 102, 255);          // RGB or #HEX or RGB/GRAY+ALPHA

  fill(0, 50, 80, 150);               // Täitevärv enne kujundit
  noStroke();                         // Raamijoont ei ole
  rect(width/3, height/3, 100);
  rect(width/3+50, height/3+50, 100);

  stroke('white');  // Raamijoone värev
  strokeWeight(2);  // Raamijoone jämedus
  fill(0,0,255);    // Täitevärv enne kujundit
  circle(width/4, height/4, circle_width);  // Top-left quadrant

  fill(0, 40);       // Täitevärv enne kujundit
  strokeWeight(10);  // Raamijoone jämedus
  circle(width-width/4, height/4, circle_width); // Top-right quadrant

  fill('purple');   // Täitevärv enne kujundit
  strokeWeight(5);  // Raamijoone jämedus
  circle(width/4, height-height/4, circle_width); // Bottom-left quadrant

  noFill();  // Läbipaistev
  circle(width-width/4, height-height/4, circle_width); // Bottom-right quadrant

  stroke(50);
  line(width/2 - shape_width, // x1
               shape_width/2, // y1
       width/2 - shape_width, // x2
    height/2 - shape_width/2);// y2

  strokeWeight(50);
  point(width/2 + shape_width, height/2 - shape_width);
}
