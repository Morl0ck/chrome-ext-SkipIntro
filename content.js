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
    const skipButton = document.querySelector(
      '[data-testid="skipButton"] > div'
    );
    if (skipButton) skipButton.click();
    else console.log("Next track button pressed");
  });

  // navigator.mediaSession.setActionHandler("previoustrack", () => {
  //   console.log("Previous track button pressed");
  // });
}
