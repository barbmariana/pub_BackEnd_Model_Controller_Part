const ModelUnidade = require("../models/Unidade");

module.exports = {

    async listarUnidades(req, res) {
        const unidades = await ModelUnidade.findAll();

        if (unidades != undefined) {
            res.json(unidades);
        } else {
            res.sendStatus(404);
        }
    },

    async listarUnidade(req, res) {
        const id = req.params.id;

        if (!isNaN(id)) {
            const unidade = await ModelUnidade.findByPk(id);
            if (unidade != undefined) {
                return res.json(unidade);
            } else {
                res.sendStatus(404);
            }
        } else {
            res.sendStatus(400);
        }

    },

    async cadastrarUnidade(req, res) {
        const {
            cep_unidade,
            rua_unidade,
            numero_unidade,
            bairro_unidade,
            telefone_unidade
        } = req.body;

        try {
            const unidade = await ModelUnidade.create({
                cep_unidade,
                rua_unidade,
                numero_unidade,
                bairro_unidade,
                telefone_unidade,
            })

            return res.json(unidade);
        } catch (error) {
            console.log('Erro ao cadastrar unidade');
            res.sendStatus(400);
        }
    },

    async atualizarUnidade(req, res) {
        const id = req.params.id;
        let old = await ModelUnidade.findByPk(id);
        const {
            cep_unidade,
            rua_unidade,
            numero_unidade,
            bairro_unidade,
            telefone_unidade
        } = req.body;

        const unidadeUpdate = await ModelUnidade.update({
            cep_unidade: cep_unidade || old.cep_unidade,
            rua_unidade: rua_unidade || old.rua_unidade,
            numero_unidade: numero_unidade || old.numero_unidade,
            bairro_unidade: bairro_unidade || old.bairro_unidade,
            telefone_unidade: telefone_unidade || old.telefone_unidade,
        },
            { where: { id_unidade: id } }
        )

        return res.json(unidadeUpdate);
    },

    async deletarUnidade(req, res) {
        const id = req.params.id;
        if (!isNaN(id)) {
            ModelUnidade.destroy({
                where: { id_unidade: id }
            }).then(() => {
                return res.send('porduto deletado')
            }).catch((err) => {
                return res.sendStatus(404)
            })
        }
    }
};