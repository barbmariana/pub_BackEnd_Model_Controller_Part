const express = require('express');
const routes = express.Router();
const produto = require ('./src/controllers/ProdutosControllers')
const funcionario = require ('./src/controllers/FuncionariosController');


//Routes Produtos:
routes.post("/createProduto", produto.create);
routes.get("/listProduto", produto.list);
routes.get("/searchProduto/:id", produto.findOne);
routes.put("/updateProduto/:id", produto.update)

//Routes Funcionários:

routes
.get("/funcionarios", funcionario.listarFuncionarios )
.post("/funcionarios", funcionario.criarFuncionario)
.get("/funcionarios/:id", funcionario.listarFuncionarioUnico)
.put("/funcionarios/:id", funcionario.editarFuncionario)
.delete("/funcionarios/:id", funcionario.deletarFuncionario)


module.exports = routes;