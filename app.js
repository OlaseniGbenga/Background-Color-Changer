const btn = document.querySelector("button");
const body = document.querySelector("body");
const bgColorText = document.querySelector(".bg-color__text");
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorChanger = () => {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * colors.length);
    hex += colors[index];
    console.log(hex);
  }

  body.style.backgroundColor = hex;
  bgColorText.textContent = hex;
};

btn.addEventListener("click", colorChanger);
