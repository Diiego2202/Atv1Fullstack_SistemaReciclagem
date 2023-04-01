const mongoose = require('mongoose');
const premioController = require ('./controller/premio-controller');
const usuarioController = require('./controller/usuario-controller');
const reciclagemController = require('./controller/reciclagem-controller');

const uri = "mongodb+srv://diiego2202:2202@cluster0.opgdhek.mongodb.net/CidadeVerde?retryWrites=true&w=majority";

mongoose.connect(uri).then(async (conn) => {

    //const ret = await usuarioController.criar('User2', '321', 20, 200, 200);
    const ret = await reciclagemController.reciclar("642893a8e96134ae60fa3fb9", "Caixa de leite", "foto2", 5.3, 20);
    console.log(ret);

})