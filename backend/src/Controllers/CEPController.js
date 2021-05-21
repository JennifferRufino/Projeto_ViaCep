const fetch = require("node-fetch");
const CEPModel = require("../Model/index");

const urlViaCep = 'https://viacep.com.br/ws';

module.exports = {
    async show(req, res){
        try{
            const {cep} = req.params;
            const findCep = await CEPModel.findOne({
                cep: cep.replace(/\D/g, '')
            }).exec()
            
            if(findCep){
                return res.status(200).json(
                    findCep
                )
            }else {
                const url = `${urlViaCep}/${cep}/json`;
                const options = {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                      'content-type': 'application/json;charset=utf-8'
                    },
                    timeout: 30000
                  }
                fetch(url, options)
                  .then((response) => {
                      console.log(response)
                    if(response.ok){
                        return response.json()
                    }
                    return res.status(200).json({
                        message: 'Erro',
                        error: true
                    })
                  })
                   .then(async(responseObject) =>{
                       if(responseObject.erro === true){
                           return res.status(200).json({
                               message: 'CEP não encontrado!',
                               error: true
                           })
                       }
                       const newCEP = await CEPModel.create({
                           ...responseObject,
                           cep: responseObject.cep.replace(/\D/g, '')
                       })
                       return res.json(newCEP);
                   })
            }
            
        }catch(error) {
            return res.status(400);
        }
    }
}