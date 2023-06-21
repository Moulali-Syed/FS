const input = document.getElementById('todo');
const list = document.getElementById('todo-list');

input.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    addTodo(this.value);
    this.value = '';
  }
});

function addTodo(val) {
  const li = document.createElement('li');
  li.textContent = val;
  list.appendChild(li);

  li.addEventListener('click', function () {
    this.classList.add('done');
  });
}
