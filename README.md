# YouTube Downloader (JS-only, No Backend)

A **minimal, futuristic YouTube downloader UI** built with pure HTML, CSS, and JavaScript.  
**No backend, no frameworks, and deployable with GitHub Pages!**

> **Disclaimer:**  
> Browsers cannot directly download YouTube video/audio files due to YouTube's restrictions and CORS.  
> This app generates links to trusted third-party downloaders, prefilled with your YouTube URL.

---

## 🚀 Demo

**[🌐 Live Demo (GitHub Pages)](https://aakhalidhruv28.github.io/Youtube-Video-Downloader/)**  

---

## Features

- **Minimal, futuristic UI** (responsive & mobile friendly)
- **Supports all YouTube links** (including Shorts)
- **Choose MP4 (video) or MP3 (audio) option**
- **Generates download links** to top third-party downloaders:
  - y2mate
  - 9xbuddy

---

## How it works

1. Paste a YouTube video or Shorts URL.
2. Select your format (MP4 or MP3).
3. Click "Get Download Link".
4. Choose a download service and continue to download the video/audio.

---

## ⚡️ Setup & Deployment

1. **Fork or clone this repo.**
2. Push to your GitHub account.
3. Enable **GitHub Pages** (Settings > Pages > Source: `main` branch / root).
4. Visit `https://github.com/aakhalidhruv28/Youtube-Video-Downloader`

> **No build step needed!**

---

## 📁 File Structure

```
Youtube-Video-Downloader/
├── index.html
├── styles.css
├── script.js
├── README.md
└── .nojekyll
```

- `index.html` — Main page.
- `styles.css` — Futuristic minimal styling.
- `script.js` — All logic (dynamic validation, result generation).
- `.nojekyll` — (Ensures GitHub Pages serves as static assets, no Jekyll processing.)

---

## 📝 License

MIT

---

## 🙏 Credits

- [y2mate](https://www.y2mate.com/)
- [9xbuddy](https://9xbuddy.org/)

---

> **For direct downloads, you need a server-side backend due to browser restrictions. This app is for convenience and educational/demo purposes only.**
