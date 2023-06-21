// Objects
'use strict';
let obj = {
  name: 'Bravo',
  age: 1,
  'last name': 'tom',
  fun: function () {
    console.log('iam function');
  },
  arr: [10, 20, 30],
};

console.log(obj['name']);
console.log(obj.age);
console.log(obj['last name']);
obj.fun();
console.log(obj.arr);
console.log(obj);

//add property
obj.city = 'California';
console.log(obj);

delete obj.city;

let a = 'Key';
obj[a] = 'hi there';

//iterate
for (let i in obj) {
  console.log(i); //prints all keys
}
for (let i in obj) {
  console.log(obj[i]); //prints all values
}

console.log(Object.keys(obj)); //gives an array of keys
console.log(Object.values(obj)); //gives an array of values
console.log(Object.entries(obj)); //gives an array of key,value pairs

//**************************** Object inside array ******************************** */
let arr = [
  {
    user: 1,
    name: 'tate',
  },
  {
    user: 2,
    name: 'parrot',
  },
  {
    user: 3,
    name: 'dune',
  },
  {
    user: 4,
    name: 'tune',
  },
];
console.log(arr);
console.log(arr[0]);
console.log(arr[0].user);

for (let i in arr) {
  console.log(i);
}
for (let i of arr) {
  console.log(i);
}

let [item1, item2] = arr;
console.log(item1, item2);

//destructuring object inside array
let [{ name }, it2] = arr;
console.log(name, it2);

//we can change name of keys
let [{ user: id }] = arr;
console.log(id);

/**  Functions inside function */
function fn1() {
  console.log('Iam function');
  function fn2() {
    console.log('Iam function f2');
  }
  fn2();
}
fn1();
