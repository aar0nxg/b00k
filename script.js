
const totalPages = 13;
let currentPage = 1;

const image = document.getElementById("image");
const caption = document.getElementById("caption");

fetch('captions.json')
  .then(res => res.json())
  .then(data => {
    updatePage(data);
    document.getElementById("prev").addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updatePage(data);
      }
    });
    document.getElementById("next").addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePage(data);
      }
    });
  });

function typeCaption(text) {
  caption.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      caption.textContent += text.charAt(i);
      i++;
      setTimeout(type, 25);
    }
  }
  type();
}

function updatePage(captions) {
  image.src = `assets/page${currentPage}.png`;
  typeCaption(captions[`page${currentPage}`] || "");
}

let seconds = 0;
setInterval(() => {
  seconds++;
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.querySelector(".counter").textContent = `${hrs}:${mins}:${secs}`;
}, 1000);
