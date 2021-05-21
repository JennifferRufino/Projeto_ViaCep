const express = require("express");
const cors = require("cors");
const routes = require('./routes');
const app = express();

const urlViaCep = 'https://viacep.com.br/ws';

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("🔥 Servidor rodando na porta 3333"));