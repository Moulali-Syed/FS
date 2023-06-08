const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello from server');
});
app.use(express.json());

app.get('/home', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Hi There from server',
    hi: [1, 2, 3],
  });
});
app.listen(3000, () => {
  console.log('app is running at port 3000');
});

const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/demo1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log(db);
db.then(() => {
  console.log('connection successful');
});
