var express = require('express');//carga express
var mmmaM01Controller = require('../controllers/maintenenceMayor.controller');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM01Controller.getAllMaintenenceMMMA_M01);
api.post('/mmmaM01-save', mmmaM01Controller.createMaintenenceMMMA_M01);
api.put('/update-mmmaM01/:id', mmmaM01Controller.editMMMA_M01Data);
api.get('/get-history/:id', mmmaM01Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM01Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM01Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM01Controller.checkedApprovalByWorker);
api.get('/mmmaM01/:id', mmmaM01Controller.getMMMA_M01Data);

module.exports = api;//exporta el api