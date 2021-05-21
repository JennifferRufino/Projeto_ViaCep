const Router = require('express');
const CEPController = require('./src/Controllers/CEPController');

const routes = Router();

routes.get("/:cep", CEPController.show);

module.exports = routes;