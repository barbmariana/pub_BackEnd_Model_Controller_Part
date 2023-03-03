const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conection');


class Funcionario extends Model { }

Funcionario.init({
    id_funcionario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_funcionario: {
        type: DataTypes.STRING,
        allowNull : false
    },
    email_funcionario: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
     modelName: 'funcionarios',
     timestamps: false
});

module.exports = Funcionario ;