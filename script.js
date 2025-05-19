const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById("yesBtn");

// Cheeky messages
const cheekyMessages = [
  "Eilish.",
  "girl bsfr",
  "you're legit my girlfriend already",
  "dont piss me off",
  "wrong one...",
  "c'monnnn",
  "stoppppp",
  "haha, sooo funny baby",
  "lol"
];

// Show a cheeky message on hover
noBtn.addEventListener('mouseenter', () => {
  const randomMessage = cheekyMessages[Math.floor(Math.random() * cheekyMessages.length)];
  noBtn.textContent = randomMessage;
});

noBtn.addEventListener('mouseleave', () => {
  noBtn.textContent = "No";
});

// Yes button alert
yesBtn.addEventListener("click", () => {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  alert("YAYYY!! so... is this where we makeout or what?");
});






// Falling sparkles
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.animationDuration = `${3 + Math.random() * 2}s`; // random fall time

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000);


}
const revealBtn = document.getElementById("revealNoteBtn");
const loveNote = document.getElementById("loveNote");

revealBtn.addEventListener("click", () => {
  loveNote.classList.toggle("hidden");
  revealBtn.textContent = loveNote.classList.contains("hidden")
    ? "💌 Open"
    : "💌 Close";
});

const dogSpeech = document.getElementById('dogSpeech');
const dogMessages = [
  "Zoe is waiting...",
  "WOOF!",
];

setInterval(() => {
  const randomMsg = dogMessages[Math.floor(Math.random() * dogMessages.length)];
  dogSpeech.textContent = randomMsg;
}, 5000);


setInterval(createSparkle, 300);

