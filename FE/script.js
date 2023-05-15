//created 4 div elements in html file
console.log(document.body);

console.log(document.body.firstChild); //text
console.log(document.body.firstElementChild); //div

console.log(document.body.childNodes); //NodeList - [text, div, text, div, text, div, text, div, text, script]
const arr = document.body.childNodes;
console.log(Array.isArray(arr)); //false
//we can convert to array
const newArr = Array.from(arr);
console.log(Array.isArray(newArr)); //true
console.log(document.body.children); //HTMLCollection(5) [div, div, div, div, script]
const array = document.body.children;
console.log(Array.isArray(array)); //false
//we can convert to Array
const newArray = Array.from(array);
console.log(Array.isArray(newArray));

console.log(document.body.lastChild);
console.log(document.body.lastElementChild);
