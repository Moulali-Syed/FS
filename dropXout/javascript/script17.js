// **************** event delegation ******************
//we can specify different functions based on tagName
const div = document.querySelector('div');

div.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    console.log('button clicked');
  } else if (event.target.tagName === 'SPAN') {
    console.log('span is clicked');
  } else {
    console.log('div is clicked');
  }
});
