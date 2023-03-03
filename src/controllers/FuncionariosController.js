const ModelFuncionario = require ('../models/Funcionario.js');

module.exports = {

    async ListarFuncionarios(req,res) {
        try {
            const funcionarios= await ModelFuncionario.findAll();
            return res.json(funcionarios)
        } 
        catch (error) {
            console.log("Error o adicionar funcionário");
        }
    }, 
    async CriarFuncionario (req,res) {
        try {
            const funcionario = await ModelFuncionario.create({
                id_funcionario : req.body.id_funcionario,
                nome_funcionario: req.body.nome_funcionario,
                email_funcionario: req.body.email_funcionario
            })
        return res.json(funcionario)
        } catch{
            console.log (`Erro ao cadastrar funcionário`)
        }
    },
    async ListarFuncionarioUnico(req,res) {
        try{
            const id =  req.params.id
            const funcionario = await ModelFuncionario.findByPk(id);
            return res.json(funcionario)
        }
        catch(error){
            console.log(error + `Erro ao encontrar funcionário de id ${id}`)
        }
    },
    async EditarFuncionario (req,res){
        try{
            const id=req.params.id
            await ModelFuncionario.update({
                id_funcionario : req.body.id_funcionario,
                nome_funcionario: req.body.nome_funcionario,
                email_funcionario: req.body.email_funcionario}, {
                    where: { 
                        id_funcionario:id
                    }
                })
        const funcionario = await ModelFuncionario.findByPk(id)
        return res.json(funcionario)
        }
        catch(error){
            console.log(error + `Erro ao dar update no funcionário de id: ${id}`)
        }
    },
    async DeletarFuncionario (req,res){
        try{
            const id=req.params.id
            await ModelFuncionario.destroy({
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


