const mongoose = require('../Database/mongoose');

const Cep = new mongoose.Schema({
    cep: String,
    logradouro: String,
    complemento: String,
    bairro: String,
    localidade: String,
    uf: String,
    ibge: String,
    gia: String,
    ddd: String,
    siafi: String
});

const CEPModel = mongoose.model('Cep', Cep);

module.exports = CEPModel;