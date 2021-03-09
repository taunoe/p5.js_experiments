let cloudPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/cloud.mp4';
let starsPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/stars.mp4';
let staticPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/static.mp4';
let humanPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/human.mp4';

let cloudVideo, starsVideo, staticVideo, humanVideo;
let videos;
let outsideVideos;

let margin = 20;
let numOfScreensTall = 4;
let numOfScreensWide = 4;

let counter = 1;

function setup() {
  createCanvas(600, 500);
  // TODO: Load videos
  cloudVideo = createVideo(cloudPath);
  starsVideo = createVideo(starsPath);
  staticVideo = createVideo(staticPath);
  humanVideo = createVideo(humanPath);
  // TODO: Populate videos array
  videos = [cloudVideo, starsVideo, staticVideo, humanVideo];
  console.log("videos.length:" + videos.length);
  // TODO: Iterate over videos to loop, mute, and hide each one
  for (let i = 0; i < videos.length; i++) {
    let video = videos[i];
    console.log(video);
    video.volume(0);
    video.hide();
    video.loop();
    
  }
  // TODO: Populate outsideVideos array
  outsideVideos = [cloudVideo, starsVideo, staticVideo];
}

function draw() {
  background(0);
  
  // Calculate the width and height for each "screen" in the grid
  let w = (width - margin * (numOfScreensWide + 1)) / numOfScreensWide;
  let h = (height - margin * (numOfScreensWide + 1)) / numOfScreensWide;
  
  // Create a 4x4 grid of screens with a margin of 20px
  for (let i = 0; i < numOfScreensWide; i++) { 
    for (let j = 0; j < numOfScreensTall; j++) {
    
      // Calculate current x, y position where this "screen" should be drawn
      let x = margin + i * (w + margin);
      let y = margin + j * (h + margin);
      
      // Draw a white rectangle to demonstrate where this "screen" is
      fill(255);
      rect(x, y, w, h);
      
      // TODO: Fill this "screen" with a video, according to its (i,j) position
      // üleval vasakul
      if (i ===1 && j ===1) {
        // image(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight);
        image(humanVideo, x, y, w, h, 0, 0, humanVideo.width/2, humanVideo.height/2);
      }
      // all vasakul
      else if (i ===1 && j ===2) {
        // image(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight);
        image(humanVideo, x, y, w, h, 0, humanVideo.height/2, humanVideo.width/2, humanVideo.height/2);
      }
      // üleval paremal
      else if (i ===2 && j ===1) {
        // image(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight);
        image(humanVideo, x, y, w, h, humanVideo.width/2, 0, humanVideo.width/2, humanVideo.height/2);
      }
      // all paremal
      else if (i ===2 && j ===2) {
        // image(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight);
        image(humanVideo, x, y, w, h, humanVideo.width/2, humanVideo.height/2, humanVideo.width/2, humanVideo.height/2);
      } else {
        // Now we know we're at an outside video!
        let selectedIndex = (i + j * counter) % outsideVideos.length;
        let selectedVideo = outsideVideos[selectedIndex];
        image(selectedVideo, x, y, w, h);
      }

    }
  }
}

// TODO: Make videos on the outside change when mouse is clicked
function mouseClicked() {
counter++;
}