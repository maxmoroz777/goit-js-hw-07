const elemetsList = document.querySelector("#controls");
const elementCreate = document.createElement("div");
elementCreate.textContent = "hello";
elemetsList.append(elementCreate);

function createBoxes(amount) {
  
};




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
