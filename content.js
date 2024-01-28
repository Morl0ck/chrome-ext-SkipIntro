const clickSkipButton = () => {
  const skipButton = document.querySelector('[data-testid="skipButton"] > div');
  if (skipButton) {
    skipButton.click();
    return true;
  }
  return false;
};

const restoreOptions = () => {
  chrome.storage.sync.get({ autoSkipIntro: false }, (items) => {
    if (items.autoSkipIntro) {
      setInterval(clickSkipButton, 1000);
    }
  });
};

if ("mediaSession" in navigator) {
  const videoElement = document.querySelector("video");

  navigator.mediaSession.setActionHandler("play", () => {
    if (videoElement.paused) {
      videoElement.play();
    }
  });

  navigator.mediaSession.setActionHandler("pause", () => {
    if (!videoElement.paused) {
      videoElement.pause();
    }
  });

  navigator.mediaSession.setActionHandler("nexttrack", () => {
    if (!clickSkipButton()) videoElement.currentTime += 10;
  });

  navigator.mediaSession.setActionHandler("previoustrack", () => {
    // set video playback back 10 seconds
    videoElement.currentTime -= 10;
  });
}

restoreOptions();
