const Sequelize = require('sequelize');


const conection = new Sequelize('pubApi', 'root', '', {
    host: './db.sqlite',
    dialect: 'sqlite'
  });

module.exports = conection;