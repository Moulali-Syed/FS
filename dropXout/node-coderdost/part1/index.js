//file system module
const fs = require('fs');

//readFileSync
const fileData = fs.readFileSync('./demo.txt', 'utf-8');
console.log(fileData);

console.log(performance.now());
fs.readFile('./demo.txt', 'utf-8', (err, data) => {
  if (err) console.log(err.message);
  console.log(data);
});

console.log(performance.now());
console.log('hello there');
