const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nome: {type: String, required: true},
    senha: {type: String, required: true},
    pontos: {type: Number, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    reciclagem:[ {type: mongoose.Types.ObjectId, ref: "Reciclagem"} ]

});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;