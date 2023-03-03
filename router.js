const express = require('express');
const routes = express.Router();
const produto = require('./src/controllers/ProdutosControllers')
const funcionario = require('./src/controllers/FuncionariosController')
const unidade = require("./src/controllers/UnidadesController");

//Routes index:
routes.get("/", (req, res) => {
    try {
        res.send("Bem vindo a API de nosso PUB")
    } catch {
        console.log("Problema ao carregar rota.")

    }
})

//Routes Produtos:
routes.post("/createProduto", produto.create);
routes.get("/listProduto", produto.list);
routes.get("/searchProduto/:id", produto.findOne);
routes.put("/updateProduto/:id", produto.update)

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
