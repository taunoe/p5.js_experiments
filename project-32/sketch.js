
/* Global variables */
let video;
let videoPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/beach.mp4';


function preload() {
  video = createVideo(videoPath);
}

/* Setup */
function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(900, 400);
  video.hide();
}

/* Loop */
function draw() {
  background(220);
  // Display video
  image(video, 0, 0, width, height);
}

/* Functions */
function mouseClicked() {
  video.play();
}

// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
