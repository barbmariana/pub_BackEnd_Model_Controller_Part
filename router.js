const express = require('express');
const routes = express.Router();
const produto = require ('./src/controllers/ProdutosControllers')
const funcionario = require ('./src/controllers/FuncionariosController')
const estoque = require ('./src/controllers/EstoqueController')
const unidade =  require ('./src/controllers/UnidadesController')


//Routes Produtos:
routes.post("/createProduto", produto.create);
routes.get("/listProduto", produto.list);
routes.get("/searchProduto/:id", produto.findOne);
routes.put("/updateProduto/:id", produto.update)

//Routes Funcionários:

routes
.get("/funcionarios", funcionario.listarFuncionarios)
.post("/funcionarios", funcionario.criarFuncionario)
.get("/funcionarios/:id", funcionario.listarFuncionarioUnico)
.put("/funcionarios/:id", funcionario.editarFuncionario)
.delete("/funcionarios/:id", funcionario.deletarFuncionario)

//Routes Estoque

routes 
.get("/estoque", estoque.ListarEstoque)
.post("/estoque", estoque.CriarEstoque)
.get("/estoque/:id", estoque.ListarEstoqueUnico)
.put("/estoque/:id", estoque.EditarEstoque)
.delete("/estoque/:id", estoque.DeletarEstoque)

// Routes unidades
routes.get('/unidades', unidade.listarUnidades);
routes.get('/unidade/:id', unidade.listarUnidade);
routes.post('/unidade', unidade.cadastrarUnidade);
routes.put('/unidade/:id', unidade.atualizarUnidade);
routes.delete('/unidade/:id', unidade.deletarUnidade);

module.exports = routes;