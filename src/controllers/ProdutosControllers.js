const { DATE } = require("sequelize")
const ModelProduto = require("../models/Produtos")


module.exports = {
    async Create(req, res) {
        try {
            const produto = await ModelProduto.create({

                nome_produto: req.body.nome_produto,
                preco_produto: req.body.preco_produto,
                img_produto: req.body.img_produto,
                descricao: req.body.descricao,
                data_criacao: req.body.data_criacao,
                data_atualizacao: req.body.data_atualizacao

            })
            return res.json(produto)
        } catch (error) {
            console.error("Error ao criar produto", error)

        }
    },

    async List(req, res) {
        try {
            const produtos = await ModelProduto.findAll();
            return res.json(produtos)
        }
        catch (error) {
            console.error("Error ao lista produtos", error);
        }
    },

    async FindOne(req, res) {
        try {
            const getPk = await ModelProduto.findByPk(req.params.id)
            return res.json(getPk)
        } catch (error) {
            console.error("Error ao buscar id");
        }
    },

    async Update(req, res) {
        try {
            const getPk = await ModelProduto.findByPk(req.params.id)

            const produtoUpdate = await ModelProduto.update(
                {
                    nome_produto: req.body.nome_produto || getPk.nome_produto,
                    preco_produto: req.body.preco_produto || getPk.preco_produto ,
                    img_produto: req.body.img_produto || getPk.img_produto,
                    descricao: req.body.descricao || getPk.descricao,
                    data_criacao: getPk.data_criacao,
                    data_atualizacao: Date.now()
                },
                {
                    where: {
                        id_produto: getPk
                    }

                })
            return res.json(produtoUpdate);
        } catch (error) {
            return console.error("Error", error)
        }
    }
}