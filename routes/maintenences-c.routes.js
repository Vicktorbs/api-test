var express = require('express');//carga express
// var memeC01Controller = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C01');//carga el file de los controladores de usuario
var memeC01Controller = require('../controllers/maintenenceC.controller');

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc. 

api.get('/all-forms', memeC01Controller.getAllMaintenenceMEME_C01);
api.post('/memeC01-save', memeC01Controller.createMaintenenceMEME_C01);
api.put('/update-memeC01/:id', memeC01Controller.editMEME_C01Data);
api.get('/get-history/:id', memeC01Controller.getHistoryOF);
api.put('/historyUpdate/:id', memeC01Controller.addNewHistoryrecord);
api.get('/getState/:id', memeC01Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', memeC01Controller.checkedApprovalByWorker);
api.get('/memeC01/:id', memeC01Controller.getMEME_C01Data);

module.exports = api;//exporta el api