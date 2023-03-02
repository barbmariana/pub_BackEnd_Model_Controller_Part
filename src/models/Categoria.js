const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../conection');

class Categoria extends Model { }

Categoria.init({
    id_categoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_categoria: {
        type: DataTypes.STRING,
        allowNull : false
    }

}, {
    sequelize,
     modelName: 'categoria',
     timestamps: false
})



module.exports = Categoria ;