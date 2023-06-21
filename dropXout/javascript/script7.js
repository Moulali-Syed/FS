// ************  Promise ******************/
function fun(task) {
  return new Promise((resolve, reject) => {
    if (task) {
      resolve('completed');
    } else {
      reject('task not completed');
    }
  });
}

let onResolve = (res) => {
  console.log(res);
};

let onReject = (err) => {
  console.log(err);
};

fun(true).then(onResolve).catch(onReject);

fun(false).then(onResolve).catch(onReject);

// ******** promise chaining *************
function loadingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1 Loading Data ............');
      resolve();
    }, 3000);
  });
}

function collectingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2 Collecting Data ...............');
      resolve();
    }, 2000);
  });
}

function approvingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('3 approving data ............');
      resolve();
      //   reject('Error : not fulfilled');
    }, 4000);
  });
}

function approved() {
  return new Promise((resolve, reject) => {
    console.log('4 Approved .......');
    // resolve();
  });
}

loadingData()
  .then(collectingData)
  .then(approvingData)
  .then(approved)
  .catch((err) => console.log(err));

//******************** async await ******************* */
async function ex() {
  await loadingData();
  await collectingData();
  await approvingData();
  await approved();
}
//async function returns promise
ex().catch((err) => console.log(err));

// ************ setInterval and clearInterval ***********************/
let num = 1;
let timerId = setInterval(() => {
  console.log(num);
  num++;
  if (num == 4) {
    clearInterval(timerId);
  }
}, 2000);

let interval = setInterval(fnn, 1000);
function fnn() {
  let date = new Date().toLocaleTimeString();
  console.log(date);
}

setTimeout(() => {
  clearInterval(interval);
}, 10000);

// *************** call , bind and apply ***********************/
var objj1 = {
  fName: 'Apple',
  fun: function () {
    console.log(this.fName + ' this is a function');
  },
};

var objj2 = {
  fName: 'Grapes',
};

objj1.fun();

// call - ka matlabh ye hai ke , objj1 aik object hai jismey fun bolke aik function hai
//iss function ko dusraa object use karna chahe tab hamey - call method ko use karke , jo bhi object
//ko refer karwaanaa chahe kar sakte hai
objj1.fun.call(objj1);
objj1.fun.call(objj2);

// --------------
function f1() {
  console.log(this.fName + ' f1 function ');
}

f1.call(objj1);
f1.call(objj2);

//-----
function f2(age) {
  console.log(this.fName, age);
}
f2.call(objj1, 100); //sending parameter
f2.call(objj2, 200); //sending parameter

//-------- apply - we send parameters in array is the only difference
f2.apply(objj1, [300]);
f2.apply(objj2, [600]);

//--------- bind - this returns the function , which we can invoke at any time
const r1 = f2.bind(objj1, [1000]);
const r2 = f2.bind(objj2, [3000]);
r1();
r2();
