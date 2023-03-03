const express = require('express');
const api = express();
const routes = require('./router');
const conection = require('./src/config/conection');
// const produtos = require ('./src/models/Produtos');
// const categoria = require ('./src/models/Categoria');
// const funcionarios = require ('./src/models/Funcionario');


conection.sync({ force: true }).then(() => console.log('Banco Rodando!!'));
const cors = require('cors');

api.use(cors());
api.use(express.json());
api.use(routes);



api.listen(4200, ()=>{
    console.log("Servidor Rodando!!");
});
