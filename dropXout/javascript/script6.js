//*********  Symbol  - represents a unique identifier ********* */
let sym = Symbol('id');
console.log(sym);
console.log(sym.toString());
console.log(sym.description);

let sym2 = Symbol('id');
console.log(sym == sym2); //false

//--
let id = Symbol('id');

let obj = {
  name: 'Apple',
  [id]: 1,
};
console.log(obj);
console.log(obj.name);
console.log(obj[id]);

// ********************** Recursion ***********************/
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('recursively calling');
function printRecursive(n) {
  if (n == 0) {
    return;
  }
  printRecursive(n - 1);
  console.log(n);
}
printRecursive(5);

//find factorial recursively
//5! --  5*4*3*2*1

function factL(n) {
  if (n == 1 || n == 0) {
    return 1;
  }
  let prod = 1;
  for (let i = n; i >= 2; i--) {
    prod *= i;
  }
  console.log(prod);
}
factL(5);

function fact(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(5));

//*********** ASynchronous Javascript  */
// Js is synchronous
console.log('this');
console.log('is');
console.log('synchronous');

// ******** setTimeout() *****************/
console.log('1');
setTimeout(() => {
  console.log('hi there', '3');
}, 2000);
console.log('2');

// ******* clearTimeout()  ****************/
let timerId = setTimeout(() => {
  console.log('not gonna see');
}, 5000);

clearTimeout(timerId);

// ****************** callback ***********************

function funn(val) {
  console.log(val);
}
function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}
add(5, 10, funn);

// ************** callback hell **********************

function loadingData(callback) {
  setTimeout(() => {
    console.log('1 Loading Data ............');
    callback();
  }, 3000);
}

function collectingData(callback) {
  setTimeout(() => {
    console.log('2 Collecting Data ...............');
    callback();
  }, 2000);
}

function approvingData(callback) {
  setTimeout(() => {
    console.log('3 approving data ............');
    callback();
  }, 4000);
}

function approved() {
  console.log('4 Approved .......');
}
loadingData(function () {
  collectingData(function () {
    approvingData(function () {
      approved();
    });
  });
});
