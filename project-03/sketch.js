// Muutujad
let circle_width = 100;
let shape_width = 150;

function setup(){
  // Loo canvas laius 800px width ja kõrgus 600px height
  createCanvas(600, 600);  // (x, y)
  //frameRate(1); // Jooksuta funk. draw() kord sekundis.
  background(200); // 0 (must) kuni 255 (valge), halltoonid
}

// Loop
function draw() {


    // Vertikaalsed triipu
    let stepp = 8;
    for(let lineX = 0; lineX < 40; lineX++){
      stroke(150,10,10,150);
      strokeWeight(4);
      line(stepp + lineX * stepp, 0, stepp + lineX * stepp, height);
    }

    for(let i = 0; i < 255; i++){
      stroke(0,0,i);
      strokeWeight(1);
      //fill(i);
      circle(width/2, height/2, 255-i);
    }

    for(let posX = 0; posX < 4; posX++)  {
      for(let posY = 0; posY < 4; posY++)  {
        noStroke();
        circle(width - (posX * 50), height - (posY * 50), 40);
      }
    }

// Grid
  for (let x=0; x<5; x++) {
     for (let y=0; y<5; y++) {
       rect(25 + x*75, 25 + y*75, 10, 10);
     }
   }
}
