const express = require('express');
const productRouter = require('./routes/product');
const app = express();

app.use(express.json());

app.use('/api/v1', productRouter);

app.listen(4000, () => {
  console.log('server is running on port 4000');
});
