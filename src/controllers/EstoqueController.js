const ModelEstoque = require("../models/Estoque")


module.exports = {
    async Create(req, res) {
        try {
            const estoque = await ModelEstoque.create({
                id_Estoque: req.body.id_Estoque,
                quantidade_produtos: req.body.quantidade_produto,

            })
            return res.json(estoque)
        } catch (error) {
            console.log(`Erro ao cadastrar estoque ${error}`)

        }
    },

    async List(req, res) {
        try {
            const estoque = await ModelEstoque.findAll();
            return res.json(estoque)
        }
        catch (error) {
            console.log("Error ao lista estoque");
        }
    }
}