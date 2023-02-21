const img = document.getElementById("birthday-img");
const message = document.getElementById("message");

img.addEventListener("click", revealGift);

function revealGift() {
  img.src = "[Insert image link or file location for the surprise gift]";
  message.textContent = "Surprise! Happy Birthday! Love you!";
}
