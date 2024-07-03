function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const botton = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

botton.addEventListener("click", handleClick)

function handleClick() {
    textColor.textContent = document.body.style.backgroundColor = getRandomHexColor();

}