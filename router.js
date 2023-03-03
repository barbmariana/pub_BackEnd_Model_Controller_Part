const express = require('express');
const routes = express.Router();
const produto = require ('./src/controllers/ProdutosControllers')
const funcionario = require ('./src/controllers/FuncionariosController')


//Routes Produtos:
routes.post("/createProduto", produto.Create);
routes.get("/listProduto", produto.List);

//Routes Funcionários:

routes
.get("/funcionarios", funcionario.ListarFuncionarios )
.post("/createFuncionario", funcionario.CriarFuncionario)






module.exports = routes