const videos = {
  latest: [
    {
      title: "🔥🔥 Host Website on Github pages",
      url: "videos/hostwebsite.mp4",
      thumbnail: "images/logo.jpeg"
    }
  ],
  code: [
    {
      title: "HTML Basics",
      url: "https://www.dropbox.com/s/htmlcode/video3.mp4?raw=1",
      thumbnail: "images/waxy.jpg"
    },
    {
      title: "HTML Basics",
      url: "https://www.dropbox.com/s/htmlcode/video3.mp4?raw=1",
      thumbnail: "images/isaac.png"
    }
  ],
  gospel: [
    {
      title: "Musathamange. JW song video",
      url: "videos/dontrun.mp4",
      thumbnail: "images/logo.jpeg"
    },
    {
      title: "Video ya 2025-09-07",
      url: "https://www.dropbox.com/scl/fi/0n1scq1oxu6psk5ix2nwn/2025-09-07-02.34.31.mp4?rlkey=2a4m14qp90e8bh5g5qrzdjvve&st=6f36ct26&raw=1",
      thumbnail: "images/logo.jpeg"
    },
    {
      title: "Tizikana ma yeselo, JW song video",
      url: "videos/man.mp4",
      thumbnail: "images/logo.jpeg"
    }
  ],
  music: [
    {
      title: "Malawi Beats",
      url: "https://www.dropbox.com/s/music/video5.mp4?raw=1",
      thumbnail: "images/logo1.jpeg"
    }
  ],
   any: [
    {
      title: "Nkhani ya ma ID a Standard 8",
      url: "https://www.dropbox.com/scl/fi/dskbfujfz3yikap699uwd/76K-views-12K-comments-Nkhani-ya-ma-ID-a-standard-8-students-By-Alfred-Tambal20250516073345.mp4?rlkey=hugpjhn165lkc7hrwpnnanw3d&st=g189q5b0&raw=1",
      thumbnail: "images/logo.jpeg"
    },
    {
      title: "Video ya 2025-09-07",
      url: "https://www.dropbox.com/scl/fi/0n1scq1oxu6psk5ix2nwn/2025-09-07-02.34.31.mp4?rlkey=2a4m14qp90e8bh5g5qrzdjvve&st=6f36ct26&raw=1",
      thumbnail: "images/logo.jpeg"
    },
    {
      title: "Video ya 2025-05-02",
      url: "https://www.dropbox.com/scl/fi/sdfpib8uq6fv3hsu6ya72/2025-05-02-06.15.47.mp4?rlkey=8l699dl27wwm2v4ew17ekb09r&st=kg4tv466&raw=1",
      thumbnail: "images/logo.jpeg"
    }
  ],
  web: [
     {
      title: "Video ya 2025-09-07",
      url: "https://www.dropbox.com/scl/fi/0n1scq1oxu6psk5ix2nwn/2025-09-07-02.34.31.mp4?rlkey=2a4m14qp90e8bh5g5qrzdjvve&st=6f36ct26&raw=1",
      thumbnail: "images/logo.jpeg"
    },
    {
      title: "Video ya 2025-05-02",
      url: "https://www.dropbox.com/scl/fi/sdfpib8uq6fv3hsu6ya72/2025-05-02-06.15.47.mp4?rlkey=8l699dl27wwm2v4ew17ekb09r&st=kg4tv466&raw=1",
      thumbnail: "images/logo.jpeg"
    }
  ]
};

function showSection(sectionId) {
  document.querySelectorAll('.video-section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

function loadVideos() {
  for (let section in videos) {
    const container = document.getElementById(section + "Videos");
    container.innerHTML = "";
    videos[section].forEach(video => {
      const wrapper = document.createElement("div");
      wrapper.className = "video-thumb";

      const img = document.createElement("img");
      img.src = video.thumbnail;
      img.alt = video.title;
      img.onclick = () => playFullscreen(video);

      const caption = document.createElement("p");
      caption.textContent = video.title;
      caption.onclick = () => playFullscreen(video);

      wrapper.appendChild(img);
      wrapper.appendChild(caption);
      container.appendChild(wrapper);
    });
  }
}

 function createPlayer() {
  const video = document.createElement("video");
  video.id = "fullscreenPlayer";
  video.style.position = "fixed";
  video.style.top = "0";
  video.style.left = "0";
  video.style.width = "100vw";
  video.style.height = "100vh";
  video.style.zIndex = "999";
  video.style.background = "black";
  video.style.objectFit = "contain";
  video.style.display = "none";
  video.controls = true;
  document.body.appendChild(video);

   // Back Button (top-left corner, arrow only)
   const backBtn = document.createElement("button");
backBtn.id = "backBtn";
backBtn.textContent = "🔙";
backBtn.style.position = "fixed";
backBtn.style.top = "80%";
backBtn.style.left = "0";
backBtn.style.fontSize = "2.5em";
backBtn.style.background = "none";
backBtn.style.border = "none";
backBtn.style.color = "white";
backBtn.style.zIndex = "1000";
backBtn.style.cursor = "pointer";
backBtn.style.padding = "0";
backBtn.style.margin = "0";
backBtn.style.lineHeight = "1";
backBtn.style.height = "auto";
backBtn.style.width = "auto";
backBtn.style.display = "none";
backBtn.onclick = () => {
  video.pause();
  video.src = "";
  video.style.display = "none";
  backBtn.style.display = "none";
  downloadBtn.style.display = "none";
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
};
document.body.appendChild(backBtn);

  // Download Button (arrow only)
  const downloadBtn = document.createElement("a");
  downloadBtn.id = "downloadBtn";
  downloadBtn.textContent = "⬇️";
  downloadBtn.style.position = "fixed";
  downloadBtn.style.bottom = "20px";
  downloadBtn.style.right = "20px";
  downloadBtn.style.fontSize = "2em";
  downloadBtn.style.background = "none";
  downloadBtn.style.border = "none";
  downloadBtn.style.color = "white";
  downloadBtn.style.zIndex = "1000";
  downloadBtn.style.cursor = "pointer";
  downloadBtn.style.textDecoration = "none";
  downloadBtn.style.display = "none";
  downloadBtn.setAttribute("target", "_blank");
  document.body.appendChild(downloadBtn);
}

function playFullscreen(videoData) {
  const player = document.getElementById("fullscreenPlayer");
  const backBtn = document.getElementById("backBtn");
  const downloadBtn = document.getElementById("downloadBtn");

  player.src = videoData.url;
  player.style.display = "block";
  player.play();

  downloadBtn.href = videoData.url;
  downloadBtn.download = videoData.title + ".mp4";

  backBtn.style.display = "block";
  downloadBtn.style.display = "block";

  if (player.requestFullscreen) {
    player.requestFullscreen();
  } else if (player.webkitRequestFullscreen) {
    player.webkitRequestFullscreen();
  } else if (player.msRequestFullscreen) {
    player.msRequestFullscreen();
  }
}

function setupSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const resultsContainer = document.getElementById("latestVideos");
    resultsContainer.innerHTML = "";

    if (query === "") {
      loadVideos(); // Bwezerani zonse ngati palibe query
      return;
    }

    for (let section in videos) {
      videos[section].forEach(video => {
        if (video.title.toLowerCase().includes(query)) {
          const wrapper = document.createElement("div");
          wrapper.className = "video-thumb";

          const thumb = document.createElement("img");
          thumb.src = video.thumbnail;
          thumb.alt = video.title;
          thumb.width = 120;
          thumb.height = 80;

          const caption = document.createElement("p");
          caption.textContent = video.title;

          wrapper.appendChild(thumb);
          wrapper.appendChild(caption);
          resultsContainer.appendChild(wrapper);

          thumb.onclick = () => playFullscreen(video);
          caption.onclick = () => playFullscreen(video);
        }
      });
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  createPlayer();
  loadVideos();
  showSection("latest");
  setupSearch();
});
