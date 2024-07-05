const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handleInput);

function handleInput(event) {
    const userName = event.currentTarget.value.trim(); 
    if (userName !== ""){
        nameOutput.textContent = userName;
    } else {
        nameOutput.textContent = "Anonymous";
    }
}
