const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

const keyPressed = document.querySelector('.key');
const keyState = document.querySelector('.state');

function handleDown(e) {
  keyPressed.innerHTML = `<p style="margin-left:20px">Key ${e.key} is pressed down</p>`;
  keyState.innerHTML = `<p style="margin-left:20px">key is down  </p>`;
}

function handleUp(e) {
  keyPressed.innerHTML = `<p style="margin-left:20px">Key ${e.key} is released</p>`;
  keyState.innerHTML = `<p style="margin-left:20px">key is up  </p>`;
}

startBtn.addEventListener('click', () => {
  document.addEventListener('keydown', handleDown);
  document.addEventListener('keyup', handleUp);

  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  //   stopBtn.disabled = false;
  document.removeEventListener('keydown', handleDown);
  document.removeEventListener('keyup', handleUp);

  keyPressed.textContent = '';
  keyState.textContent = '';

  startBtn.disabled = false;
  stopBtn.disabled = true;
});
