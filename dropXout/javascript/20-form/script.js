const input = document.getElementById('input');
const form = document.querySelector('form');

input.addEventListener('focus', () => {
  input.style.backgroundColor = 'blue';
  input.style.color = 'white';
  input.style.border = '2px solid crimson';
});

input.addEventListener('blur', () => {
  input.style.backgroundColor = 'white';
  input.style.border = '2px solid black';
});

input.addEventListener('select', () => {
  alert('u selected');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
