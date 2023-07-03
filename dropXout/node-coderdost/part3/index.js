const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

//third part middleware
app.use(morgan('dev')); //we can give 'default'
//*built in middleware - to read the req.body from a post or put request we need express.json() middleware
app.use(express.json());
//below is built in middleware - used when we are sending data from a form
// app.use(express.urlencoded());

//below is built in middleware - used to send the files that are present in public folder
app.use(express.static('public'));
//using this static middleware we can directly give the url in browser like
//localhost:3000/index.html and it will display the file directly

//custom middleware -  we can say this as logger middleware (this is *app level middleware)
app.use((req, res, next) => {
  console.log(
    req.get('User-Agent'),
    req.method,
    req.ip,
    req.hostname,
    new Date()
  );
  next();
});
const htmlData = fs.readFileSync('./index.html', 'utf-8');
const jsonData = fs.readFileSync('./data.json', 'utf-8');

//we can also have *route level middleware
const auth = (req, res, next) => {
  console.log('checking authentication');
  console.log(req.query);
  if (req.query.password) {
    next();
  } else {
    res.sendStatus(401);
  }
};

const auth2 = (req, res, next) => {
  console.log(req.body);
  if (req.body.password) {
    next();
  } else {
    res.sendStatus(401);
  }
};

//API - EndPoint
//adding middleware on a particular method
app.get('/', auth, (req, res) => {
  res.json({ type: 'GET' });
});

app.get('/product/:id', (req, res) => {
  console.log(req.params);
  res.json({ type: 'GET' });
});

app.post('/', auth2, (req, res) => {
  res.json({ type: 'POST' });
});

app.put('/', (req, res) => {
  res.json({ type: 'PUT' });
});

app.delete('/', (req, res) => {
  res.json({ type: 'DELETE' });
});

app.patch('/', (req, res) => {
  res.json({ type: 'PATCH' });
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
