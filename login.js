const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const form = e.target;
  const formFields = form.elements;

  const username = formFields.username.value;
  const password = formFields.password.value;

  console.log('Username:', username);
});
