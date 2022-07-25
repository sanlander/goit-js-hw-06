const refs = {
  input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', event => {
  event.currentTarget.value.length >= Number(refs.input.dataset.length)
    ? refs.input.classList.contains('invalid')
      ? refs.input.classList.replace('invalid', 'valid')
      : refs.input.classList.add('valid')
    : refs.input.classList.add('invalid');
});
