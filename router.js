const express = require('express');
const routes = express.Router();
const produto = require('./src/controllers/ProdutosControllers')
const funcionario = require('./src/controllers/FuncionariosController')


//Routes Produtos:
routes.post("/createProduto", produto.Create);
routes.get("/listProduto", produto.List);

//Routes Funcionários:

routes
  .get("/funcionarios", funcionario.ListarFuncionarios)
  .post("/funcionarios", funcionario.CriarFuncionario)

// Routes unidades
routes.get('/unidades', unidade.listarUnidades);
routes.get('/unidade/:id', unidade.listarUnidade);
routes.post('/unidade', unidade.cadastrarUnidade);
routes.put('/unidade/:id', unidade.atualizarUnidade);
routes.delete('/unidade/:id', unidade.deletarUnidade);


module.exports = routes