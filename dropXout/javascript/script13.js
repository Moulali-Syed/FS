function move() {
  let pos = 0;
  const eleMove = document.querySelector('#inside');

  let id = setInterval(frame, 0);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
    }
    pos++;
    eleMove.style.top = pos + 'px';
    eleMove.style.left = pos + 'px';
  }
}

function move2() {
  const eleMove = document.querySelector('#inside');

  eleMove.style.top = '350px';
  eleMove.style.left = '350px';
}
