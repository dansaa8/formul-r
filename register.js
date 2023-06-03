const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const form = e.target;
  const formFields = form.elements;

  const firstname = formFields.firstname.value;
  const lastname = formFields.lastname.value;
  const email = formFields.email.value;
  const username = formFields.username.value;
  const password = formFields.password.value;

  console.log('Email: ', email);
});
