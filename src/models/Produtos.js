const { Model, DataTypes } = require('sequelize');
const Categoria = require('./Categoria');
const sequelize = require('../config/conection');

class Produtos extends Model { }

Produtos.init({
    id_produto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_produto: {
        type: DataTypes.STRING,
        allowNull : false
    },
    preco_produto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    img_produto:{
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.STRING,
    },
    data_criacao:{
        type: DataTypes.DATE,
    },
    data_atualizacao:{
        type: DataTypes.DATE,
    }
    


}, {
    sequelize,
     modelName: 'produtos',
     timestamps: false
})

Categoria.hasMany(Produtos);
Produtos.belongsTo(Categoria);

module.exports = Produtos ;