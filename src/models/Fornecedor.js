const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conection');

class Fornecedor extends Model { }

Fornecedor.init({
    id_fornecedor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_fornecedor: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'fornecedor',
    timestamps: false
})



module.exports = Fornecedor;