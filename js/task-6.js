
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const boxes = document.querySelector("#boxes");
const inputNumber = document.querySelector("[type='number']")
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

btnCreate.addEventListener("click", handleCreate);
function handleCreate(){
  const amount = inputNumber.value;
  const maxValue = Number(inputNumber.max);
  const minValue = Number(inputNumber.min);

  if (amount >= minValue && amount <= maxValue){
    createBoxes(amount);
  }

  inputNumber.value = "";
}

function createBoxes(amount){
  boxes.innerHTML = "";
  const boxesContainer = [];
  let boxSize = 30;
  
  for (let i = 1; i <= amount; i += 1){

    let div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    boxesContainer.push(div);

    boxSize += 10;
  }
  
  boxes.append(...boxesContainer);
}

btnDestroy.addEventListener("click", handleDestroy);

function handleDestroy() {
  boxes.innerHTML = "";
}