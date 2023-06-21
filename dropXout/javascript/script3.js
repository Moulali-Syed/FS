// loops
/*
for loop
while loop
do while loop
for of loop
for in loop
*/

for (let i = 0; i < 10; i++) {
  console.log('hello');
}

let j = 1;
while (j <= 10) {
  console.log('hi');
  j++;
}

let k = 1;
do {
  console.log('bye');
  k++;
} while (k <= 10);

/** ------------------ functions ------------------- */
function name() {
  console.log('hello');
}

name();

function sayHi(n) {
  console.log('hi ' + n);
}
sayHi('Apple');

function add(a, b) {
  console.log(a + b);
}
add(2, 3);

function sum(a, b, c) {
  return a + b + c;
}
let addition = sum(2, 3, 4);
console.log(addition);

// ********** Types of Functions **********************/
let a = 5; //global scope
function local() {
  let b = 3; //local scope
  console.log(b);
  console.log(a);
}

local();
// console.log(b);//b is not accessible here

//function expression
let fun = function () {
  console.log('hi there');
};

//IIFE
(function () {
  console.log('Alas!');
})();

// Arrow Function
let f = () => {
  console.log('arrow function');
};
f();

//********************** Array ******************************* */
let naam = ['John', 'Jane', 'Tina', 1, true, null];
console.log(naam);
console.log(naam.length); //3
console.log(naam[0]); //'John'

naam.push(100);
naam.unshift(101);

console.log(naam);
//splice - startIndex,NoOfElementTobeDeleted , what toBeAdded
let removed = naam.splice(2, 1, 'hi', 'hello');
console.log(removed);

console.log(naam);

//iterate array

let nums = [10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

for (let ele of nums) {
  console.log(ele);
}

for (let index in nums) {
  console.log(index, nums[index]);
}

//forEach takes 3 parameters  - value , index, array
nums.forEach((val, index, nums) => console.log(val + ' ' + index + ' ' + nums));
//forEach doesnot return anything , it gives undefined

let newArr = nums.map((e) => e + 10);
console.log(newArr);

let nums2 = [11, 21, 31, 41, 51, 61, 71];
console.log(nums2.concat(nums));

console.log(nums.indexOf(10));
console.log(nums.reverse()); //changes original array

console.log(nums.sort((a, b) => a - b));

console.log(nums.slice(1, 4));

console.log(nums.toString()); //gives a string

let filteredArr = nums.filter((val) => val % 2 === 0);
console.log(filteredArr);

let ele = nums.find((val) => val == 10);
console.log(ele);

let eleInd = nums.findIndex((val) => val > 30);
console.log(eleInd);

let lastInd = nums.findLastIndex((val) => val > 50);
console.log(lastInd);

let e = '10,20,30';
let splitArr = e.split(',');
console.log(splitArr);

console.log(splitArr.join('and')); //default is by comma (,)

//*********  multi dimensional array *********************** */

let arr = [
  ['Apple', 10],
  ['Thomas', '92'],
  ['Shelbe', 100],
];

console.log(arr[0]);
console.log(arr[0][1]);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

arr.forEach((ar) => ar.forEach((e) => console.log(e)));

//******************* Copying Array ***************************** */
let arr1 = ['JohnDoe', 'Shimla', true];
let arr2 = arr1;

console.log(arr1);
console.log(arr2);

//but when i push in arr1 , it is reflecting in arr2 , as both points to same memory location
arr2.push(100);
console.log(arr1, arr2);

//********* we must use slice method to copy array ************* */
let arr3 = ['tom', 1, 'grapes'];
let arr4 = arr3.slice(0); // we can also concat on this arr3.slice(0).concat(['jerry'])

arr4.push('hi');
console.log(arr3, arr4);

//**************   we can also copy using spread operator */
let arr5 = [...arr3];

// ************************ Array Destructuring   ********************************/
let ar1 = ['Thomas', 'Shelbe', 'John', 'Jerry'];
let item1 = ar1[0];
let item2 = ar1[1];

let [i1, i2, , i4] = ar1;

console.log(item1, item2, i1, i2, i4);

let [j1, j2, ...j3] = ar1;
console.log(j3);
