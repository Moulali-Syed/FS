const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());

const userRouter = require('./routes/user');
app.use('/api/v1', userRouter);

app.listen(PORT, () => {
  console.log('server is running');
});
