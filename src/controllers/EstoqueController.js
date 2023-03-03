const ModelEstoque = require ('../models/Estoque.js');

module.exports = {

    async ListarEstoque(req,res) {
        try {
            const estoque= await ModelFuncionario.findAll();
            return res.json(estoque)
        } 
        catch (error) {
            console.log("Error o adicionar Estoque");
        }
    }, 
    async CriarEstoque (req,res) {
        try {
            const estoque = await ModelEstoque.create({
                id_Estoque : req.body.id_Estoque,
                quantidade_produtos: req.body.quantidade_produtos
               
            })
        return res.json(estoque)
        } catch{
            console.log (`Erro ao cadastrar estoque`)
        }
    },
    async ListarEstoqueUnico(req,res) {
        try{
            const id =  req.params.id
            const estoque = await ModelEstoque.findByPk(id);
            return res.json(estoque)
        }
        catch(error){
            console.log(error + `Erro ao encontrar Estoque de id ${id}`)
        }
    },
    async EditarEstoque (req,res){
        try{
            const id=req.params.id
            await ModelEstoque.update({
                id_Estoque : req.body.id_Estoque,
                quantidade_produtos: req.body.quantidade_produtos
             }, {
                    where: { 
                        id_Estoque:id
                    }
                })
        const estoque = await ModelEstoque.findByPk(id)
        return res.json(estoque)
        }
        catch(error){
            console.log(error + `Erro ao dar update no Estoque de id: ${id}`)
        }
    },
    async DeletarEstoque (req,res){
        try{
            const id=req.params.id
            await ModelEstoque.destroy({
            where:{
                id_funcionario:id
            }
            })
            const funcionarios = ModelFuncionario.findAll();
            return res.json(funcionarios)
        }
        catch(error){
            console.log(error + `Erro ao deletar funcionário de Id: ${id}`)
        }
    }
}


