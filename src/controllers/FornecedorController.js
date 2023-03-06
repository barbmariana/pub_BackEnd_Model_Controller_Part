const ModelFornecedor = require ('../models/Fornecedor.js');

module.exports = {

    async listarFornecedores(req,res) {
        try {
            const fornecedores= await ModelFornecedor.findAll();
            return res.json(fornecedores)
        } 
        catch (error) {
            console.log("Error o adicionar fornecedor");
        }
    }, 
    async criarFornecedor (req,res) {
        try {
            const fornecedor = await ModelFornecedor.create({
                id_fornecedor: req.body.id_fornecedor,
                nome_fornecedor: req.body.nome_fornecedor,
            })
        return res.json(fornecedor)
        } catch{
            console.log (`Erro ao cadastrar fornecedor`)
        }
    },
    async listarFornecedorUnico(req,res) {
        try{
            const id =  req.params.id
            const fornecedor = await ModelFornecedor.findByPk(id);
            return res.json(fornecedor)
        }
        catch(error){
            console.log(error + `Erro ao encontrar fornecedor de id ${id}`)
        }
    },
    async editarFornecedor (req,res){
        try{
            const id=req.params.id
            await ModelFornecedor.update({
                id_fornecedor : req.body.id_fornecedor,
                nome_fornecedor: req.body.nome_fornecedor,
                }, {
                    where: { 
                        id_fornecedor:id
                    }
                })
        const fornecedor = await ModelFornecedor.findByPk(id)
        return res.json(fornecedor)
        }
        catch(error){
            console.log(error + `Erro ao dar update no fornecedor de id: ${id}`)
        }
    },
    async deletarFornecedor (req,res){
        try{
            const id=req.params.id
            await ModelFornecedor.destroy({
            where:{
                id_fornecedor:id
            }
            })
            const fornecedores = ModelFornecedor.findAll();
            return res.json(fornecedores)
        }
        catch(error){
            console.log(error + `Erro ao deletar fornecedor de Id: ${id}`)
        }
    }
}