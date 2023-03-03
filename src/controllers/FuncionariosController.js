const ModelFuncionario = require ('../models/Funcionario.js');

module.exports ={

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
    }
}



