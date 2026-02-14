// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});

// MUSIC BUTTON
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");

let playing = false;

playBtn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    playBtn.textContent = "Pause Music ⏸️";
    playing = true;
  } else {
    music.pause();
    playBtn.textContent = "Play Music 🎵";
    playing = false;
  }
});

// QUIZ
function checkAnswer() {
  const ans = document.getElementById("userAnswer").value;
  const result = document.getElementById("result");

  if (ans.trim() !== "") {
    result.innerText = "Mujhe pata tha tu yahi bolega. I love you so much baby!";
  } else {
    result.innerText = "Type something first 😊";
  }
}

// MAGIC BUTTON
// =====================================
// MOVIE STYLE HEART ASSEMBLE ANIMATION
// =====================================
document.getElementById("confettiBtn").addEventListener("click", () => {

  // Remove old hearts
  document.querySelectorAll(".heart").forEach(h => h.remove());

  const text = "I LOVE YOU";

  // FULL SCREEN canvas
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Dynamic font size based on screen width
  const fontSize = Math.floor(window.innerWidth / 6);

  ctx.fillStyle = "white";
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Draw text in center of full screen
  ctx.fillText(
    text,
    canvas.width / 2,
    canvas.height / 2
  );

  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  // spacing controls density
  const spacing = 18;

  for (let y = 0; y < canvas.height; y += spacing) {
    for (let x = 0; x < canvas.width; x += spacing) {

      const i = (y * canvas.width + x) * 4;

      if (data[i + 3] > 128) {

        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";

        // random start positions (movie effect)
        heart.style.left =
          scrollX + Math.random() * window.innerWidth + "px";
        heart.style.top =
          scrollY + Math.random() * window.innerHeight + "px";

        // target = full-screen text
        heart.style.setProperty("--targetX", `${scrollX + x}px`);
        heart.style.setProperty("--targetY", `${scrollY + y}px`);

        heart.style.animationDelay = `${Math.random() * 1.5}s`;

        document.body.appendChild(heart);
      }
    }
  }
});
