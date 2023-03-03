const express = require('express');
const routes = express.Router();
<<<<<<< HEAD
const produto = require('./src/controllers/ProdutosControllers')
const funcionario = require('./src/controllers/FuncionariosController')
=======
const produto = require ('./src/controllers/ProdutosControllers')
const funcionario = require ('./src/controllers/FuncionariosController');
>>>>>>> 2c8aef487a245b6492dce5db594b8a782216dea6

const produto = require ('./src/controllers/ProdutosControllers');
const funcionario = require ('./src/controllers/FuncionariosController');

//Routes index:
routes.get("/", (req,res) =>{
    try{
        res.send("Bem vindo a API de nosso PUB")
    }catch{
        console.log("Problema ao carregar rota.")

    }
})

//Routes Produtos:
routes.post("/createProduto", produto.Create);
routes.get("/listProduto", produto.List);
routes.get("/searchProduto/:id", produto.FindOne);
routes.put("/updateProduto/:id", produto.Update)

//Routes Funcionários:

routes
<<<<<<< HEAD
  .get("/funcionarios", funcionario.ListarFuncionarios)
  .post("/funcionarios", funcionario.CriarFuncionario)

// Routes unidades
routes.get('/unidades', unidade.listarUnidades);
routes.get('/unidade/:id', unidade.listarUnidade);
routes.post('/unidade', unidade.cadastrarUnidade);
routes.put('/unidade/:id', unidade.atualizarUnidade);
routes.delete('/unidade/:id', unidade.deletarUnidade);


module.exports = routes
=======
.get("/funcionarios", funcionario.listarFuncionarios )
.post("/funcionarios", funcionario.criarFuncionario)
.get("/funcionarios/:id", funcionario.listarFuncionarioUnico)
.put("/funcionarios/:id", funcionario.editarFuncionario)
.delete("/funcionarios/:id", funcionario.deletarFuncionario)


module.exports = routes;
>>>>>>> 2c8aef487a245b6492dce5db594b8a782216dea6
