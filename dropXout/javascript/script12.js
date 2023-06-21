/*
DOM Manipulation


Whenever we press enter - in dom it is considered as text 
*/

//*** Selectors in DOM */
//getElementsByTagName()
let tagEles = document.getElementsByTagName('li');
console.log(tagEles); //gives HTMLCollection

//getElementsByClassName()
let classEles = document.getElementsByClassName('hero');
console.log(classEles); //gives HTMLCollection

//getElementById()
let idEle = document.getElementById('mid');
console.log(idEle); //<li id="mid">John</li>

//querySelector()
let ele = document.querySelector('div');
console.log(ele);

//querySelectorAll()
let eles = document.querySelectorAll('li');
console.log(eles); //gives NodeList

// ************************** Traverse the DOM **************************************/
//parentElement
let li = document.querySelector('li');
console.log(li.parentElement);

//children
let ul = document.querySelector('ul');
console.log(ul.children); //gives HTMLCollection
console.log(ul.children[0]);

//childNode
console.log(ul.childNodes); //gives NodeList , includes text(that is every enter considered as text node)

// ***** Siblings **********//
//previousElementSibling
console.log(document.querySelector('.hero').previousElementSibling);
let a = document.querySelector('.hero').previousElementSibling;
if (a.previousElementSibling == null) {
  console.log('no previous sibling');
} else {
  console.log(a.previousElementSibling);
}

// ***** Append *************//
//appendChild()
const unl = document.querySelector('ul');
const cEle = document.createElement('li');
cEle.textContent = 'Apple';
unl.appendChild(cEle);

// ******** Remove ***************//
const unli = document.querySelector('li');
unli.remove();

// ****** Replace Child ************//
const list = document.querySelector('ul');
const eleToChange = list.children[0];
const newEle = document.createElement('span');
newEle.textContent = 'iam span';
list.replaceChild(newEle, eleToChange);

//***** ParentNode ********** */
var parent = document.querySelector('li');
console.log(parent.parentNode);
//only difference between parentNode and parentElement is
//parentElement returns null  , parentNode returns document  for  document.querySelector('html').parentNode

//previousSibling - gives text node as well  , previousElementSibling - gives element only
//nextSibling - gives text node as well , nextElementSibling - gives element only

// ********** firstChild , lastChild , firstElementChild, lastElementChild ******************/
console.log(document.querySelector('ul').firstChild);
console.log(document.querySelector('ul').firstElementChild);

console.log(document.querySelector('ul').lastChild);
console.log(document.querySelector('ul').lastElementChild);

// ************ innerHTML **************/
const aE = document.querySelector('.change');
aE.innerHTML = `<strong>Hello</strong>`;
aE.innerHTML += 'hello there';
console.log(aE);

const aE2 = document.querySelector('.change');
aE2.outerHTML = `hi.....`;

//************** innerText vs textContent */
let heading = document.querySelector('h1');
console.log(heading.innerText);
console.log(heading.textContent); //textContent shows hidden text as well , though element has display:none it will print

// *************  insertAdjacentHTML ****************
var target = document.querySelector('#insert');
let addEle = `Adding new Text`;
target.insertAdjacentHTML('beforebegin', addEle);
target.insertAdjacentHTML('beforeend', addEle);
target.insertAdjacentHTML('afterbegin', addEle);
target.insertAdjacentHTML('afterend', addEle);

//********** Styling ************* */

document.body.style.backgroundColor = 'pink';

const eS = document.querySelector('h1');
eS.style.color = 'orange';
eS.style.border = '10px solid brown';
eS.style.borderRadius = '10px';

// *************  getAttribute and setAttribute  *******************/
let hero = document.querySelector('.se');
console.log(hero.getAttribute('class'));
hero.setAttribute('id', 'newatt');
console.log(hero);

for (let att of hero.attributes) {
  console.log(att.name, att.value);
}
