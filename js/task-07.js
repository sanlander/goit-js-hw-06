const refs = {
  rangeInput: document.querySelector('#font-size-control'),
  textInput: document.querySelector('#text'),
};

refs.rangeInput.addEventListener('input', (event) => {
  console.log(event.currentTarget.value);
  refs.textInput.style.fontSize = `${event.currentTarget.value}px`;
});
