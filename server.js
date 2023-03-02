const express = require('express');
const api = express();
const routes = require('./router');
const conection = require('./conection');
const produtos = require ('./src/models/Produtos');
const categoria = require ('./src/models/Categoria')


conection.sync({ force: true }).then(() => console.log('banco está rodando'));
const cors = require('cors');

api.use(cors());
api.use(express.json());
api.use(routes);



api.listen(4200, ()=>{
    console.log("Server is runing");
});
