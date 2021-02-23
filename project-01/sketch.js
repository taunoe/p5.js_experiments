function setup(){
  // Loo canvas laius 800px width ja kõrgus 600px height
  createCanvas(800, 600);  // (x, y)
  frameRate(1); // Jooksuta funk. draw() kord sekundis.
  background(200); // 0 (must) kuni 255 (valge), halltoonid

}

function draw(){
  // Drawing code goes here

  // frameRate = 1 st. kord sekundis muudab värvi
  // Juhusliku tooni loomine:
  // Funk Math.random: juhuslik number 0 kuni 1
  // Funk Math.floor juhuslik number -> int
  background(Math.floor(Math.random() * 256));

  // Punkt
  point(200, 200); // (x, y)
  // Joon
  line(20, 40, 320, 120);  // (x1, y1, x2, y2)
  // Ristkülik
  rect(400, 400, 50, 100);  // (x, y, width, height)
  // Ruut
  square(500, 400, 100); // (x, y, width)
  // Ellips
  ellipse(200, 50, 90, 60);  // center, (x, y, width, height)
  ellipse(200, 50, 60, 90);
  // Ring
  circle(200, 200, 100);  // (x, y, width)
  circle(200, 200, 50);
  // Kolmnurk
  triangle(50,50, 100,200, 50,200);  // (x1, y1, x2, y2, x3, y3)
  triangle(50,200, 100,200, 100,350);
  // Nelinurk
  quad(60,50, 160, 60, 150, 100, 70, 90);
  quad(160, 60, 200, 40, 180, 80, 150, 100);

}
