const express = require('express');
const routes = express.Router();
const produto = require ('./src/controllers/ProdutosControllers')
const funcionario = require ('./src/controllers/FuncionariosController');



//Routes Produtos:
routes.post("/createProduto", produto.Create);
routes.get("/listProduto", produto.List);
routes.get("/searchProduto/:id", produto.FindOne);
routes.put("/updateProduto/:id", produto.Update)

//Routes Funcionários:

routes
.get("/funcionarios", funcionario.ListarFuncionarios )
.post("/funcionarios", funcionario.CriarFuncionario)




module.exports = routes