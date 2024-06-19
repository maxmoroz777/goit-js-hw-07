const inputNnumber = document.querySelector("input[type='number']");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");


createButton.addEventListener("click", () => {
  const amount = Number(inputNnumber.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    const boxesArray = [];
    for (let i = 0; i < amount; i += 1) {
      boxesArray.push(createBoxes(i));
    }
    inputNnumber.value = "";
    boxes.append(...boxesArray);
  }
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

function destroyBoxes() {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  const newDiv = document.createElement("div");
  newDiv.style.width = `${30 + amount * 10}px`;
  newDiv.style.height = `${30 + amount * 10}px`;
  newDiv.style.backgroundColor = getRandomHexColor();
  return newDiv;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}