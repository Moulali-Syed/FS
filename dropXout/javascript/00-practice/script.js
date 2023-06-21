let form = document.querySelector('form');
let input = document.querySelector('#email');

input.addEventListener('focus', (e) => {
  input.style.backgroundColor = 'red';
});

input.addEventListener('blur', (e) => {
  input.style.backgroundColor = 'blue';
});

input.addEventListener('select', (e) => {
  alert(`u selected ${e.target.value}`);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
