const noButton = document.querySelector(".button.no");
const yesButton = document.querySelector(".button.yes");

// "Não" button avoidance
const moveButton = () => {
  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect(); // Dimensões do card
  const buttonRect = noButton.getBoundingClientRect(); // Dimensões do botão

  const maxX = cardRect.width - buttonRect.width; // Limite horizontal
  const maxY = cardRect.height - buttonRect.height; // Limite vertical

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
};

// Adicionar eventos para mouse e toque
noButton.addEventListener("mouseenter", moveButton);
noButton.addEventListener("touchstart", moveButton); // Para toque no celular

// "Sim" button heart animation
yesButton.addEventListener("click", () => {
  for (let i = 0; i < 30; i++) {
    createHeart();
  }

  // Redirecionar após animação
  setTimeout(() => {
    // Abrir link diretamente para evitar bloqueios em celulares
    window.location.href =
      "https://open.spotify.com/track/1LzNfuep1bnAUR9skqdHCK?si=uEJ2U7kHTDSGhVE35_6rzg";
  }, 2000);
});

// Função para criar corações
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  // Remover coração após animação
  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}
