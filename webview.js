const path = require('path');

module.exports = (Ferdium) => {
  const getMessages = () => {
    let isPlaying = false;

    // Check Media Session API
    if (navigator.mediaSession && navigator.mediaSession.playbackState === 'playing') {
      isPlaying = true;
    } else {
      // Fallback to video element check
      const video = document.querySelector('video');
      if (video && !video.paused) {
        isPlaying = true;
      }
    }

    // If playing, set indirect badge (1) to show activity
    // usage: Ferdium.setBadge(direct, indirect)
    Ferdium.setBadge(0, isPlaying ? 1 : 0);
  };

  Ferdium.loop(getMessages);
  
  // Only inject service.css if it exists, otherwise this might throw or do nothing. 
  // Since it was missing in the directory listing, we'll omit it for now to be safe.
};
