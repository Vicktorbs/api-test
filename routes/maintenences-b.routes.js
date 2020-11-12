var express = require('express');//carga express
var memeB03Controller = require('../controllers/maintenenceB.controller');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
api.get('/all-forms', memeB03Controller.getAllMaintenenceMEME_B03);
api.post('/memeB03-save', memeB03Controller.createMaintenenceMEME_B03);
api.put('/update-memeB03/:id', memeB03Controller.editMEME_B03Data);
api.get('/get-history/:id', memeB03Controller.getHistoryOF);
api.put('/historyUpdate/:id', memeB03Controller.addNewHistoryrecord);
api.get('/getState/:id', memeB03Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', memeB03Controller.checkedApprovalByWorker);
api.get('/memeB03/:id', memeB03Controller.getMEME_B03Data);

module.exports = api;//exporta el api