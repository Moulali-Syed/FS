//Operators

//# Arithmetic Operators
console.log(2 + 5);
console.log(10 - 5);
console.log(2 * 3);
console.log(10 / 2);
console.log(10 % 2);

//# increment and decrement operators
let a = 10;
console.log(a++); //postfix
console.log(++a); //prefix

//# comparision operators
let x = 10;
let y = 20;
console.log(x == y);
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);
console.log(x != y);

//#  == and  ===
console.log(2 == '2');
console.log(2 === '2');
console.log(2 !== '2');

//# logical operators
/*
AND &&-  1 1- then true , all other cases false
OR  ||-  0 0 - then only false , all other cases true
NOT  !- 0 then 1 , viceversa

*/

console.log(2 > 3 || 3 > 4); //false
console.log(10 > 5 && 192 > 13); //true
console.log(!true);

// --------------------------- Conditional Statements -------------------------------
let age = 18;
if (age >= 18) {
  console.log('allowed to visit');
} else {
  console.log('not allowed to visit');
}

if (age < 15) {
  console.log('hi');
} else if (age < 10) {
  console.log('hello');
} else {
  console.log('bye');
}

if (age > 15) {
  if (age >= 18) {
    console.log('age is ok');
  }
}

//terenary operator
let msg = age >= 18 ? 'hi there' : 'Take Care';
console.log(msg);

let ch = 1;
switch (ch) {
  case 1:
    console.log('iam 1');
    break;
  case 2:
    console.log('iam 2');
    break;
  case 3:
    console.log('iam 3');
    break;
  default:
    console.log('fine');
}
