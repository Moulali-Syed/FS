const express = require('express');
const userRouter = require('./routes/User/userRouter');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server running at Port ${PORT}`);
});
