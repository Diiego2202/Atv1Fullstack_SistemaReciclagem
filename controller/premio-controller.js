const mongoose = require('mongoose');
const Premio = require('../model/premio');

const criar = async (descricao, pontos, quantidade) => {
    const premio = new Premio({descricao: descricao, pontos: pontos, quantidade: quantidade});
    return await premio.save();
}

module.exports.criar = criar;