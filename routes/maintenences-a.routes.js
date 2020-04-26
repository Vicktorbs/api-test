const express = require('express');
const router = express.Router();
const maintenenceTypeAController = require('../controllers/maintenenceA.controller')
const jwt = require('jsonwebtoken')

// router.get('/', (req, res) => {
//     res.send('hellos')
// })
router.get('/all-forms', maintenenceTypeAController.getAllMaintenenceTypeA)
// router.get('/all-forms', verifyToken, maintenenceTypeAController.getAllMaintenenceTypeA)
router.post('/create', maintenenceTypeAController.createMaintenenceTypeA)
router.get('/get-history/:id', maintenenceTypeAController.getHistoryOF)
router.put('/update-mpA01/:id', maintenenceTypeAController.editMaintenenceAData)
router.put('/historyUpdate/:id', maintenenceTypeAController.addNewHistoryrecord)
router.get('/getState/:id', maintenenceTypeAController.getStateCheckedApprovalByWorker)
router.put('/updateSate/:id', maintenenceTypeAController.checkedApprovalByWorker)
router.get('/mpA01/:id', maintenenceTypeAController.getMaintenenceAData);


// Verificador de token
async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

        const payload = await jwt.verify(token, 'JHykd7HbjL!eYp^XWR=E');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}

module.exports = router