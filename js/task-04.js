let counterValue = 0;

const refs = {
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  counterValueEl: document.querySelector('#value'),
};

refs.counterValueEl.textContent = counterValue;
refs.btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  refs.counterValueEl.textContent = counterValue;
});
refs.btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  refs.counterValueEl.textContent = counterValue;
});
