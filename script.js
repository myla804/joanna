const noButton = document.querySelector(".button.no");
const yesButton = document.querySelector(".button.yes");

// "Não" button avoidance
noButton.addEventListener("mouseenter", () => {
  const card = document.querySelector(".card");
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;

  const randomX = Math.random() * (cardWidth - noButton.offsetWidth);
  const randomY = Math.random() * (cardHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

// "Sim" button heart animation
yesButton.addEventListener("click", () => {
  for (let i = 0; i < 30; i++) { // 30 corações
    createHeart();
  }

  // Redirect to Spotify link after animation
  setTimeout(() => {
    window.open(
      "https://open.spotify.com/track/1LzNfuep1bnAUR9skqdHCK?si=uEJ2U7kHTDSGhVE35_6rzg",
      "_blank"
    );
  }, 2000);
});

// Function to create heart
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  // Remove heart after animation
  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}
