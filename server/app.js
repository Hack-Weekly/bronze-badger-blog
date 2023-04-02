const express = require('express');
const { morgan, unknownEndpoint } = require('./utils/middleware');
const userRouter = require('./controllers/users');

const app = express();
app.use(express.json());
app.use(
  morgan(
    ':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'
  )
);

app.use('/api/users', userRouter);

app.use(unknownEndpoint);
// TODO: add error handler and routers

module.exports = app;
