function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  formsInput: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", onCreate);
refs.btnDestroy.addEventListener("click", onDestroy);

function onCreate(event) {
  let inputValue = Number(refs.formsInput.value);

  const newDiv = [];
  let widthAndHeight = 20;
  for (let i = 0; i < inputValue; i += 1) {
    widthAndHeight += 10;
    newDiv.push(`
    <div style="width: ${widthAndHeight}px; height: ${widthAndHeight}px; background-color: ${getRandomHexColor()}; margin: 5px"></div>
    `);
  }

  refs.boxes.insertAdjacentHTML("beforeend", newDiv.join(""));
}

function onDestroy() {
  refs.boxes.innerHTML = "";
}
