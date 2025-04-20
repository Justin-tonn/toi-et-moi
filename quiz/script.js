
const startBtn = document.getElementById("startBtn");
const gameSection = document.getElementById("gamrSection");

startBtn.addEventListener("click", () => {
    startBtn.parentElement.classList.add("hidden");
    gameSection.classList.remove("hidden")
});