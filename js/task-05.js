const refs = {
  input: document.querySelector("#name-input"),
  titleInput: document.querySelector("#name-output"),
};

refs.titleInput.textContent = "Anonymous";
refs.input.addEventListener("input", onChangeInput);

function onChangeInput(event) {
  event.currentTarget.value.trim().length === 0
    ? (refs.titleInput.textContent = "Anonymous")
    : (refs.titleInput.textContent = event.currentTarget.value);
}
