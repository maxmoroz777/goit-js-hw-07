const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) =>
    !textInput.value.trim()
        ? textOutput.textContent = "Anonymous":
        textOutput.textContent = event.currentTarget.value.trim(),
);
