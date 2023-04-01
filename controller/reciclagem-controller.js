const mongoose = require('mongoose');
const Usuario = require('../model/usuario');
const Reciclagem = require('../model/reciclagem');

const reciclar = async (usuarioId, item, imagem, peso, pontos) => {

    let session;
    try {
        session = await mongoose.startSession();
        session.startTransaction();
        const usuario = await Usuario.findById(usuarioId).exec();
        if(usuario){
            let reciclagem = new Reciclagem({usuario: usuario, item: item, imagem: imagem, peso: peso, data: new Date(), pontos: pontos});
            reciclagem = await reciclagem.save({session: session});
            usuario.reciclagem.push(reciclagem);
            await usuario.save({session: session});
            await session.commitTransaction();
            return reciclagem;
        }
        
    } catch (error) {
        console.log(error);
        session.abortTransaction();
    } finally {
        if (session) {
            session.endSession();
        }
    }
    
}

module.exports.reciclar = reciclar;