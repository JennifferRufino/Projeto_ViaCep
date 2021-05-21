const axios = require("axios");
const CEPModel = require("../Model/index");

const urlViaCep = 'https://viacep.com.br/ws';

module.exports = {
    async show(req, res){
        try{
            const {cep} = req.params;
            const findCep = await CEPModel.findOne({
                cep: cep.replace(/\D/g, '')
            }).exec()
            console.log(findCep)
            if(findCep){
                return res.status(200).json(
                    findCep
                )
            }else {
                const response = await axios.get(`${urlViaCep}/${cep}/json`);

                const teste = await CEPModel.create({
                    ...response.data,
                    cep: response.data.cep.replace(/\D/g, '')
                });
               
                return res.status(200).json(
                   teste
                );
            }
            
        }catch(error) {
            return res.status(400);
        }
    }
}