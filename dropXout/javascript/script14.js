// change color on button click - onClick
function colorChange() {
  const ele = document.querySelector('div');
  ele.style.backgroundColor = 'orange';
}

//onmouseover
function mouseOver() {
  let ele = document.getElementById('over');
  ele.style.backgroundColor = 'red';
}

//onmouseout
function mouseOut() {
  let ele = document.getElementById('over');
  ele.style.backgroundColor = 'pink';
}

//mousedown and mouseup
function mouseDown() {
  const ele = document.getElementById('updown');
  ele.style.color = 'red';
}

function mouseUp() {
  const ele = document.getElementById('updown');
  ele.style.color = 'blue';
}

const e = document.getElementById('event');
e.addEventListener('click', () => {
  console.log('an event triggered');
});
