const input = document.getElementById('input');
const btn = document.querySelector('#form button');
const msg = document.getElementById('msg');
const postsCont = document.querySelector('.right');
let data = {};
btn.addEventListener('click', (e) => {
  e.preventDefault();
  formValidate(input.value);
});

const formValidate = (val) => {
  if (val === '') {
    msg.innerHTML = 'Enter a Post';
  } else {
    msg.innerHTML = '';

    data['text'] = val;
    console.log(data);

    createPost(data);
  }
};

const createPost = (data) => {
  const ele = document.createElement('div');
  const post = `
         <div class="post">
          <p>${data.text}</p>
          <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `;
  ele.innerHTML = post;
  postsCont.append(ele);
  input.value = '';
};

const deletePost = (e) => {
  e.parentElement.parentElement.parentElement.remove();
};
const editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.parentElement.remove();
};
