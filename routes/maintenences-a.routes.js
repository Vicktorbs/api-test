const express = require('express');
const router = express.Router();
const maintenenceTypeAController = require('../controllers/maintenenceA.controller')

// router.get('/', (req, res) => {
//     res.send('hellos')
// })
router.get('/all-forms', maintenenceTypeAController.getAllMaintenenceTypeA)
router.post('/create', maintenenceTypeAController.createMaintenenceTypeA)
router.get('/get-history/:id', maintenenceTypeAController.getHistoryOF)
router.put('/update-mpA01/:id', maintenenceTypeAController.editMaintenenceAData)
router.put('/historyUpdate/:id', maintenenceTypeAController.addNewHistoryrecord)
router.get('/getState/:id', maintenenceTypeAController.getStateCheckedApprovalByWorker)
router.put('/updateSate/:id', maintenenceTypeAController.checkedApprovalByWorker)
router.get('/mpA01/:id', maintenenceTypeAController.getMaintenenceAData);

module.exports = router