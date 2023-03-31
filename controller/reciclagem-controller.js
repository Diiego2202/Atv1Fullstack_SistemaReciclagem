const mongoose = require('mongoose');
const Reciclagem = require('../model/reciclagem');

const criar = async (item, imagem, peso, data, pontos) => {
    const reciclagem = new Reciclagem({item: item, imagem: imagem, peso: peso, data: new Date(), pontos: pontos});
    return await reciclagem.save();
}

module.exports.criar = criar;