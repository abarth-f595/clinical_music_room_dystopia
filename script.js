const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const tracks = document.querySelectorAll(".track");
tracks.forEach((track) => {
  track.addEventListener("mouseenter", () => {
    track.style.transform = "translateY(-2px)";
  });
  track.addEventListener("mouseleave", () => {
    track.style.transform = "translateY(0)";
  });
});
