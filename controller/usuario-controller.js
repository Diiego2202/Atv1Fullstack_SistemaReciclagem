const mongoose = require('mongoose');
const Usuario = require('../model/usuario');

const criar = async (nome, senha, pontos, latitude, longitude) => {
    const usuario = new Usuario({nome: nome, senha: senha, pontos: pontos, latitude: latitude, longitude: longitude});
    return await usuario.save();
}

module.exports.criar = criar;