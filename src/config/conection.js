const Sequelize = require('sequelize');


const conection = new Sequelize('pubApi', 'root', '', {
    host: './db.sqlite',
    dialect: 'sqlite'
  });

  // async function Conectiondb(){
  //   try {
  //       await conection.authenticate();
  //       console.log('Connection has been established successfully.');
  //     } catch (error) {
  //       console.error('Unable to connect to the database:', error);
  //     }
  // }


module.exports = conection;