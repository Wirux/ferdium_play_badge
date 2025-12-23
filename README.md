# YouTube Music Recipe for Ferdium

[![Version](https://img.shields.io/badge/version-1.4.1-blue.svg)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Ferdium](https://img.shields.io/badge/Ferdium-Recipe-purple.svg)](https://ferdium.org)

A custom, enhanced recipe to integrate **YouTube Music** into [Ferdium](https://ferdium.org/). This recipe brings the full YouTube Music web experience to your workspace with added desktop integration features.

---

## 🚀 Features

### 🎵 Dynamic Playback Indicator
Unlike standard integrations, this recipe features an intelligent playback detection system.
- **Real-time Status**: The service icon in your sidebar displays an active badge (dot) whenever music is playing.
- **Smart Detection**: Uses the modern **Media Session API** with a robust fallback to HTML5 video element monitoring to ensure accuracy.
- **Zero Distraction**: The badge automatically clears when you pause playback.

### 🌓 Theme Support
- **Dark Mode Ready**: Includes structure for custom dark mode styles (`darkmode.css`), ensuring seamless integration with Ferdium's theming engine.

---

## 🛠 Project Structure

This recipe consists of the following key files:

| File | Description |
| :--- | :--- |
| `webview.js` | The core logic script. It injects code into the YouTube Music webview to monitor playback state and update the Ferdium badge. |
| `package.json` | Configuration metadata including the service URL (`https://music.youtube.com/`), version, and ID. |
| `index.js` | The main entry point for the Ferdium service handler. |
| `darkmode.css` | Stylesheet for custom dark mode overrides. |

---

## 📥 Installation

To use this custom recipe in your Ferdium instance:

1.  **Locate your Ferdium Recipes directory:**
    *   **macOS:** `~/Library/Application Support/Ferdium/recipes/`
    *   **Windows:** `%APPDATA%\Ferdium\recipes\`
    *   **Linux:** `~/.config/Ferdium/recipes/`

2.  **Create a folder:**
    Create a new directory named `youtubemusic` (or overwrite the existing one if you are upgrading).

3.  **Copy Files:**
    Place the following files into that folder:
    *   `package.json`
    *   `webview.js`
    *   `index.js`
    *   `darkmode.css`

4.  **Restart Ferdium:**
    Reload Ferdium (View > Reload Ferdium) or restart the application.

5.  **Add Service:**
    Go to "Add new service", search for "YouTube Music" (it will use your local recipe), and add it to your sidebar.

---

## 💻 Code Highlight: Playback Detection

The `webview.js` script efficiently checks for playback activity:

```javascript
// Checks Media Session API first, falls back to video element
if (navigator.mediaSession && navigator.mediaSession.playbackState === 'playing') {
  isPlaying = true;
} else {
  const video = document.querySelector('video');
  if (video && !video.paused) {
    isPlaying = true;
  }
}

// Updates Ferdium badge: (0 direct messages, 1 indirect activity)
Ferdium.setBadge(0, isPlaying ? 1 : 0);
```

---

## 📄 License

This project is licensed under the **MIT License**. See the `package.json` file for details.
