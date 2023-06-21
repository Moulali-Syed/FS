'use strict';
/*

Using javascript we can create interactivity in a website

Install vs code editor


*/

// print in console

console.log('Hello world');

// we link js file to html
//using <script src="./file"></script>

console.log(1 + 2);

//single line comment
/*
multi line comment
*/

// variables
let a = 5;
console.log(a);

const b = 10;
console.log(b);

var c = 12;
console.log(c);

/*
d = 20;
console.log(d);

never declare variable like this , if we are in strict mode we will
get error in console

script1.js:42 Uncaught ReferenceError: d is not defined


if we not in strict mode this creates a property on window object
*/

let myName = 'apple';
let n = myName;

//variable name cannot start with number , can start with _ and $

/*
var name = 'Apple';
var name = 'Grapes'

this is possible only using var , this is not a good practice

we cannot do this using let 
*/
var name = 'Apple';
var name = 'Grapes';
console.log(name);

/*
let name1 = 'Apple';
let name1 = 'Grapes';
we get error 
*/

/**   -------------------datatypes in javascript ---------------------------- */
// primitive datatypes

/*
Number
String
Boolean

undefined
null

Symbol
BigInt
*/

let num = 50;
console.log(typeof num); //number

let fname = 'Apple';
console.log(typeof fname); //string

let isValid = true;
console.log(typeof isValid); //boolean

let v;
console.log(typeof v); //undefined

let m = null;
console.log(typeof m); //object

let nm = Symbol(121);
console.log(typeof nm, nm); //symbol

let n1 = BigInt(102);
let n2 = 102n;
console.log(typeof n1); //bigint
//Non Primitive datatypes
/*
Object
Array
Function
*/

//----------------- Type Conversions ---------------

let result = '3' + 2;
console.log(result); //32
console.log(typeof result); //string

console.log('3' + null); //3null    -   string
console.log('3' + undefined); //3undefined   - string
console.log('3' + true); //3true   -  string

//--
let result2 = '3' - 2;
console.log(result2); //1
console.log(typeof result2); //number
console.log(typeof (3 - null)); //number
console.log(typeof ('3' - undefined));

//-------- explicit conversion
let result3 = '3';
console.log(typeof Number(result3));

let nb = 120;
console.log(String(nb));
console.log(typeof String(nb));

let n3 = 20;
console.log(Boolean(n3));

/*
falsy values in javascript

undefined , null , 0 , '' , NaN , false

*/

console.log(parseFloat(12.001));
console.log(parseInt(12.001));
