const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});