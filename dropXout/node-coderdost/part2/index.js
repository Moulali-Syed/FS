const http = require('http');
const fs = require('fs');

const jsonData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
const htmlFile = fs.readFileSync('./index.html', 'utf-8');

const products = jsonData['products'];

const server = http.createServer((req, res) => {
  console.log(req.url + '**** req.url ***');
  if (req.url.startsWith('/product')) {
    const id = req.url.split('/')[2];
    console.log(id + '   is id ');
    const product = products.find((prod) => prod.id === +id);
    console.log(product);
    let newData = htmlFile
      .replace('**url**', product.thumbnail)
      .replace('**title**', product.title)
      .replace('**price**', product.price);
    res.end(newData);
    return;
  }
  switch (req.url) {
    case '/':
      res.setHeader('Content-Type', 'text/html');
      return res.end('<h1>Hello World</h1>');
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('<h1>No Such Route</h1>');
  }
});

server.listen(3000, () => {
  console.log('server is running at port 3000');
});
