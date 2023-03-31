const mongoose = require('mongoose');
const premioController = require ('./controller/premio-controller');
const usuarioController = require('./controller/usuario-controller');
const reciclagemController = require('./controller/reciclagem-controller');

const uri = "mongodb+srv://diiego2202:2202@cluster0.opgdhek.mongodb.net/CidadeVerde?retryWrites=true&w=majority";

mongoose.connect(uri).then(async (conn) => {

    const ret = await usuarioController.criar('User1', '123', 10, 100, 100);
    //const ret = await premioController.criar("641a546aaeae70c6ce18aa57");
    console.log(ret);

})