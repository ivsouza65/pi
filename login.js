const loginForm = document.querySelector('.login-form');
const cadastroForm = document.querySelector('.cadastro-form');
const linkCadastrar = document.querySelector('.link-cadastrar');
const linkLogin = document.querySelector('.link-login');

// Toggle between login and signup forms
linkCadastrar.addEventListener('click', function(event) {
  event.preventDefault();
  loginForm.classList.add('hidden');
  cadastroForm.classList.remove('hidden');
});

linkLogin.addEventListener('click', function(event) {
  event.preventDefault();
  loginForm.classList.remove('hidden');
  cadastroForm.classList.add('hidden');
});

// Add form validation (optional)
// You can use libraries like `form-validator` or write your own validation logic
// to check for empty fields, email format, password strength, etc.

// Example form validation (replace with your implementation)
loginForm.addEventListener('submit', function(event) {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-senha').value;

  if (email === '' || password === '') {
    event.preventDefault();
    alert('Preencha todos os campos!');
  }
});
