const img = document.getElementById("birthday-img");
const message = document.getElementById("message");

img.addEventListener("click", revealGift);

function revealGift() {
  img.src = "./komugi.jpg";
  message.textContent = "Surprise! Happy Birthday! Love you!";
}
