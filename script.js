const btn = document.getElementById("btn");
const out = document.getElementById("out");

let clicks = 0;

btn.addEventListener("click", () => {
  clicks += 1;
  const messages = [
    "Кнопка работает!",
    "Ещё раз работает!",
    "JavaScript жив 😄",
    "Ты на GitHub Pages 🚀",
  ];
  out.textContent = `${messages[(clicks - 1) % messages.length]} (нажатий: ${clicks})`;
});