const textColor = document.querySelector("body");
const button = document.querySelector(".change-color");
const spanText = document.querySelector(".color");


function getRandomHexColor() {
    return textColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; 
};
const refreshPage = () => {
  location.reload();
};

button.addEventListener("click", getRandomHexColor);
button.addEventListener("click", refreshPage);
spanText.textContent = getRandomHexColor();
