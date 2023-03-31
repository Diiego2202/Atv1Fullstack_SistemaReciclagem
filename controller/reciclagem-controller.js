const mongoose = require('mongoose');
const Reciclagem = require('../model/reciclagem');
const Usuario = require('../model/usuario');

const reciclar = async (item, imagem, peso, pontos) => {
    const reciclagem = new Reciclagem({item: item, imagem: imagem, peso: peso, data: new Date(), pontos: pontos});
    return await reciclagem.save();
}

module.exports.criar = reciclar;