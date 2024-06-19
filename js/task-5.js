const bodyBackgroundColor = document.querySelector("body");
const button = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyBackgroundColor.style.backgroundColor = color;
  spanText.textContent = color;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; 
};