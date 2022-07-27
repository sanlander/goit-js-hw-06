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

let widthAndHeight = 0;
let fonSizeDiv = 10;

function onCreate() {
  let inputValue = Number(refs.formsInput.value);

  const newDiv = [];
  
  for (let i = 0; i < inputValue; i += 1) {
    widthAndHeight === 0 ? (widthAndHeight = 30) : (widthAndHeight += 10);

    fonSizeDiv += 3;

    newDiv.push(`
    <div style="width: ${widthAndHeight}px; height: ${widthAndHeight}px; background-color: ${getRandomHexColor()}; margin: 5px; display: flex; align-items: center;justify-content: center; font-size: ${fonSizeDiv}px; border: 2px solid tomato;">${widthAndHeight}px</div>
    `);
  }

  refs.boxes.insertAdjacentHTML("beforeend", newDiv.join(""));
}

function onDestroy() {
  refs.boxes.innerHTML = "";
  refs.formsInput.value = "";
  widthAndHeight = 0;
  fonSizeDiv = 10;
}
