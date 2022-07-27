function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonChangeColor: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  textColor: document.querySelector(".color"),
};

refs.buttonChangeColor.addEventListener("click", () => {
  refs.body.style.background = getRandomHexColor();
  refs.textColor.innerHTML = refs.body.style.background;
});
