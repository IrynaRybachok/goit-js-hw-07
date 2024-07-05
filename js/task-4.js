const form = document.querySelector(".login-form")

form.addEventListener("submit", hundleSubmit);

function hundleSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;

    if (!elements.email.value.trim() || !elements.password.value.trim()){
        alert("All form fields must be filled in");
        return;
    } else {
        const info = {
            email: elements.email.value.trim(),
            password: elements.password.value.trim(),
        }
        console.log (info);
    }

    event.currentTarget.reset();
}
