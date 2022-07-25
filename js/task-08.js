const refs = {
  form: document.querySelector(".login-form"),
  input: document.querySelectorAll("input"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value.length === 0 ||
    event.currentTarget.elements.password.value.length === 0
  ) {
    return alert("Заполните все поля формы!");
  }

  let email = event.currentTarget.elements.email.value;
  let password = event.currentTarget.elements.password.value;

  const formData = {
    email,
    password,
  };
  console.log(formData);

  refs.input.textContent = "";
}
