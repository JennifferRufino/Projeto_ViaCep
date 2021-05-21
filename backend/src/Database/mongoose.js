const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://dbCEP:matthaus123@cluster0.c2eio.mongodb.net/teste?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => {
        console.log("Conexão estabelecida com sucesso!");
    })
    .catch((error) => {
        console.log(`Erro ao estabelecer conexão com MONGODB: ${error}`);
    })

module.exports = mongoose;