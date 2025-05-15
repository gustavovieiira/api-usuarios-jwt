const express = require('express');
const app = express();
const userRoutes = require('./routes/users'); // ajuste o caminho se for diferente
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
