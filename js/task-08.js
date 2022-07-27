const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  const { email, password } = formData;

  if (email.length === 0 || password.length === 0) {
    return alert("Заполните все поля формы!");
  }

  console.log(formData);

  event.currentTarget.reset();
}
