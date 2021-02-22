function setup(){
  // Loo canvas laius 800px width ja kõrgus 600px height
  createCanvas(800, 600);
  frameRate(1); // Jooksuta funk. draw() kord sekundis.
  background(200); // 0 kuni 255, halltoonid
  // Juhusliku tooni loomine:
  // Funk Math.random: juhuslik number 0 kuni 1
  // Funk Math.floor juhuslik number -> int
  //background(Math.floor(Math.random() * 256));
}

function draw(){
  // Drawing code goes here
  // frameRate = 1 st. kord sekundis muudab värvi
  background(Math.floor(Math.random() * 256));
}
