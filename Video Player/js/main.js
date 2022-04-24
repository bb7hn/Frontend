let videoContainer = document.querySelector("#videoContainer");
let video = document.querySelector("#video");
let videoProgress = document.querySelector("#videoProgress");
let currentTime = document.querySelector("#currentTime");
let volumeProgress = document.querySelector("#volumeProgress");
let lastVolumeValue = 0;
let playPauseIcon = document.querySelector("#playPauseIcon");
let playPauseBtn = document.querySelector("#playBtnBig");
let muteUnmuteIcon = document.querySelector("#muteUnmuteIcon");
let hour = document.querySelector("#h");
let minute = document.querySelector("#m");
let second = document.querySelector("#s");
let controlBox = document.querySelector("#controlBox");
let timeout = null;
let volumeLevel = 100;
//Event Listeners
controlBox.addEventListener("mouseover", showControlBox);

controlBox.addEventListener("mouseout", hideControlBox);

video.addEventListener("timeupdate", updateVideoTime);

video.addEventListener("timeupdate", updateVideoTimeText);

videoProgress.addEventListener("change", function (e) {
  video.currentTime = (e.target.value * video.duration) / 100;
  if (video.paused) video.play();
  playPauseIcon.src = "img/stop.svg";
});

videoProgress.addEventListener("mouseover", function () {
  video.removeEventListener("timeupdate", updateVideoTime);
});

videoProgress.addEventListener("mouseout", function () {
  video.addEventListener("timeupdate", updateVideoTime);
});

videoContainer.addEventListener("mousemove", (e) => {
  showControlBox();
  clearTimeout(timeout);
  timeout = setTimeout(hideControlBox, 5000);
});

volumeProgress.addEventListener("change", function (e) {
  video.volume = e.target.value / 100;
  if (video.volume > 0) muteUnmuteIcon.src = "img/volume.svg";
  else muteUnmuteIcon.src = "img/mute.svg";
});

video.addEventListener("contextmenu", (e) => e.preventDefault());

video.addEventListener("dblclick", fullScreen);

video.addEventListener("play", () => {
  playPauseBtn.style.display = "none";
  playPauseIcon.src = "img/stop.svg";
  controlBox.addEventListener("mouseout", hideControlBox);
  hideControlBox();
});

video.addEventListener("pause", () => {
  playPauseBtn.style.display = "flex";
  playPauseIcon.src = "img/play.svg";
  controlBox.removeEventListener("mouseout", hideControlBox);
  showControlBox();
});

video.addEventListener("click", (event) => {
  playPause();
});

document.addEventListener("keyup", function (event) {
  if (event.key === "f" || event.key === "F") {
    fullScreen();
  }

  if (event.key === " ") {
    event.preventDefault();
    playPause();
  }

  if (event.key === "m" || event.key === "M") {
    mute();
  }

  if (event.key === "ArrowRight") {
    video.currentTime += 5;
  }

  if (event.key === "ArrowLeft") {
    video.currentTime -= 5;
  }

  if (event.key === "ArrowUp") {
    if (volumeLevel < 100 && volumeLevel >= 0) volumeLevel += 10;
    video.volume = volumeLevel / 100;
    volumeProgress.value = volumeLevel;
  }

  if (event.key === "ArrowDown") {
    if (volumeLevel <= 100 && volumeLevel > 0) volumeLevel -= 10;
    video.volume = volumeLevel / 100;
    volumeProgress.value = volumeLevel;
  }

  if (event.key === "0") {
    video.currentTime = 0;
  }

  if (event.key === "1") {
    video.currentTime = video.duration/10;
  }

  if (event.key === "2") {
    video.currentTime = video.duration/10*2;
  }

  if (event.key === "3") {
    video.currentTime = video.duration/10*3;
  }

  if (event.key === "4") {
    video.currentTime = video.duration/10*4;
  }

  if (event.key === "5") {
    video.currentTime = video.duration/10*5;
  }

  if (event.key === "6") {
    video.currentTime = video.duration/10*6;
  }

  if (event.key === "7") {
    video.currentTime = video.duration/10*7;
  }

  if (event.key === "8") {
    video.currentTime = video.duration/10*8;
  }

  if (event.key === "9") {
    video.currentTime = video.duration/10*9;
  }
});

//Functions
function hideControlBox() {
  controlBox.classList.remove("active");
  controlBox.classList.add("fade");
  video.classList.add("noCursor");
  controlBox.classList.add("noCursor");
}
function showControlBox() {
  controlBox.classList.add("active");
  controlBox.classList.remove("fade");
  video.classList.remove("noCursor");
  controlBox.classList.remove("noCursor");
}
function updateVideoTime() {
  videoProgress.value = (video.currentTime / video.duration) * 100;
}

function updateVideoTimeText() {
  minute.innerHTML = Math.floor(video.currentTime / 60).toLocaleString(
    "en-US",
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  );
  second.innerHTML = Math.floor(video.currentTime % 60).toLocaleString(
    "en-US",
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  );
}

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function mute() {
  if (video.volume > 0) {
    lastVolumeValue = video.volume;
    video.volume = 0;
    volumeProgress.value = 0;
    muteUnmuteIcon.src = "img/volume.svg";
  } else {
    video.volume = lastVolumeValue;
    volumeProgress.value = lastVolumeValue * 100;
    muteUnmuteIcon.src = "img/mute.svg";
  }
}

function fullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    videoProgress.classList.add("videoProgress");
    videoProgress.classList.remove("videoProgress2");
  } else if (document.webkitFullscreenElement) {
    // Need this to support Safari
    document.webkitExitFullscreen();
    videoProgress.classList.add("videoProgress");
    videoProgress.classList.remove("videoProgress2");
  } else if (videoContainer.webkitRequestFullscreen) {
    // Need this to support Safari
    videoContainer.webkitRequestFullscreen();
    videoProgress.classList.add("videoProgress2");
    videoProgress.classList.remove("videoProgress");
  } else {
    videoContainer.requestFullscreen();
    videoProgress.classList.add("videoProgress2");
    videoProgress.classList.remove("videoProgress");
  }
}
