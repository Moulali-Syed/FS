// ********* Property flags and Descriptors *****************

let emp = {};

emp.name = 'Apple';
console.log(Object.getOwnPropertyDescriptor(emp, 'name'));

Object.defineProperty(emp, 'age', {
  value: 21,
  configurable: true,
  enumerable: true,
  writable: true,
});

/*
if configurable - set to false
no one can delete the property
delete emp.age;

if writable set to false 
we cannot overwrite its value
emp.age = 20;

if enumerable set to false
we cannot list the property 
for(let k in emp){
    console.log(k);
}

*/
console.log(emp);
console.log(Object.getOwnPropertyDescriptor(emp, 'age'));

// ******************* __proto__  ***********************************
let obj = {
  fName: 'john',
};
let obj2 = {
  lName: 'doe',
};

//__proto__ se kya hoga - iss se tab ham koi property search karenge obj2 , agar iss mey nahi mila
//toh obj mey se dhoond lega
obj2.__proto__ = obj;
console.log(obj2.fName);

//---------
let obj3 = {
  fName: 'Apple',
};
let obj4 = Object.create(obj3); //this creates a empty object and also refers to obj3
obj4.age = 12;
console.log(obj4);

// __proto__  is same as [[Prototype]]

// ********************  prototype ************************

//constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let user = new Person('apple', 1);
console.log(user);

//using Object.create - we get an empty object {}
function Person2(name, age) {
  let p = Object.create(ob);
  p.name = name;
  p.age = age;
  return p;
}

var ob = {
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
let user2 = Person2('Grapes', 2);
console.log(user2);
user2.greet();

//using prototype

function Person3(name, age) {
  let p = Object.create(Person3.prototype);
  p.name = name;
  p.age = age;
  return p;
}

Person3.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

let user3 = Person3('Banana', 3);
console.log(user3);
user3.greet();

//using new keyword , then no need of creating object using Object.create and returning it

function Person4(name, age) {
  this.name = name;
  this.age = age;
}

Person4.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

let user4 = new Person4('Mangoes', 4);
console.log(user4);
user4.greet();
