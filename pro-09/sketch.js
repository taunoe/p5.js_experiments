
// https://ml5js.org/
// https://learn.ml5js.org/#/reference/posenet
// https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5


let capture;
let poseNet;
let poses = [];
let blushImg, leftEyeImg, rightEyeImg;
let blushPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/articles/blush.png';
let leftEyePath = 'https://static-assets.codecademy.com/Courses/Learn-p5/articles/leftEye.png';
let rightEyePath = 'https://static-assets.codecademy.com/Courses/Learn-p5/articles/rightEye.png';
let message = "PoseNet model is loading...";

function preload(){
  blushImg = loadImage(blushPath);
  rightEyeImg = loadImage(rightEyePath);
  leftEyeImg = loadImage(leftEyePath);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO, scaleCanvasToCapture);
  capture.hide();

  // Creates a new poseNet method based on the capture, with
  // the modelReady callback function
  poseNet = ml5.poseNet(capture, modelReady);
  // Fills the poses variable with an array of poses
  // every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
}

function modelReady() {
  message = "PoseNet model is loaded!";
}


function draw() {
  background(255);
  image(capture, 0, 0);
  strokeWeight(2);
  textSize(16);
  text(message, 16, 24);

  // Check if poses list is populated
  if (poses.length > 0) {

    // Accesses the first pose in the poses list
    let pose = poses[0].pose;

    // Accesses the eye and nose data
    let nose = pose['nose'];
    let rightEye = pose['rightEye'];
    let leftEye = pose['leftEye'];

    // Estimate sthe width of the eye to draw based off of distance between left and right eyes
    let eyeWidth = abs(rightEye.x - leftEye.x)*.9;

    // Calculates the rest of the image dimensions according to scale
    let scale = eyeWidth / leftEyeImg.width;
    let eyeHeight = leftEyeImg.height * scale;
    let blushWidth = scale * blushImg.width;
    let blushHeight = scale * blushImg.height;

    // Gets the angle at which the head is tilted
    let faceAngle = atan2(leftEye.y - rightEye.y, leftEye.x - rightEye.x);

  // Draws blush above nose
    push();
    let blushX  = nose.x-blushWidth/2;
    let blushY = nose.y-blushHeight*.6;
    translate(blushX, blushY);
    rotate(faceAngle);
    image(blushImg, 0,0,blushWidth,blushHeight);
    pop();

    // Draws the right eye
    push();
    let rightEyeX = rightEye.x-eyeWidth*.65;
    let rightEyeY = rightEye.y-eyeHeight*.25;
    translate(rightEyeX, rightEyeY);
    rotate(faceAngle);
    image(rightEyeImg, 0, 0, eyeWidth,eyeHeight);
    pop();


    // Draws the left eye
    push();
    let leftEyeX = leftEye.x-eyeWidth*.35;
    let leftEyeY = leftEye.y-eyeHeight*.25;
    translate(leftEyeX, leftEyeY);
    rotate(faceAngle);
    image(leftEyeImg, 0, 0, eyeWidth, eyeHeight);
    pop();

  }
}

function scaleCanvasToCapture() {
  // Sets desired width of canvas to width of the window
  desiredWidth = windowWidth;
  // Calculates height according to webcam feed's scale
  desiredHeight = windowWidth * (capture.height / capture.width);
  // Resizes the canvas to the desired dimensions
  resizeCanvas(desiredWidth, desiredHeight);
  // Uses the .size() method to resize original webcam capture element
  capture.size(desiredWidth, desiredHeight);
}
