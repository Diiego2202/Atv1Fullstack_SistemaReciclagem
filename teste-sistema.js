const mongoose = require('mongoose');
const premioController = require ('./controller/premio-controller');
const usuarioController = require('./controller/usuario-controller');
const reciclagemController = require('./controller/reciclagem-controller');

const uri = "mongodb+srv://diiego2202:2202@cluster0.opgdhek.mongodb.net/biblioteca?retryWrites=true&w=majority";

mongoose.connect(uri).then(async (conn) => {

    //const ret = await livroController.criar('Livro de Java', 'John Code');
    //const ret = await emprestimoController.emprestar("641a546aaeae70c6ce18aa57");
    //console.log(ret);
    console.log('teste');

})