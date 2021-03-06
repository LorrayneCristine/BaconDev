const express = require ('express');
const ongController = require ('./controllers/ongController');
const incidentController = require ('./controllers/incidentController');
const profilleController = require ('./controllers/profilleController');
const sessionController = require ('./controllers/sessionController');


//const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get ('/profille', profilleController.index);

routes.get ('/incidents', incidentController.index);
routes.post ('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;