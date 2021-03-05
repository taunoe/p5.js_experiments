
/* Global variables */
let video;
let isVolumeOn = true;
let videoPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/codeyVlog.mp4';


function preload() {
  video = createVideo(videoPath);
}

/* Setup */
function setup() {
  createCanvas(480, 270);
  //Creates a background with a play symbol
  background(0);
  triangle(215, 110, 275, 140, 215, 170);
  //Hides the original HTML video element
  video.hide();
}

/* Loop */
function draw() {
  background(220);
  // Display video
  image(video, 0, 0, 480, 270);
}

/* Functions */
function pressPlayButton() {
  //TODO: Play video here:
  video.play();
}

function pressPauseButton() {
  //TODO: Pause video here:
  video.pause();
}

function pressToggleVolumeButton() {
  if (isVolumeOn) {
    //TODO: Turn volume off here:
    video.volume(0); // Mutes the sound
  } else {
    //TODO: Turn volume on here:
    video.volume(1); // Plays sound at max volume
  }
  isVolumeOn = !isVolumeOn;
}

// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
