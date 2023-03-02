const express = require('express');
const routes = express.Router();
const produto = require ('./src/controllers/ProdutosControllers')

routes.post("/createProduto", produto.Create);
routes.get("/listProduto", produto.List);

module.exports = routes