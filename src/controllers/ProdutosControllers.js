const { DATE } = require("sequelize")
const ModelProduto = require("../models/Produtos")


module.exports = {
    async create(req, res) {
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

    async list(req, res) {
        try {
            const produtos = await ModelProduto.findAll();
            return res.json(produtos)
        }
        catch (error) {
            console.error("Error ao lista produtos", error);
        }
    },

    async findOne(req, res) {
        try {
            const getPk = await ModelProduto.findByPk(req.params.id)
            return res.json(getPk)
        } catch (error) {
            console.error("Error ao buscar id");
        }
    },

    async update(req, res) {
        try {
            const produto = await ModelProduto.findByPk(req.params.id)

            const produtoUpdate = await ModelProduto.update(
                {
                    nome_produto: req.body.nome_produto || produto.nome_produto,
                    preco_produto: req.body.preco_produto || produto.preco_produto ,
                    img_produto: req.body.img_produto || produto.img_produto,
                    descricao: req.body.descricao || produto.descricao,
                    data_criacao: produto.data_criacao,
                    data_atualizacao: Date.now()
                },
                {
                    where: {
                        id_produto: produto.id_produto
                    }

                })
            return res.send("Produto atualizado com sucesso")
        } catch (error) {
            return console.error("Error", error)
        }
    }
}