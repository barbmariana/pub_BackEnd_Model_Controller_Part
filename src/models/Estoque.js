const { Model, DataTypes } = require('sequelize');
const Categoria = require('./Categoria');
const sequelize = require('../config/conection');
const Produtos = require('./Produtos');
const Funcionario = require ('./Funcionario')
const Unidade = require ('./Unidade')

class Estoque extends Model { }

Estoque.init({
    id_Estoque: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantidade_produto: {
        type: DataTypes.STRING,
        allowNull: false

    },



}, {
    sequelize,
    modelName: 'Estoque',
    timestamps: false
})

Estoque.hasMany(Produtos);
Produtos.belongsTo(Estoque);


Estoque.hasMany(Funcionario);
Funcionario.belongsTo(Estoque);


Estoque.hasMany(Unidade);
Unidade.belongsTo(Estoque);

module.exports = Estoque;