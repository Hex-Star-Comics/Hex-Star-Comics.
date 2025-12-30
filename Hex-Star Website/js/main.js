// Fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.4s";
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });
});

// Dark mode toggle (shared)
function toggleDark() {
  document.body.classList.toggle("extra-dark");
}

// Simple click sound helper (optional)
function playClick(id) {
  const s = document.getElementById(id);
  if (!s) return;
  s.currentTime = 0;
  s.play();
}
