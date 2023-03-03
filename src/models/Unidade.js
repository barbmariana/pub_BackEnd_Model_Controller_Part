const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conection');

class Unidade extends Model { }

Unidade.init({
    id_unidade: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cep_unidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rua_unidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_unidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro_unidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone_unidade: {
        type: DataTypes.STRING,
        allowNull: false
    },



}, {
    sequelize,
    modelName: 'unidade',
    timestamps: false
})



module.exports = Unidade;