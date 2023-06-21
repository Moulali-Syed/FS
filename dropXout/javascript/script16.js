// ***************** Event Bubbling ****************/

const body = document.querySelector('body');
const div = document.querySelector('div');
const span = document.querySelector('span');
const btn = document.querySelector('button');

body.addEventListener('click', () => {
  console.log('body clicked');
});

div.addEventListener('click', () => {
  console.log('div clicked');
});

span.addEventListener('click', () => {
  console.log('span clicked');
});

btn.addEventListener('click', (event) => {
  //this prevents the event bubbling
  event.stopPropagation();
  console.log('button clicked');
});
