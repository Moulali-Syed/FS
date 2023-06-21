fetch('myfile.txt')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network is not responding');
    }
    return response.text();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (!response.ok) {
      throw new Error('network is not responding');
    }
    return response.json();
  })
  .then((data) => data.forEach((ele) => document.write(ele.title)))
  .catch((err) => console.log(err));

//Post

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
