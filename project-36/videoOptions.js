let isVolumeOn = true;

function pressPlayButton() {
  video.play();
}

function pressPauseButton() {
  video.pause();
}

function pressToggleVolumeButton() {
  if (isVolumeOn) {
    video.volume(0);
  } else {
    video.volume(1);
  }
  isVolumeOn = !isVolumeOn;
}
