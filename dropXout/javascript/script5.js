// *** **************  Lexical Scope ***********************/

function fn1() {
  let a = 2;
  console.log('This is function', a);

  function fn2() {
    var a = 12;
    //   if a is not found in its local scope , then it will check in parent scope
    //if not found there then check in global scope
    console.log(a);
  }
  fn2();
}

fn1();

// ************************ Debugger ********************************/
function fun1() {
  //   debugger;
  for (let i = 0; i <= 3; i++) {
    console.log(i);
  }
}
fun1();

// ********************** Sets *******************************/
let arr = [10, 20, 30, 40, 50, 10];
console.log(arr);

let set = new Set([10, 10, 20, 30, 30, 40, 50, 30]);
console.log(set); //Set(5) {10, 20, 30, 40, 50}
//Set doesnot allow duplicate values
set.add(60);
set.add('hi');

//to find set length
let length = 0;
for (let ele of set) {
  length++;
}
console.log(length);
console.log(set.size);
/*
let array = Array.from(mySet);

let array = [...mySet];

let array = []; mySet.forEach(v => array.push(v));
*/
/*
Method	Description
new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists
clear()	Removes all elements from a Set
forEach()	Invokes a callback for each element
values()	Returns an Iterator with all the values in a Set
keys()	Same as values()
entries()	Returns an Iterator with the [value,value] pairs from a Set
*/

/********************* Map ******************************* */
let map1 = new Map([
  [1, 'one'],
  [2, 'two'],
  ['whole number', [10, 20, 30]],
  ['fName', 'Mickey'],
]);
console.log(map1);

console.log(map1.get(1));

let map2 = new Map();
map2.set('fname', 'TomCat');
console.log(map2);

let keys = map1.keys();
for (let key of keys) {
  console.log(key);
}

/*
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

---
Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

/***************************  this ************************** */

let obj1 = {
  fName: 'Apple',
  age: 1,
  fun: function () {
    //this here represents obj1
    console.log(obj1);
    console.log(this.fName + ' ' + this.age);
  },
};

obj1.fun();

console.log('in global scope ' + this); //window

function funn() {
  console.log(this); //window object - because funn is attached to window object
}
funn();

/*
'use strict';

function fun() {
  console.log(this);
}

fun(); //in strict mode , this inside a function declaration is undefined
*/

//**************************************** new keyword ******************************** */

function fun() {
  let fName = 'Apple';
  this.fName = fName;
}

var obj = new fun(); //this creates an empty object
console.log(obj.fName); //Apple

//*************************************** Constructor Function **************************** */
//Constructor functions have 2 conventions
//They are named with capital letter first
//They should be executed with   'new' operator

function User(name) {
  this.name = name;
}

let user1 = new User('Apple');
console.log(user1);
console.log(user1.name);

function Person(name) {
  if (!new.target) {
    return new Person(name);
  }
  this.name = name;
}

let p1 = Person('Grapes');
console.log(p1.name);
