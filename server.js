const express = require('express');
const api = express();
const routes = require('./router');
const conection = require('./conection');
const cors = require('cors');

conection();
api.use(cors());
api.use(express.json());




api.listen(4200, ()=>{
    console.log("Server is runing");
});
