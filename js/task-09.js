function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonChangeColor: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  textColor: document.querySelector('.color'),
};

refs.buttonChangeColor.addEventListener('click', ()=> {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.textColor.innerHTML = getRandomHexColor();
})


