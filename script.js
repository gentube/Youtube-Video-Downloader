const ytInput = document.getElementById('yt-link');
const generateBtn = document.getElementById('generate-btn');
const form = document.getElementById('yt-form');
const resultDiv = document.getElementById('result');

function isValidYouTubeUrl(url) {
  // Accepts youtube.com, youtu.be, shorts, etc.
  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|shorts\/|embed\/|v\/|playlist\?list=)?[A-Za-z0-9_\-]{11,}/.test(url.trim());
}

ytInput.addEventListener('input', function () {
  const valid = isValidYouTubeUrl(ytInput.value);
  generateBtn.disabled = !valid;
  resultDiv.style.display = "none";
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const link = ytInput.value.trim();
  const format = document.querySelector('input[name="format"]:checked').value;
  resultDiv.style.display = "block";

  // Generate third-party download links
  const encodedLink = encodeURIComponent(link);
  // Major third-party downloaders
  const links = [
    {
      name: "y2mate",
      url: `https://www.y2mate.com/youtube/${link.split("v=")[1] || link.split("/").pop()}`
    },
    {
      name: "9xbuddy",
      url: `https://9xbuddy.org/process?url=${encodedLink}`
    }
  ];

  let html = `<b>Choose a download service:</b>`;
  links.forEach(l => {
    html += `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.name} (${format.toUpperCase()})</a>`;
  });
  html += `<div style="margin-top:0.8em;font-size:0.96em;opacity:0.77;">If one doesn't work, try another.<br>Format will be selectable on the downloader's page.</div>`;
  resultDiv.className = "result";
  resultDiv.innerHTML = html;
});
