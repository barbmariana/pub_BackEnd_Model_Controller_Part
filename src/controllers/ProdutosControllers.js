const ModelProduto = require("../models/Produtos")


module.exports ={
    async Create(req, res){
        try {
            const produto = await ModelProduto.create({
                id_produto: req.body.id_produto,
                nome_produto: req.body.nome_produto,
                preco_produto: req.body.preco_produto,
                img_produto: req.body.img_produto,
                descricao: req.body.descricao,
                data_criacao: req.body.data_criacao,
                data_atualizacao: req.body.data_atualizacao

            })
        return res.json(produto)
        } catch (error) {
            console.log (`Erro ao cadastrar produto ${error}`)
            
        }
    },

    async List(req, res){
        try {
            const produtos = await ModelProduto.findAll();
            return res.json(produtos)
        } 
        catch (error) {
            console.log("Error ao lista produtos");
        }
    }
}