
/* Global variables */
let video;
//let videoPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/codeyVlog.mp4';
let videoPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/UFO.mp4';


function preload() {
  video = createVideo(videoPath);
}

/* Setup */
function setup() {
  //Return the current pixel density
  //pixelDensity();
  //Set the pixel density to 1
  pixelDensity(1); // it’s a good idea to call it first thing in the setup()

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
  //Load video pixels of latest frame
  video.loadPixels();
  //Prints the video's pixels array
  console.log(video.pixels);

  // Iterate through all pixels in the video
  let stepSize = 1;
  for (let y = 0; y < video.height; y += stepSize){
    for (let x = 0; x < video.width; x += stepSize){
      //TODO: Manipulate pixels array
      let indexOfRed = (x + y * video.width) * 4;
      //video.pixels[indexOfRed]     = random(100);  // Red
      video.pixels[indexOfRed + 1] = random(100);  // Green
      //video.pixels[indexOfRed + 2] = random(100);  // Blue
      //video.pixels[indexOfRed + 3] = random(100);  // Alpha

    }
  }
  //TODO: Update the pixels in the video
  video.updatePixels();


  // Display video on the canvas
  image(video, 0, 0, 480, 270);
}

/* Functions */

// If you want your canvas to dynamically adjust to changes in the browser window’s size,
// you can use the resizeCanvas() function in the windowResized() function:
// // Whenever browser size changes, canvas is resized to browser's current width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
